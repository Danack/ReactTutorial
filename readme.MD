
# How to use this demo

1. `docker compose up --build` the box
 
2. Wait a bit. The first run takes a while as, the files are downloaded, but then subsequent runs are quick.

3. Run the php server locally `php -S 127.0.0.1:8000 -t www/`

4. Be amazed at web page with react on it.


## Notes 

### How to add something to webpack

```
yarn add babel-preset-es2015 --dev
```

### Run the DB migrations

docker exec -it reacttutorial_web_1 php vendor/bin/phinx migrate

### Snapshot the database

docker exec -it reacttutorial_web_1 bash scripts/backup_db.sh

### Login to the docker box

Find the box name

`docker ps`

bash into it

`docker exec -it reacttutorial_npm_1 bash`

### Destroy the box
 
 `docker-compose down`



## Notes on optimizing webpack output

http://moduscreate.com/optimizing-react-es6-webpack-production-build/
