This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the development server:

```bash
# 1) install dependencies
npm install

# 2) run development server
npm run dev

# 3) open http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- This is my first time trying Next.js!
- I'm using [TypeScript](https://www.typescriptlang.org/) for type safety. 
- I'm using the [Tailwind CSS](https://tailwindcss.com/) framework for styling as suggested.
- Next.js uses Static Site Generation (SSG) by default. This means that the page is pre-rendered at build time and then served as a static file. This is a great way to optimize performance and SEO.
- The routes are defined in `pages/`. The file name is the route. For example, `pages/index.tsx` is the home page. 
- `pages/paths/[dynamic].tsx` is a dynamic route where 'dynamic' matched to the `pathId`. 
- Next.js optimizes the build and bundle process. Each file inside your `pages/` directory will be code split into its own JavaScript bundle during the build process.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

