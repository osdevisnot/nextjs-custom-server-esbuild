# Custom server with TypeScript + esbuild example

The example shows how you can use [TypeScript](https://typescriptlang.com) on both the server and the client while using [esbuild](https://esbuild.github.io/) to live reload the server code without affecting the Next.js universal code.

Server entry point is `server/index.ts` in development and `dist/index.js` in production.
The second directory should be added to `.gitignore`.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app custom-server-typescript-app --example "https://github.com/osdevisnot/nextjs-custom-server-esbuild/tree/master"
# or
yarn create next-app custom-server-typescript-app --example "https://github.com/osdevisnot/nextjs-custom-server-esbuild/tree/master"
```
