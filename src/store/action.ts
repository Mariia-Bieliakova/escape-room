import { createAction } from '@reduxjs/toolkit';
import { AppRoute, Level, QuestType } from '../const';
import { QuestItem } from '../types/quest';

export const changeLevel = createAction<{level: Level}>('quest/changeLevel');

export const changeGenre = createAction<{genre: QuestType}>('quest/changeGenre');

export const loadQuests = createAction<QuestItem[]>('data/loadQuests');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
