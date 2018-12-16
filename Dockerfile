FROM node:10.2.1-alpine as libs

WORKDIR /opt/app
COPY package.json .
COPY yarn.lock .
RUN yarn --prod && \
    yarn cache clean


FROM node:10.2.1-alpine

WORKDIR /opt/app
ENV NODE_ENV=production
CMD ["node", "build/server.js"]
LABEL MAINTAINER="Pavel Ivanov <ivpavig@gmail.com>" VERSION="v1.0.0"

COPY --from=libs /opt/app/node_modules node_modules
COPY . .

RUN chown -R node:node /opt/app
USER node
