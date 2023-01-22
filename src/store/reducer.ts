import { createReducer } from '@reduxjs/toolkit';
import { Level, QuestType } from '../const';
import { QuestItem } from '../types/quest';
import { changeGenre, changeLevel, loadQuests } from './action';

const INITIAL_LEVEL = Level.Any;
const INITIAL_GENRE = QuestType.All;

type InitialState = {
  level: Level;
  genre: QuestType;
  quests: QuestItem[];
}

const initialState: InitialState = {
  level: INITIAL_LEVEL,
  genre: INITIAL_GENRE,
  quests: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLevel, (state, action) => {
      const {level} = action.payload;
      state.level = level;
    })
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    });
});

export {reducer};

