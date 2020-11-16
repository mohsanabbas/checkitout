# Next - Urql - Typescript - React

## Run the app

```

$ yarn run dev

```

This command starts the server in the port **3000**.

> **Note:**

> To get geocode longtitude and latitude, I used **mapquestapi**,

> we first get the inserted serach term which will be sent to `mapquestapi` and get longtitude , latitude of the address, which will be used in query params to get distributors.

> CHECK package.json: you see that 'yarn run gen' runs codegen.yml to genrate grphql types. to use this script all you need to do is add your graphql queries inside graphql/queries and run this script which will generate types inside generated folder in `graphql.tsx` file.

```
Cheers
```
