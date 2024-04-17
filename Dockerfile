FROM node:18-alpine

COPY ./package*.json /my-app

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]
