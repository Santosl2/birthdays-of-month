FROM node:19-alpine AS base

WORKDIR app/

COPY . .
ENV PORT=80

RUN npm ci

EXPOSE 80

CMD ['npm', 'run', 'start']