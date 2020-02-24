# Projet SI M1

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

* `MARIA_HOST`: Hostname of mongodb server (by default `localhost`)
* `MARIA_PORT`: port of mongodb server (by default `3306`)
* `MARIA_DB`: Database to use in mongodb server (by default `SI`)
* `MARIA_USER`: Username to use to connect at the database (by default `root`)
* `MARIA_PASSWORD`: Database user password (not required)
* `MARIA_LOG` : Set to `true` if you want to log every queries (not required)

## Scripts

* `build`: Build the application
* `lint`: Lint src folder
* `start`: Start server and watch changed files
* `start:client`: Start client (React)
* `start:build:` Start application from javascript

