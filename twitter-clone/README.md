# 𝕏 Twitter Clone

A full-stack social media application built with modern web technologies. This project replicates core Twitter/X functionality including user authentication, tweet creation, real-time updates, and social features like following and liking.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?style=flat-square&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Key Components](#key-components)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)

---

## Features

✨ **Authentication & Authorization**

- User registration and secure login with bcrypt password hashing
- Session-based authentication with JWT sessions
- Persistent user sessions with HTTP-only cookies
- Protected routes and API endpoints

🐦 **Core Functionality**

- Create, edit, and delete tweets
- View timeline with real-time tweet feeds
- Like/unlike tweets with instant UI updates
- View user profiles with follower information
- Follow/unfollow other users
- View following feed (tweets from followed users)

👥 **Social Features**

- User profiles with customizable bio and avatar
- Follow/following system
- User discovery through search
- User interactions tracking

🎨 **User Interface**

- Responsive design with Tailwind CSS
- Modern UI components with Radix UI integration
- Custom icons using react-icons
- Smooth auto-resizing textarea for tweet composition
- Loading states and error handling

---

## Tech Stack

### Frontend

- **Next.js 16** - React framework with server-side rendering and API routes
- **React 19.1** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **react-icons** - Icon library
- **react-textarea-autosize** - Auto-expanding textarea component

### Backend

- **Node.js** - JavaScript runtime
- **Next.js API Routes** - Serverless functions for API endpoints
- **Mongoose 8.19** - MongoDB object modeling
- **MongoDB 7.0** - NoSQL database

### Security & Utilities

- **bcrypt 6.0** - Password hashing
- **dotenv** - Environment variable management
- **clsx** - Conditional CSS class names

### Development Tools

- **ESLint 9** - Code quality and linting
- **Prettier 3.6** - Code formatting
- **Tailwind CSS PostCSS** - CSS-in-JS processing

---

## Project Structure

```
twitter-clone/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── api/                      # API routes (backend)
│   │   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── tweets/               # Tweet management endpoints
│   │   │   └── users/                # User management endpoints
│   │   ├── (main)/                   # Main application layout
│   │   │   ├── layout.js             # Main layout wrapper
│   │   │   ├── page.js               # Home/timeline page
│   │   │   ├── following/            # Following feed page
│   │   │   ├── tweet/                # Individual tweet view
│   │   │   └── user/                 # User profile pages
│   │   ├── login/                    # Authentication pages
│   │   ├── globals.css               # Global styles
│   │   └── layout.js                 # Root layout
│   ├── components/                   # Reusable React components
│   │   ├── CreatePostForm.jsx        # Tweet composition form
│   │   ├── TweetCard.jsx             # Individual tweet display
│   │   ├── TweetGrid*.jsx            # Tweet grid layouts
│   │   ├── UserCard.jsx              # User profile card
│   │   ├── Header.jsx                # Page header
│   │   └── [other components]        # Additional UI components
│   ├── contexts/                     # React Context for state management
│   │   ├── userContext.jsx           # Global user state
│   │   └── tweetsContext.jsx         # Global tweets state
│   ├── hooks/                        # Custom React hooks (expandable)
│   ├── icons/                        # Custom SVG icons
│   │   └── ICONS.js                  # Icon exports
│   ├── middleware.js                 # Next.js middleware for auth checks
│   └── utils/                        # Utility functions
│       └── formatTimestamp.js        # Timestamp formatting utility
├── lib/                              # Backend utilities and database models
│   ├── models/                       # MongoDB schema definitions
│   │   ├── User.js                   # User schema with password hashing
│   │   ├── Tweet.js                  # Tweet schema
│   │   └── Session.js                # Session schema
│   ├── auth.js                       # Authentication utilities
│   ├── mongoose.js                   # MongoDB connection manager
│   ├── sessions.js                   # Session management
│   ├── tweets.js                     # Tweet data operations
│   └── users.js                      # User data operations
├── public/                           # Static assets
│   └── assets/                       # Images, logos, etc.
├── .env.local                        # Local environment variables (not in git)
├── package.json                      # Project dependencies
├── tailwind.config.js/mjs            # Tailwind CSS configuration
├── eslint.config.mjs                 # ESLint configuration
├── postcss.config.mjs                # PostCSS configuration
└── next.config.mjs                   # Next.js configuration
```

---

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** >= 18.0 (download from [nodejs.org](https://nodejs.org))
- **npm** >= 9.0 or **yarn**
- **MongoDB** (local or cloud instance via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** for version control

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd twitter-clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with the following variables:

   ```bash
   # MongoDB Connection
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/twitter-clone

   # Next.js Environment
   NODE_ENV=development

   # Optional: Cloudinary for image uploads
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

   # Session Configuration
   SESSION_SECRET=your-secure-random-string-here
   ```

---

## Environment Variables

| Variable                               | Description                             | Required | Example                                          |
| -------------------------------------- | --------------------------------------- | -------- | ------------------------------------------------ |
| `MONGODB_URI`                          | MongoDB connection string               | ✅ Yes   | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `NODE_ENV`                             | Environment mode                        | ✅ Yes   | `development` or `production`                    |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`    | Cloudinary cloud name for image uploads | ❌ No    | `your-cloud`                                     |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset                | ❌ No    | `preset-name`                                    |
| `SESSION_SECRET`                       | Secret key for session encryption       | ✅ Yes   | Random string (min 32 chars)                     |

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser; never put secrets there.

---

## Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

---

## API Endpoints

### Authentication

| Method | Endpoint             | Description       | Auth Required |
| ------ | -------------------- | ----------------- | ------------- |
| `POST` | `/api/auth/register` | Register new user | ❌ No         |
| `POST` | `/api/auth/login`    | User login        | ❌ No         |
| `POST` | `/api/auth/logout`   | User logout       | ✅ Yes        |
| `GET`  | `/api/auth/me`       | Get current user  | ✅ Yes        |

### Tweets

| Method   | Endpoint                | Description          | Auth Required |
| -------- | ----------------------- | -------------------- | ------------- |
| `GET`    | `/api/tweets`           | Fetch all tweets     | ❌ No         |
| `POST`   | `/api/tweets`           | Create new tweet     | ✅ Yes        |
| `GET`    | `/api/tweets/[id]`      | Fetch specific tweet | ❌ No         |
| `PUT`    | `/api/tweets/[id]`      | Update tweet         | ✅ Yes        |
| `DELETE` | `/api/tweets/[id]`      | Delete tweet         | ✅ Yes        |
| `POST`   | `/api/tweets/[id]/like` | Like/unlike tweet    | ✅ Yes        |

### Users

| Method | Endpoint                 | Description          | Auth Required |
| ------ | ------------------------ | -------------------- | ------------- |
| `GET`  | `/api/users`             | Fetch all users      | ❌ No         |
| `GET`  | `/api/users/[id]`        | Fetch user profile   | ❌ No         |
| `PUT`  | `/api/users/[id]`        | Update user profile  | ✅ Yes        |
| `POST` | `/api/users/[id]/follow` | Follow/unfollow user | ✅ Yes        |

---

## Database Schema

### User Schema

```javascript
{
  _id: ObjectId,
  name: String (required),
  userName: String (required, unique),
  email: String (required, unique, lowercase),
  password: String (required, hashed with bcrypt),
  image: String (default: '/assets/default-avatar.png'),
  bio: String (max 160 characters),
  location: String,
  following: [String] (array of user IDs),
  createdAt: Date (default: Date.now)
}
```

### Tweet Schema

```javascript
{
  _id: ObjectId,
  text: String (required, max 280 characters),
  author: ObjectId (reference to User, required),
  images: [String] (array of image URLs),
  likes: [ObjectId] (array of user IDs who liked),
  replies: [ObjectId] (array of reply tweet IDs),
  retweets: [ObjectId] (array of user IDs who retweeted),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Session Schema

```javascript
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  sessionId: String (unique),
  expiresAt: Date,
  createdAt: Date (default: Date.now)
}
```

---

## Key Components

### UserContext (`src/contexts/userContext.jsx`)

Global state management for user authentication and profile data. Provides:

- `user`: Current authenticated user object
- `authless`: Boolean indicating if user is not authenticated
- `setUser`: Update user state
- `fetchUser`: Fetch current user from API
- Hook: `useUser()` to access context anywhere

### TweetCard (`src/components/TweetCard.jsx`)

Displays individual tweets with:

- Author information and avatar
- Tweet text and images
- Like/unlike functionality
- Timestamp formatting
- Loading states

### CreatePostForm (`src/components/CreatePostForm.jsx`)

Form for composing new tweets with:

- Text input with auto-resizing
- Image upload integration with Cloudinary
- Tweet submission
- Success/error handling

---

## Development Guidelines

### Code Style

- Follow ESLint rules configured in `eslint.config.mjs`
- Format code with Prettier before committing
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Component Guidelines

- Use functional components with React Hooks
- Separate business logic from UI components
- Handle loading and error states appropriately
- Minimize re-renders with React.memo and useMemo where necessary

### Best Practices

- Always validate user input on both client and server
- Never expose sensitive data in frontend code
- Use environment variables for configuration
- Implement proper error handling and logging
- Write readable and maintainable code
- Test API endpoints before deployment

### Security Best Practices

- Passwords are hashed with bcrypt (10 salt rounds)
- Sessions use HTTP-only cookies
- CORS and CSRF protections should be configured
- Input validation on all API endpoints
- SQL injection prevention through Mongoose
- Regular security audits recommended

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "Add your feature"`
3. Push to the branch: `git push origin feature/your-feature-name`
4. Submit a Pull Request with a clear description of changes

---

## Future Enhancements

- [ ] Direct messaging between users
- [ ] Tweet search and filtering
- [ ] Hashtags and trending topics
- [ ] Notifications system
- [ ] Tweet threading/conversations
- [ ] Real-time updates with WebSocket
- [ ] Media gallery and lightbox
- [ ] User mentions and tagging
- [ ] Dark mode toggle
- [ ] Mobile app version

---

## Troubleshooting

### MongoDB Connection Issues

- Verify `MONGODB_URI` is correct in `.env.local`
- Check MongoDB Atlas firewall settings
- Ensure your IP address is whitelisted

### Session/Authentication Not Working

- Clear browser cookies
- Ensure `SESSION_SECRET` is set in environment
- Check that cookies are not being blocked

### Image Upload Issues

- Verify Cloudinary credentials are correct
- Check upload preset is active
- Ensure file size is within limits

---

## License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Mongoose Documentation](https://mongoosejs.com/docs)

---

**Built with ❤️ by [Your Name]**
_Last Updated: March 2026_
