FROM richarvey/nginx-php-fpm:latest

# Documentation at https://github.com/ngineered/nginx-php-fpm

WORKDIR /var/www

RUN ln -sf /proc/self/fd/1 /var/log/nginx/access.log
RUN ln -sf /proc/self/fd/1 /var/log/nginx/error.log