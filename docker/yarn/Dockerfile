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
ENV PATH "/opt/app/dist/bin:$PATH"

# Mount the mapped directory at runtime
VOLUME ["/var/app"]
VOLUME ["/var/app/node_modules"]


WORKDIR /var/app/

CMD cd /var/app && yarn install --check-files && npm rebuild node-sass && yarn run dev:build:watch

# For debugging, not having yarn run constantly can be nice.
# Switching the real CMD to this makes life easier.
# CMD tail -f /var/app/readme.MD

