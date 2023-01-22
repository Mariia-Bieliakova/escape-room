import { Level, NameSpace, QuestType } from '../../const';
import { State } from '../../types/state';

export const getLevel = (state: State): Level => state[NameSpace.UI].level;

export const getGenre = (state: State): QuestType => state[NameSpace.UI].genre;
