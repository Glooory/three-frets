import React from 'react';
import Note from '../../components/Note';
import { FIRST_POSITION_NOTES } from '../../constant/Notes';
import { randomInt } from '../../utils/MathUtils';
import styles from './home.module.scss';

const Home: React.FC = () => {
  const max = FIRST_POSITION_NOTES.length;
  const random = randomInt(max);
  const note = FIRST_POSITION_NOTES[random];
  return (
    <div className={styles.home}>
      <Note note={note} />
    </div>
  );
};

export default Home;
