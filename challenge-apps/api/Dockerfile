FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install
RUN rm -f .npmrc

EXPOSE 8080

CMD [ "npm", "start" ]
