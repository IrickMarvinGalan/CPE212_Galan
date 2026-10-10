FROM ubuntu:22.04

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y mariadb-server apache2

EXPOSE 80 3306

CMD service mariadb start && apachectl -D FOREGROUND
