
# PHP + react tutorial docker setup. 

This set of docker container includes:

1. A container running Nginx + PHP

2. A MySQL database.

3. A container running yarn to continually convert ES6 React Javascript into usable code.


# How to use this demo

0. `compose install` the dependencies 

1. `docker compose up --build` the box
 
2. Wait a bit. The first run takes a while as the files are downloaded but then subsequent runs are quick.

3. Be amazed at web page with react on it running at 127.0.0.1


## Notes 

### Login to the docker box

Find the box name

`docker ps`

bash into it

`docker exec -it reacttutorial_npm_1 bash`

### Destroy the box
 
`docker-compose down`


### Run the DB migrations

docker exec -it reacttutorial_web_1 php vendor/bin/phinx migrate

### Snapshot the database

@TODO I haven't figured out escaping command line args.

### Using DB snapshots 

Putting a snapshot of the database into the directory ./docker/db with an extension of either .sql or .sql.gz will cause the database to be built with that data next time.

### Clearing the DB

Delete the contents of ./data/mysql

### How to add something to webpack

```
yarn add babel-preset-es2015 --dev
```

## Notes on optimizing webpack output

http://moduscreate.com/optimizing-react-es6-webpack-production-build/
