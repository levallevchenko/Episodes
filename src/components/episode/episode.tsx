// Core
import { FC } from 'react';
import dayjs from 'dayjs';

// Types
import { IEpisode } from '../../types/episodes';

type Props = {
  episode: IEpisode;
};

export const Episode: FC<Props> = ({ episode }) => {
  const createdDate = dayjs(episode.created).format('DD MMMM YYYY');

  const tabIndex = 0;

  return (
    <li className="content__item game__item" tabIndex={tabIndex}>
      <h3>{episode.name}</h3>
      <p><b>Created:</b> {createdDate}</p>
      <p><b>Episode:</b> #{episode.episode}</p>
    </li>
  );
};
