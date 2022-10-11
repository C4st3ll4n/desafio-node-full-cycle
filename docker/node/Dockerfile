from node:14.11-alpine

WORKDIR /app

COPY entrypoint.sh /usr/bin/docker

COPY package.json /app/

RUN npm install

EXPOSE 3000

ENTRYPOINT ["entrypoint.sh"]