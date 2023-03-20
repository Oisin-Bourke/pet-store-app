This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> This is my first time trying out Next.js!

## Getting Started

```bash
# 1) install dependencies
npm install

# 2) run development server
npm run dev

# 3) open http://localhost:3000

# A) For an optimized build, run:
npm run build
npm run start

# B) open http://localhost:3000

# C) To run cyspress e2e tests, run (from another terminal window):
npm run test

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies
- Using [TypeScript](https://www.typescriptlang.org/) for type safety. 
- Using the [Tailwind CSS](https://tailwindcss.com/) framework for styling as suggested.
- Using [Cypress](https://www.cypress.io/) for end-to-end testing. See `cypress/e2e/app.cy.js` for example.

## Notes
- Next.js uses Static Site Generation (SSG) by default. This means that the page is pre-rendered at build time and then served as a static file. This is a great way to optimize performance and SEO.
- Routes are defined in `pages/` directory. The file name is the route. For example, `pages/index.tsx` is the home page. 
- `pages/paths/[dynamic].tsx` is a dynamic route where `[dynamic]` matches to the `pathId`. 
- Next.js optimizes the build and bundle process. Each file inside the `pages/` directory will be code split into its own JavaScript bundle during the build process.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
