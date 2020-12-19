import 'reflect-metadata';
import '..utils/connection';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';


async function bootstrap(){

  const schema = await buildSchema({
    resolvers: []
  });

  const server = new ApolloServer({schema});

  server.listen({ port: 4100 }, () => console.log('Running in port 4100');
  )
};

bootstrap();