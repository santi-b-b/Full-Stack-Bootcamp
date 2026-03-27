# Contributing to Twitter Clone

Thank you for your interest in contributing to the Twitter Clone project! This document provides guidelines and instructions for contributing.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## Code of Conduct

This project is committed to providing a welcoming and inclusive environment for all contributors.

- Be respectful and professional in all interactions
- Welcome diverse perspectives and experiences
- Focus on constructive feedback
- Respect confidentiality and privacy

---

## Getting Started

### Prerequisites

- Node.js >= 18.0
- MongoDB instance (local or Atlas)
- Git
- Basic knowledge of Next.js and React

### Setup for Contributors

1. **Fork the repository**

   ```bash
   Click "Fork" on GitHub repository page
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/twitter-clone.git
   cd twitter-clone
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/twitter-clone.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Set up environment**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

---

## Development Workflow

### Creating a Feature Branch

```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `style/description` - Code style changes
- `test/description` - Test additions/updates

Examples:

- `feature/add-retweet-functionality`
- `fix/tweet-character-limit-validation`
- `docs/improve-api-documentation`

### Making Changes

1. **Make your changes** following code standards
2. **Test your changes** locally
3. **Commit regularly** with meaningful messages
4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

---

## Code Standards

### JavaScript/TypeScript

#### File Headers

Every file should start with a JSDoc header:

```javascript
/**
 * @file src/components/MyComponent.jsx - Brief description
 * @description Detailed description of what this file does
 */
```

#### Function Documentation

```javascript
/**
 * Function description
 *
 * @param {Type} paramName - Parameter description
 * @param {Type} [optionalParam] - Optional parameter description
 * @returns {Type} Return value description
 *
 * @example
 * const result = myFunction(param1);
 */
function myFunction(paramName) {
  // Implementation
}
```

#### Component Documentation

```javascript
/**
 * Component description
 *
 * @component
 * @param {Object} props - Component props
 * @param {String} props.title - The component title
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element} Rendered component
 */
const MyComponent = ({ title, onClick }) => {
  // Implementation
};
```

### Code Style Rules

1. **Use functional components** with React Hooks
2. **Use arrow functions** for component definitions
3. **Destructure props** at function start
4. **Use const/let**, avoid var
5. **Meaningful variable names** (no single letters except in maps)
6. **Comments for complex logic** (not obvious code)
7. **Error handling** in all async operations
8. **Input validation** on user-facing components

### Naming Conventions

```javascript
// Files
ComponentName.jsx; // React components
utility - name.js; // Utility functions
constants.js; // Constants
types.ts; // Type definitions

// Variables and Functions
const myVariable = ''; // camelCase for variables
const MY_CONSTANT = 10; // UPPER_SNAKE_CASE for constants
function myFunction() {} // camelCase for functions
function MyComponent() {} // PascalCase for components
```

### Import/Export Order

```javascript
// 1. External dependencies
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Internal components
import MyComponent from './MyComponent';

// 3. Utility functions
import { formatDate } from '@/utils/format';

// 4. Context/Hooks
import { useUser } from '@/contexts/userContext';

// 5. Styles/Constants (if applicable)
import styles from './Component.module.css';
```

---

## Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc)
- `refactor`: Code refactoring without feature change
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies updates

### Examples

```bash
git commit -m "feat(tweets): add tweet deletion functionality

- Implement DELETE endpoint for tweets
- Add confirmation dialog in UI
- Only allow tweet author deletion

Closes #123"
```

```bash
git commit -m "fix(auth): handle session expiration properly

- Add automatic refresh token logic
- Show logout prompt on 401 errors

Fixes #456"
```

### Subject Line Rules

- Use imperative mood ("add" not "added")
- Do not capitalize first letter
- No period at end
- Limit to 50 characters
- Be specific and concise

---

## Pull Request Process

### Before Submitting

1. **Sync with upstream**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run linter**

   ```bash
   npm run lint
   ```

3. **Format code**

   ```bash
   npm run format
   ```

4. **Test thoroughly**
   ```bash
   npm run dev
   # Manually test your changes
   ```

### PR Title Format

Following conventional commits:

```
<type>(<scope>): <description>

Examples:
- feat(auth): add OAuth2 integration
- fix(tweets): correct character count validation
- docs(readme): update installation instructions
```

### PR Description Template

```markdown
## Description

Brief description of changes made.

## Type of Change

- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Related Issues

Closes #(issue number)

## Testing Done

- [ ] Tested locally
- [ ] Tested in different browsers
- [ ] Verified no console errors

## Screenshots (if applicable)

Add screenshots for UI changes

## Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested my changes locally
```

### Review Process

1. **Automated checks** must pass (linting, tests)
2. **Code review** by maintainers
3. **Address feedback** if any
4. **Rebase** if needed before merge
5. **Squash commits** (if requested)

---

## Reporting Bugs

### Before Reporting

- Check if bug was already reported
- Test on latest `main` branch
- Verify it's not an environment issue
- Check documentation

### Bug Report Template

Use GitHub Issues with this template:

```markdown
## Description

Clear description of the bug.

## Steps to Reproduce

1. Step one
2. Step two
3. Step three

## Expected Behavior

What should happen?

## Actual Behavior

What actually happens?

## Environment

- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 90]
- Node version: [e.g., 16.0.0]
- MongoDB version: [if relevant]

## Screenshots

Add screenshots if applicable

## Error Messages/Logs

Include any console errors or logs
```

---

## Requesting Features

### Feature Request Template

Use GitHub Issues with this template:

```markdown
## Feature Description

Clear description of the requested feature.

## Use Case

Why is this feature needed? What problem does it solve?

## Proposed Solution

How should this feature work?

## Alternatives

Any alternative solutions considered?

## Additional Context

Any other relevant information?
```

### Feature Discussion

1. Features are discussed in Issues first
2. Maintainers assess feasibility and design
3. Once approved, create a PR with implementation
4. PRs should reference the original issue

---

## Development Tips

### Running Tests

```bash
# Currently no automated tests
# Manual testing required for each change
```

### Debugging

```javascript
// Use console for debugging
console.log('Debug message:', variable);
console.error('Error occurred:', error);

// Browser DevTools
// F12 to open DevTools
// Network tab to inspect API requests
// Console tab for errors
```

### Performance Tips

- Use React DevTools Profiler
- Check Network tab for unnecessary requests
- Use `React.memo` for expensive components
- Optimize images with next/image

---

## Project Structure Reminder

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── icons/               # SVG icons
├── utils/               # Utility functions
└── middleware.js        # Next.js middleware

lib/
├── models/              # Database schemas
├── auth.js              # Auth utilities
├── mongoose.js          # DB connection
├── sessions.js          # Session management
├── tweets.js            # Tweet operations
└── users.js             # User operations
```

---

## Getting Help

- **Questions:** Open a Discussion on GitHub
- **Bug Help:** Check existing Issues
- **Setup Help:** See README.md Installation section
- **Development Help:** Check code comments and JSDoc

---

## Recognition

Contributors will be recognized in:

- CONTRIBUTORS.md file
- GitHub contributors page
- Release notes (for significant contributions)

---

## License

By contributing, you agree that your contributions will be licensed under the same ISC License as the project.

---

## Questions?

Feel free to:

- Open a GitHub Discussion
- Comment on relevant Issues
- Ask in PRs

Thank you for contributing! 🙏
