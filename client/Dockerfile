FROM node:14.16.0-alpine3.10

WORKDIR /app/frontend

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm cache clean --force

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]