# Clerk + Next.js Demo

This project demonstrates how to integrate Clerk with a Next.js application for authentication and user management.

## Getting Started

### Step 1: Create a Clerk Application

1. Visit the [Clerk Dashboard](https://dashboard.clerk.com/apps) to create a new application instance.
2. Obtain the following keys from the dashboard:
   - **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**
   - **CLERK_SECRET_KEY**

### Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root of your project.
2. Add the keys from Step 1 to the `.env.local` file as follows:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```

   Replace your_publishable_key_here and your_secret_key_here with your actual keys.

### Setp 3: Install Dependencies and Start the Development Server

```shell
npm i
npm run dev
```

The application will be accessible at http://localhost:3000.
