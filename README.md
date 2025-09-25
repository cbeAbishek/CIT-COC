This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Database Migrations

This project uses database migrations to manage schema changes. Before running the app, apply the migrations to set up required tables:

### Using Supabase CLI (Recommended)
```bash
# Apply migrations
supabase db reset
# or for production
supabase db push
```

### Using psql directly
```bash
# Run the migration files in order
psql -h db.your-project.supabase.co -U postgres -d postgres -f migrations/001_create_profiles.sql
```

### Migration Files
- `migrations/001_create_profiles.sql` - Creates the profiles table required for authentication

**Important**: Never create tables directly from the application code in production. Always use migrations for schema changes.

## Migrations

This project enforces a migrations-only policy for schema changes. Do not add runtime DDL endpoints in the application. A sample migration that creates the `profiles` table is included at `migrations/001_create_profiles.sql`.

Run the migration with the Supabase CLI:

1. Install the Supabase CLI: `npm install -g supabase` (or follow the official guide).
2. Login and link to your project: `supabase login` and `supabase link --project-ref <PROJECT_REF>`.
3. Run the SQL against your database: `supabase db remote set <DATABASE_URL>` and then `psql <DATABASE_URL> -f migrations/001_create_profiles.sql` or use the Supabase SQL editor.

In CI, prefer running psql or the Supabase CLI to apply migrations before deploying the app.
