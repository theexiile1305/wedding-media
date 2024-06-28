This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [NextAuth.js](https://next-auth.js.org/) and [MUI](https://mui.com/).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Shibboleth OIDC Configuration

Create a file called `.env.local` in the root of the project and add the following:

```bash
NEXT_PUBLIC_AWS_REGION="<given-aws-region>"
NEXT_PUBLIC_AWS_BUCKET_NAME="<given-aws-bucket-name>"
NEXT_PUBLIC_AWS_ACCESS_KEY_ID="<given-aws-key-id>"
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY="<given-aws-access-key>"
```
