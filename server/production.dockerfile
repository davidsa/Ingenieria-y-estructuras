FROM node

COPY . /server

WORKDIR /server

RUN yarn install

RUN yarn build

EXPOSE $PORT

ENTRYPOINT ["node", "build/main.js"]

