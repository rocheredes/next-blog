FROM node:16

WORKDIR .

COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

CMD ['npm','start']
