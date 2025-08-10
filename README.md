# ClubKit

A modern club management platform built with React, TypeScript, Vite, and Convex.

## Features

- 🔐 **Authentication System**: Complete sign-up and sign-in functionality using @convex-dev/auth
- ⚡ **Real-time Backend**: Powered by Convex for seamless data synchronization
- 🎨 **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- 📱 **Responsive Design**: Works on all devices
- 🚀 **Fast Development**: Vite for lightning-fast HMR

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Convex
- **Authentication**: @convex-dev/auth with password provider
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your Convex backend: `npx convex dev`
4. Start the development server: `npm run dev`

## Environment Configuration

- **Development**: Uses `https://outstanding-lemur-810.convex.cloud`
- **Production**: Uses `https://prestigious-hare-405.convex.cloud`

## Deployment

- **Production URL**: https://clubkit-net.vercel.app
- **Preview Deployments**: Automatically deployed on PR creation

## Deployment Success Log

### ✅ End-to-End Testing Completed - January 10, 2025

**Test Results:**
- ✅ Preview deployment configured with dev Convex environment
- ✅ Production deployment configured with prod Convex environment  
- ✅ Sign-up functionality tested and verified
- ✅ Authentication system working correctly
- ✅ Environment-specific Convex connections verified
- ✅ Both preview and production deployments accessible
- ✅ Initial release v0.1.0 ready for deployment

**URLs Verified:**
- Production: https://clubkit-net.vercel.app
- Preview: Auto-generated Vercel preview URLs

**Convex Environments:**
- Development: `outstanding-lemur-810.convex.cloud`
- Production: `prestigious-hare-405.convex.cloud`

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
