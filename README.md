# Projet SI M1

Start :

```
$ yarn install
$ yarn start
```

## Environement

You can create `.env` to set environement variables.

### Server variables

* `PORT`: port of the server (by default `8080`)
* `HOSTNAME`: hostname of the server (by default `0.0.0.0`)
* `NODE_ENV`: Type of environment nodejs, `local` or `production` (by default `local`)
* `TIMEZONE`: IANA Timezone used by the server (by default `Etc/GMT-1`)

### MongoDB variables

* `MONGO_HOST`: Hostname of mongodb server (by default `localhost`)
* `MONGO_PORT`: port of mongodb server (by default `27017`)
* `MONGO_DB`: Database to use in mongodb server (by default `SI`)
* `MONGO_USER`: Username to use to connect at the database (not required)
* `MONGO_PASSWORD`: Database user password (not required)

### MariaDB variables

* `MARIA_HOST`: Hostname of mariadb server (by default `localhost`)
* `MARIA_PORT`: port of mariadb server (by default `3306`)
* `MARIA_DB`: Database to use in mariadb server (by default `SI`)
* `MARIA_USER`: Username to use to connect at the database (by default `root`)
* `MARIA_PASSWORD`: Database user password (not required)
* `MARIA_LOG` : Set to `true` if you want to log every queries (not required)

### Neo4j variables

* `NEO_HOST`: Hostname of neo4j server (by default `localhost`)
* `NEO_PORT`: port of neo4j server (by default `7687`)
* `NEO_USER`: Username to use to connect at the database (by default `neo4j`)
* `NEO_PASSWORD`: Database user password (by default `neo4j`)
* `NEO_PROTOCOL` : Protocol to use to deal with neo4j server (by default `bolt`)

## Scripts

* `build`: Build the application
* `lint`: Lint src folder
* `start`: Start server and watch changed files
* `start:client`: Start client (React)
* `start:build:` Start application from javascript

