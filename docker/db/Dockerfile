FROM mysql:5.7.18

COPY my.cnf /etc/mysql/my.cnf

ADD ./*.sql* /docker-entrypoint-initdb.d/
# ADD ./php_session.sql /docker-entrypoint-initdb.d/php_session.sql

EXPOSE 3306
