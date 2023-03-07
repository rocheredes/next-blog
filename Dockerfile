FROM node:16

WORKDIR .

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ['npm','start']




#FROM node:latest
#
#RUN mkdir /root/app/
#
#WORKDIR /root/app/
#
#COPY . /root/app/
#
#RUN npm install
#
#RUN npm run build
#
#EXPOSE 3000

#CMD npm run start
#CMD ['npm','run', 'start']
