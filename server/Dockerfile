FROM node:14.16.0-alpine3.10

WORKDIR /app/backend

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install -D nodemon && \
    npm install

COPY . .

EXPOSE 9000

CMD npm run dev