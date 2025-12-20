# AI Learning Platform - Copilot Instructions

## Project Overview

This is a modern AI learning platform (AI学习平台) built with Next.js 15, React 19, and TypeScript. The platform provides courses, online exams, certificate certification, and community collaboration features.

## Technology Stack

- **Frontend**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: MySQL 8.0
- **Authentication**: JWT + bcrypt
- **Form Handling**: React Hook Form + Zod validation
- **Data Visualization**: Recharts
- **Package Manager**: pnpm (required)
- **Node Version**: >=18.18.0

## Project Structure

### Key Directories

- **`app/`**: Next.js App Router
  - `api/`: API endpoints (Next.js Route Handlers)
  - Page routes with nested layouts
  - Uses file-based routing
  
- **`components/`**: React components
  - `ui/`: shadcn/ui base components (DO NOT modify directly)
  - Business components organized by feature
  
- **`lib/`**: Core utilities and business logic
  - `database.ts`: MySQL connection and queries
  - `auth.ts`: Authentication utilities (JWT)
  - `validators.ts`: Zod schemas for validation
  - `api-client.ts`: API client utilities
  - `error-handler.ts`: Error handling utilities
  - `constants.ts`: Application constants
  
- **`types/`**: TypeScript type definitions
  - Shared interfaces and types
  
- **`data/`**: Static data and mock data
  - Course data, exam data, question banks
  
- **`hooks/`**: Custom React hooks
  - `use-mobile.ts`, `use-toast.ts`, `use-exam-state.ts`, etc.
  
- **`scripts/`**: Automation scripts
  - `init-db.ts`: Database initialization
  - `test-db.ts`: Database connection testing
  - `validate-env.ts`: Environment validation
  
- **`docs/`**: Comprehensive documentation
  - Architecture, API docs, coding standards, deployment guides

### Path Aliases

Use `@/` for imports - it resolves to the project root directory (where `app/`, `components/`, `lib/`, etc. are located):
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { User } from "@/types"
```

## Development Commands

### Essential Commands
```bash
pnpm install        # Install dependencies (ALWAYS use pnpm, not npm)
pnpm dev            # Start development server (http://localhost:3000)
pnpm build          # Production build
pnpm start          # Start production server
pnpm lint           # Run ESLint
pnpm type-check     # Run TypeScript compiler check
```

### Database Commands
```bash
pnpm db:init        # Initialize database schema
pnpm db:test        # Test database connection
pnpm validate-env   # Validate environment variables
```

### Development Workflow
1. Run `pnpm install` to install dependencies
2. Set up `.env.local` with required environment variables
3. Run `pnpm db:test` to verify database connection
4. Run `pnpm dev` to start development server
5. Before committing: run `pnpm lint` and `pnpm type-check`

## Coding Standards

### File Naming Conventions
- Components: `kebab-case.tsx` (e.g., `user-profile.tsx`)
- Utilities: `kebab-case.ts` (e.g., `format-date.ts`)
- Types: `kebab-case.ts` (e.g., `user-types.ts`)

### Variable Naming
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)
- **Variables/Functions**: `camelCase` (e.g., `userId`, `getUserById`)
- **Types/Interfaces**: `PascalCase` (e.g., `UserProfile`, `ApiResponse`)
- **Components**: `PascalCase` (e.g., `UserCard`, `Button`)

### TypeScript Guidelines
- **ALWAYS use explicit types**, avoid `any`
- Use interfaces for object shapes
- Use type aliases for unions and complex types
- Prefer `type` for return types and `interface` for data structures
- Enable strict type checking (already configured)

### Import Order
1. React imports
2. Next.js imports
3. Third-party libraries
4. Internal components (using @/)
5. Utilities and helpers
6. Type imports (using `type` keyword)
7. Styles

Example:
```typescript
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { User } from "@/types"
```

### React Component Structure
```typescript
interface ComponentProps {
  // Props with explicit types
  title: string
  onSubmit: (data: FormData) => void
  variant?: "default" | "outline"
}

