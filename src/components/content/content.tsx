// Core
import { FC, ReactElement } from 'react';

// Components
import { Episode } from '../episode/episode';
import { Error } from '../error/error';

// Types
import { IEpisode } from '../../types/episodes';

// // Hooks
import { useEpisodes } from '../../episodes/hooks/useEpisodes';

export const Content: FC = () => {
  const { getEpisodes, loading, error, episodes } = useEpisodes();

  const buttonClickHandler = () => {
    getEpisodes();
  };

  console.log(useEpisodes())

  return (
    <section className="game__content content">
      {loading && <h3>Loading..</h3>}
      {error && <h3>No results for this search</h3>}
      {error && <Error errorData={error.message} />}

      <ul className="content__list">
        {episodes
          && episodes.map(
            (episode: IEpisode, id): ReactElement => (
              <Episode key={id} episode={episode} />
            ),
          )}
      </ul>

      {!episodes && <button className="content-download-button" onClick={buttonClickHandler} type="button">Download episodes</button>}
    </section>
  );
};
