FROM node:7.10.0

# Make a directory for Yarn to live in.
RUN mkdir -p /opt

# Make the docker folder appear inside the container
ADD . /opt/app

# chdir into /opt/app
WORKDIR /opt/app

# Extract yarn into the /opt/app/dist directory
RUN tar -xvf yarn-latest.tar.gz

# Make Yarn be findable on the path
ENV PATH "$PATH:/opt/app/dist/bin"

# Mount the mapped directory at runtime
VOLUME ["/var/app"]
VOLUME ["/var/app/node_modules"]


WORKDIR /var/app

# RUN yarn

# CMD cd /var/app && yarn install --check-files && yarn run dev:build:watch

CMD tail -f /var/app/readme.MD

