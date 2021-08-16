// Core
import { ApolloError } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Types
import { Episodes } from '../../../types/episodes';
import { appearingData } from '../../../types/basic';

// Queries
const queryEpisodes = loader('./gql/queryEpisodes.graphql');

type Query = {
  getEpisodes: () => void;
  loading: boolean;
  error: appearingData<ApolloError>;
  episodes: Episodes;
}

export const useEpisodes = (): Query => {
  const queryResult = useLazyQuery(queryEpisodes);
  const [getEpisodes, { loading, error, data }] = queryResult;

  return {
    getEpisodes, loading, error, episodes: data && data.episodes.results,
  };
};
