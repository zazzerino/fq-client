FROM node:12.18.3 as build

WORKDIR /usr/share/app

COPY package.json package-lock.json tsconfig.json /usr/share/app/

RUN npm install

COPY ./src /usr/share/app/src
COPY ./public /usr/share/app/public

RUN npm run build

FROM nginx

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/share/app/build /usr/share/nginx/html/fq-client

EXPOSE 80 443
