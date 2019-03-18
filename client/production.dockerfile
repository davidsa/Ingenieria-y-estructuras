FROM node as builder

COPY . /client

WORKDIR /client

RUN yarn install

RUN yarn build

FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /client/build /var/www

EXPOSE 80

ENTRYPOINT ["nginx","-g", "daemon off;"]
