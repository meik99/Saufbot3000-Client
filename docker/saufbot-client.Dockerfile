FROM node:13.10.1 as builder

WORKDIR /
RUN git clone https://github.com/meik99/Saufbot3000-Client.git

WORKDIR /Saufbot3000-Client
RUN npm install \
  && npm install -g @angular/cli \
  && ng build --prod \
  && mkdir /output \
  && mkdir /output/app \
  && mv dist /output/app

FROM nginx:latest

ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /output/app/dist/Saufbot3000 /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/
