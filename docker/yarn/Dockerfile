FROM node:7.10.0


# Install yarn

# ADD ../yarn-latest.tar.gz /opt/
# RUN mv /opt/dist /opt/yarn


# ADD package.json yarn.lock /tmp/

# Copy cache contents (if any) from local machine
# ADD .yarn-cache.tgz /

# Install packages
# RUN cd /tmp && yarn
# RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# tar yarn-demo:latest czf - /root/.yarn-cache/ > .yarn-cache.tgz


VOLUME ["/var/app"]

# ADD yarn-latest.tar.gz /var/app

# RUN ls -l /var/app /var/app/yarn-latest.tar.gz

RUN mkdir -p /opt

# Copy the code
ADD . /opt/app

WORKDIR /opt/app

RUN tar -xvf yarn-latest.tar.gz

ENV PATH "$PATH:/opt/app/dist/bin"

CMD tail -f /var/app/readme.MD
