import React, { useState, useCallback } from 'react';
import Note from '../../components/Note';
import Ticker from '../../components/Ticker';
import { FIRST_POSITION_NOTES } from '../../constant/Notes';
import { randomInt } from '../../utils/MathUtils';
import styles from './home.module.scss';

const Home: React.FC = () => {
  const [note, setNote] = useState(FIRST_POSITION_NOTES[5]);

  const setNextNote = useCallback(() => {
    const max = FIRST_POSITION_NOTES.length;
    const random = randomInt(max);
    setNote(FIRST_POSITION_NOTES[random]);
  }, []);

  return (
    <div className={styles.home}>
      <Note note={note} />
      <Ticker tickCallback={setNextNote} />
    </div>
  );
};

export default Home;
