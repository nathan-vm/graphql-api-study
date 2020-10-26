# graphql-api-study

#### You need a mongodb in you machine, recommend use docker :

```bash
sudo docker run --name mongodb_graphql -p 27017:27017 -d mongo
```

create a .env file with your mongodb connection (this repo has a .env.exemple)

install dependencies with :
```bash
yarn install
```

run the project with :
```bash
yarn dev
```

open http://localhost:4000 to see the interface for make requests
