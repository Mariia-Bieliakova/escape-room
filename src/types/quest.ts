import { Level, QuestType } from '../const';

export type QuestItem = {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: QuestType;
  peopleMinMax: number[];
}

export type QuestInfo = QuestItem & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
