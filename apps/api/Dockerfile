FROM node:22-bullseye

WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
COPY package.json .

COPY apps/api/package.json ./apps/api/package.json

RUN pnpm install

COPY . .

WORKDIR /app/apps/api

EXPOSE 3001

CMD ["pnpm", "dev"]