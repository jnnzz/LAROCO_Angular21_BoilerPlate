# IntProg Act7 — Angular Frontend

Full-stack authentication system frontend built with **Angular 21** and **TypeScript**.

## Live Deployment

- **Live App**: `https://laroco-angular21-fullstack.vercel.app`
- **Backend API**: `https://lab6-intprog.onrender.com`
- **Swagger Docs**: `https://lab6-intprog.onrender.com/api-docs`

## Features

- User registration with email verification
- Login with JWT authentication
- Role-based access (Admin panel vs User dashboard)
- Profile management (view & update)
- Password reset flow
- Auto-refresh of JWT tokens
- Responsive UI

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app runs on `http://localhost:4200` and expects the backend API on `http://localhost:4000`.

## Fake Backend Toggle

For **Stage A** demonstration (no external dependencies):

1. Open `src/app/app.module.ts`
2. **Uncomment** the `fakeBackendProvider` line in the providers array
3. The app will use an in-memory mock backend (localStorage)

For **Stage B** (real backend integration):

1. **Comment out** the `fakeBackendProvider` line
2. Ensure `src/environments/environment.prod.ts` has the correct backend URL
3. Build with `ng build --configuration production`

## Production Build

```bash
ng build --configuration production
```

Output: `dist/angular-21-boilerplate/browser/`
