FROM node:19-alpine AS base

WORKDIR app/
COPY package*.json ./
COPY planilha.pdf ./
COPY src/* ./

RUN npm ci

EXPOSE 80

CMD ['npm', 'start']