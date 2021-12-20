FROM node:14-slim as base

RUN apt-get update

# ---

FROM base as deps-dev

WORKDIR /deps

COPY package.json package-lock.json ./

RUN npm ci --unsafe-perm --quiet --no-progress

# ---

FROM node:14-alpine3.13 as deps-prod

WORKDIR /deps

COPY package.json package-lock.json ./

ENV NODE_ENV=production

RUN npm ci --unsafe-perm --quiet --no-progress

# ---

FROM node:14-alpine3.13 as i18n

WORKDIR /i18n

COPY package.json ./
COPY --from=deps-dev /deps/node_modules node_modules

RUN npm run i18n:extract
RUN npm run i18n:compile

# ---

FROM base as build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /build

COPY --from=deps-dev /deps/node_modules node_modules

COPY . .

RUN npm run build

# ---

FROM node:14-alpine3.13

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json next.config.js ./

COPY --from=deps-prod /deps/node_modules node_modules
COPY --from=build /build/.next .next
COPY --from=build /build/public public
COPY --from=i18n /i18n/src/lib/i18n/translations/compiled src/lib/i18n/translations/compiled

ENV PATH="$PATH:node_modules/.bin"

ENTRYPOINT [ "npm" ]

CMD [ "run", "start" ]
