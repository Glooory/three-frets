import React from 'react';
import { Note as NoteType } from '../../constant/Notes';
import styles from './note.module.scss';

interface NoteProps {
  note: NoteType,
}

const Note: React.FC<NoteProps> = ({ note }: NoteProps) => {
  const random: boolean = Math.random() > 0.5;
  const isLowPitchNote: boolean = note.rangeLevel! < 0;
  const isHighPitchNote: boolean = note.rangeLevel! > 1;
  const dotHighCx = `${styles.dotHigh} ${isHighPitchNote ? styles.visible : styles.invisible}`;
  const dotLowCx = `${styles.dotLow} ${isLowPitchNote ? styles.visible : styles.invisible}`;
  return (
    <div className={styles.note}>
      <span className={dotHighCx}>.</span>
      <span>{random ? note.notation : note.number}</span>
      <span className={dotLowCx}>.</span>
    </div>
  );
};

export default Note;
