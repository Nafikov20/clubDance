import { memo } from 'react';
import { iTrack } from "../../store/music-reducer";
import styles from './app-header.module.css';

export const AppHeader = memo (({title, genre}: iTrack) => {
  const genreFormatted = genre.toUpperCase();
  return (
    <header className={styles.header}>
      <div className="current-track">
        <div>Название трека: {title} </div>
        <div>Жанр: {genreFormatted} </div>
      </div>
    </header>
  )
});


