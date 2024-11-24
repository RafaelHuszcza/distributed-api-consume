FROM node:20-alpine AS base

WORKDIR /usr/src/app


COPY package.json  ./
COPY package-lock.json  ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 	3000

CMD npm run start
