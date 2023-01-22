import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Level, NameSpace, QuestType } from '../../const';

const INITIAL_LEVEL = Level.Any;
const INITIAL_GENRE = QuestType.All;

type UI = {
  level: Level;
  genre: QuestType;
}

const initialState: UI = {
  level: INITIAL_LEVEL,
  genre: INITIAL_GENRE
};

export const ui = createSlice({
  name: NameSpace.UI,
  initialState,
  reducers: {
    changeLevel: (state, action: PayloadAction<{level: Level}>) => {
      const {level} = action.payload;
      state.level = level;
    },
    changeGenre: (state, action: PayloadAction<{genre: QuestType}>) => {
      const {genre} = action.payload;
      state.genre = genre;
    }
  }
});

export const { changeLevel, changeGenre } = ui.actions;
