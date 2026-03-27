/**
 * @file src/utils/validation.js - Form validation utility functions
 * @description Provides reusable validation functions for email, password, username, etc.
 * Used across all form components for consistent validation rules
 */

/**
 * Email validation using regex pattern
 * Checks for basic email format (user@domain.com)
 *
 * @param {string} email - Email address to validate
 * @returns {Object} { isValid: boolean, message: string }
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || email.trim() === '') {
    return { isValid: false, message: 'Email is required' };
  }

  if (email.length > 254) {
    return { isValid: false, message: 'Email is too long (max 254 characters)' };
  }

  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }

  return { isValid: true, message: '' };
};

/**
 * Password validation with strength requirements
 * Requirements:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 *
 * @param {string} password - Password to validate
 * @returns {Object} { isValid: boolean, message: string, strength: 'weak'|'medium'|'strong' }
 */
export const validatePassword = (password) => {
  if (!password || password === '') {
    return { isValid: false, message: 'Password is required', strength: 'weak' };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long',
      strength: 'weak',
    };
  }

  if (password.length > 128) {
    return {
      isValid: false,
      message: 'Password is too long (max 128 characters)',
      strength: 'strong',
    };
  }

  // Check for uppercase
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter',
      strength: 'weak',
    };
  }

  // Check for lowercase
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one lowercase letter',
      strength: 'weak',
    };
  }

  // Check for number
  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number',
      strength: 'medium',
    };
  }

  // All requirements met
  return { isValid: true, message: '', strength: 'strong' };
};

/**
 * Username validation
 * Requirements:
 * - 3-20 characters long
 * - Only alphanumeric characters and underscores
 * - Must start with a letter or number
 *
 * @param {string} username - Username to validate
 * @returns {Object} { isValid: boolean, message: string }
 */
export const validateUsername = (username) => {
  if (!username || username.trim() === '') {
    return { isValid: false, message: 'Username is required' };
  }

  const trimmedUsername = username.trim();

  if (trimmedUsername.length < 3) {
    return { isValid: false, message: 'Username must be at least 3 characters long' };
  }

  if (trimmedUsername.length > 20) {
    return { isValid: false, message: 'Username must be at most 20 characters long' };
  }

  // Only alphanumeric and underscores
  if (!/^[a-zA-Z0-9_]+$/.test(trimmedUsername)) {
    return {
      isValid: false,
      message: 'Username can only contain letters, numbers, and underscores',
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Name validation (full name)
 * Requirements:
 * - At least 2 characters
 * - At most 50 characters
 * - Can contain letters, spaces, hyphens, apostrophes
 *
 * @param {string} name - Name to validate
 * @returns {Object} { isValid: boolean, message: string }
 */
export const validateName = (name) => {
  if (!name || name.trim() === '') {
    return { isValid: false, message: 'Name is required' };
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters long' };
  }

  if (trimmedName.length > 50) {
    return { isValid: false, message: 'Name must be at most 50 characters long' };
  }

  // Only letters, spaces, hyphens, and apostrophes
  if (!/^[a-zA-Z\s\-']+$/.test(trimmedName)) {
    return {
      isValid: false,
      message: 'Name can only contain letters, spaces, hyphens, and apostrophes',
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Search query validation
 * Requirements:
 * - 1-100 characters
 * - Not just whitespace
 *
 * @param {string} query - Search query to validate
 * @returns {Object} { isValid: boolean, message: string }
 */
export const validateSearchQuery = (query) => {
  if (!query || query.trim() === '') {
    return { isValid: false, message: 'Search query cannot be empty' };
  }

  if (query.length > 100) {
    return { isValid: false, message: 'Search query must be at most 100 characters' };
  }

  return { isValid: true, message: '' };
};

/**
 * Get password strength visual indicator
 *
 * @param {string} password - Password to check
 * @returns {Object} { strength: 'weak'|'medium'|'strong', color: string, width: string }
 */
export const getPasswordStrength = (password) => {
  if (!password) {
    return { strength: 'weak', color: 'bg-red-500', width: 'w-1/3' };
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) {
    return { strength: 'weak', color: 'bg-red-500', width: 'w-1/3' };
  } else if (score <= 4) {
    return { strength: 'medium', color: 'bg-yellow-500', width: 'w-2/3' };
  } else {
    return { strength: 'strong', color: 'bg-green-500', width: 'w-full' };
  }
};
