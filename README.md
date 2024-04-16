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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
