/**
 * @file lib/models/User.js - User database schema and model
 * @description Defines the User schema with authentication and profile information.
 * Includes password hashing middleware and comparison methods for secure authentication.
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * User Schema - Defines the structure of user documents in MongoDB
 * @type {mongoose.Schema}
 */
const UserSchema = new mongoose.Schema({
  /** @property {String} name - User's full name (required) */
  name: { type: String, required: true },

  /** @property {String} userName - Unique username for display (required, unique) */
  userName: { type: String, required: true, unique: true },

  /**
   * @property {String} email - User's email address
   * Required, unique, lowercase, with email format validation
   */
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
  },

  /**
   * @property {String} password - Hashed password
   * Required, but not selected by default in queries for security
   * Use .select('+password') to include in queries when needed
   */
  password: { type: String, required: true, select: false },

  /** @property {String} image - User's avatar/profile image URL */
  image: { type: String, default: '/assets/default-avatar.png' },

  /** @property {String} bio - User's biography (max 160 characters) */
  bio: { type: String, maxlength: 160 },

  /** @property {String} location - User's location information */
  location: { type: String },

  /** @property {Array<String>} following - Array of user IDs that this user follows */
  following: { type: [String], default: [] },

  /** @property {Date} createdAt - Account creation timestamp */
  createdAt: { type: Date, default: Date.now },
});

/**
 * Pre-save middleware to hash password before storing in database
 *
 * Automatically hashes passwords using bcrypt when:
 * - Creating a new user (password doesn't exist yet)
 * - Updating password field
 *
 * Skips hashing if password hasn't been modified to avoid double-hashing
 *
 * @function
 * @async
 */
UserSchema.pre('save', async function (next) {
  // Skip hashing if password hasn't been modified
  if (!this.isModified('password')) return next();

  // Generate salt and hash password (salt rounds: 10 for security/performance balance)
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * Instance method to compare plaintext password with hashed password
 *
 * Used during authentication to verify user's login credentials
 *
 * @async
 * @param {String} candidatePassword - The plaintext password to compare
 * @returns {Promise<Boolean>} True if password matches, false otherwise
 *
 * @example
 * const user = await User.findOne({ email }).select('+password');
 * const isValid = await user.comparePassword(loginPassword);
 * if (!isValid) return error('Invalid credentials');
 */
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

/**
 * Create or retrieve User model
 * Using pattern: mongoose.models.User || mongoose.model('User', UserSchema)
 * prevents model redefinition errors in development with hot reloading
 */
export default mongoose.models.User || mongoose.model('User', UserSchema);
