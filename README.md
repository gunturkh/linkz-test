## Description

Submission for Linkz code challenge

## Running the app

```bash
docker-compose build

docker-compose up
```

## app

[Client: react js (localhost:3000)](http://localhost:3000)

[api: nestjs with mikroorm (localhost:3001)](http://localhost:3001)

[pgadmin4: (localhost:5050)](http://localhost:5050)

## api route

- /user: create new user
- /user/verify: to verify firebase token

## special note

pgadmin username: <admin@admin.com>

pgadmin password: pgadmin4

server config

- name: postgres
- db name: testdb
- username: postgres
- password: postgres
- host: host.internal.docker
- port: 5432
