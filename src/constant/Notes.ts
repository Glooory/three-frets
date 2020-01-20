export interface Note {
    notation: string,
    number: number,
    weight: number,
    rangeLevel?: number,
    value?: number
}

export const NOTES_BASE: Note[] = [
  {
    notation: 'C',
    number: 1,
    weight: 1,
  },
  {
    notation: 'D',
    number: 2,
    weight: 3,
  },
  {
    notation: 'E',
    number: 3,
    weight: 5,
  },
  {
    notation: 'F',
    number: 4,
    weight: 6,
  },
  {
    notation: 'G',
    number: 5,
    weight: 8,
  },
  {
    notation: 'A',
    number: 6,
    weight: 10,
  },
  {
    notation: 'B',
    number: 7,
    weight: 12,
  },
];

export const FIRST_POSITION_NOTES = [-1, 1, 2].flatMap((rangeLevel) => NOTES_BASE.map((note) => {
  const noteModel: Note = JSON.parse(JSON.stringify(note));
  noteModel.rangeLevel = rangeLevel;
  noteModel.value = rangeLevel * noteModel.weight;
  return noteModel;
}))
    .filter((note: Note) => (note.value! >= -5 && note.value! <= 16));
