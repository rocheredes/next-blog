FROM node:16-alpine

WORKDIR .

COPY . .

RUN npm install

#RUN npm run build

EXPOSE 3000
CMD ['npm','run', 'dev']
