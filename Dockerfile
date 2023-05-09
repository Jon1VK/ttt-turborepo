FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat openssl
RUN npm install turbo@latest -g
WORKDIR /repo
COPY ./ ./
RUN npm install

FROM base as db-migrate
RUN apk add --no-cache postgresql-client
CMD ["turbo", "db:migrate:dev"]

FROM base as db-studio
CMD ["turbo", "db:studio"]

FROM base AS development
CMD ["turbo", "dev"]
