# using node 18 image
FROM node:18

#install managment package pnpm

RUN npm i -g pnpm

#definition of the work repetorie
WORKDIR /app

#copy files

COPY package*.json .
COPY vite.config.ts ./

#install dependencies

RUN pnpm i

COPY . .

#expose port 5173

EXPOSE 3000

#starting application with vite
CMD [ "npm","run","dev" ]
