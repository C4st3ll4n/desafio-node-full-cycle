FROM nginx:1.9.15-alpine

COPY local.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html && touch /var/www/html/index.html

CMD ["nginx", "-g", "daemon off"]