// Core
import { FC } from 'react';

// Components
import { ApolloProvider } from '@apollo/react-hooks';
import { Content } from '../content/content';

import { client } from '../../init/client';

export const App: FC = () => (
  <ApolloProvider client={client}>
    <h1>Rick & Morty</h1>
    <Content />
  </ApolloProvider>
);