export function ComponentName({ 
  title, 
  onSubmit, 
  variant = "default" 
}: ComponentProps) {
  // Hooks at the top
  const [state, setState] = useState<Type>(initialValue)
  
  // Event handlers
  const handleClick = () => {
    // ...
  }
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### API Route Structure
```typescript
// app/api/[endpoint]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/database'
import { authenticateRequest } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Authenticate if needed
    const user = await authenticateRequest(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    // Business logic
    const data = await db.query('...')
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}
```

### Error Handling
- Use try-catch for async operations
- For logging, prefer `console.error` for errors and `console.warn` for warnings
- Avoid `console.log` (ESLint will warn) - use `console.error` or `console.warn` instead
- Return appropriate HTTP status codes in API routes
- Use Error Boundaries for React component errors

### Best Practices
- Use `const` by default, `let` only when reassignment is needed
- Prefer arrow functions for callbacks and simple functions
- Use template literals for string interpolation
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Use array methods (`.map()`, `.filter()`, `.reduce()`) over loops
- Avoid deeply nested code - use early returns
- Keep functions small and focused on a single responsibility

## Database

### Connection
- Use `db` from `@/lib/database` for all database operations
- Connection pooling is handled automatically
- Always use parameterized queries to prevent SQL injection

### Example Query
```typescript
import { db } from '@/lib/database'

const [rows] = await db.execute(
  'SELECT * FROM users WHERE id = ?',
  [userId]
)
```

## Authentication

### JWT Token Flow
1. User logs in via `/api/auth/login`
2. Server generates JWT token and sets HTTP-only cookie
3. Middleware validates token on protected routes
4. Use `authenticateRequest()` from `@/lib/auth` in API routes

### Protected Routes
- Use middleware in `middleware.ts` for route protection
- Check authentication in API routes using `authenticateRequest()`

## Component Development

### shadcn/ui Components
- Located in `components/ui/`
- **DO NOT modify these files directly**
- Use `components.json` for configuration
- Extend components by wrapping them, not modifying

### Creating New Components
1. Place in appropriate directory (not in `ui/`)
2. Use TypeScript with explicit prop types
3. Follow naming conventions
4. Export as named export
5. Use Tailwind CSS for styling with `cn()` utility

## Testing

When adding tests:
- Place test files next to the code being tested
- Use `*.test.ts` or `*.test.tsx` extension
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies (database, APIs)

## Git Commit Messages

Follow Conventional Commits:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (not CSS)
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Build process, dependencies

Example:
```
feat(auth): add JWT token refresh endpoint

- Implement refresh token logic
- Add token expiration handling
- Update auth middleware

Closes #123
```

## Branch Naming

- `feature/`: New features
- `fix/`: Bug fixes
- `docs/`: Documentation updates
- `refactor/`: Code refactoring
- `test/`: Test additions/updates

## Common Tasks

### Adding a New Page
1. Create file in `app/` directory (e.g., `app/about/page.tsx`)
2. Export default function component
3. Add to navigation if needed
4. Update types if using dynamic data

### Adding a New API Endpoint
1. Create route handler in `app/api/[endpoint]/route.ts`
2. Export HTTP method functions (GET, POST, etc.)
3. Add authentication if needed
4. Add input validation with Zod
5. Handle errors appropriately
6. Return JSON responses

### Adding a New Component
1. Create file in `components/` (not in `ui/`)
2. Define TypeScript interface for props
3. Implement component with proper types
4. Export as named export
5. Add to barrel export if needed

### Updating Database Schema
1. Modify schema in database
2. Update types in `types/` directory
3. Update relevant queries in `lib/` files
4. Test with `pnpm db:test`

## Environment Variables

Required variables (see `.env.local`):
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`: Database configuration
- `JWT_SECRET`: Secret key for JWT tokens
- `NEXT_PUBLIC_APP_URL`: Application URL

Always validate environment variables using `pnpm validate-env` before running the app.

## Security Considerations

- Never commit `.env.local` or sensitive data
- Always use parameterized queries (no string concatenation)
- Validate all user inputs with Zod schemas
- Use HTTP-only cookies for auth tokens
- Implement rate limiting on API endpoints
- Hash passwords with bcrypt (never store plain text)
- Keep dependencies updated for security patches

## Documentation

- Architecture docs: `docs/architecture.md`
- API documentation: `docs/api-documentation.md`
- Database schema: `docs/database-schema.md`
- Coding standards: `docs/coding-standards.md`
- Troubleshooting: `docs/troubleshooting.md`

Refer to these documents for detailed information on specific topics.

## Build and Deployment

### Local Build
```bash
pnpm build    # Creates production build in .next/
pnpm start    # Runs production server
```

### Pre-deployment Checklist
- [ ] All tests pass
- [ ] `pnpm lint` passes without errors (fix all warnings)
- [ ] `pnpm type-check` passes
- [ ] Environment variables are configured
- [ ] Database migrations are applied
- [ ] No `console.log` statements remain (use `console.error`/`console.warn` for intentional logging)

### Deployment Platform
- Primary: Vercel (optimized for Next.js)
- Database: External MySQL provider
- Static assets: Vercel CDN

## Chinese Language Support

This project includes Chinese documentation and UI. When working on:
- User-facing text: Consider both Chinese and English users
- Documentation: Maintain both Chinese (`*.md`) files where they exist
- Comments: English is preferred for code comments
- Commit messages: Use English for consistency

## Important Notes

- **Always use `pnpm`**, never `npm` or `yarn`
- Run linting and type checking before committing
- Test database connection before running the app
- Keep dependencies minimal - only add if necessary
- Follow the existing code style and patterns
- Update documentation when making significant changes
- Use the existing utilities in `lib/` before creating new ones
- Check `docs/` directory for detailed guidance on specific topics

## Getting Help

If you're unsure about:
- **Architecture**: See `docs/architecture.md`
- **Coding standards**: See `docs/coding-standards.md`
- **Troubleshooting**: See `docs/troubleshooting.md`
- **Database**: See `docs/database-schema.md`
- **API design**: See `docs/api-documentation.md`
