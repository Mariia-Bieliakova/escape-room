import { Level, QuestType } from './const';
import { QuestItem } from './types/quest';

export const getQuestsByLevel = (level: Level, quests: QuestItem[]) => {
  if (level === Level.Any) {
    return quests;
  }

  const filteredQuests = quests.filter((quest) => quest.level === level);

  return filteredQuests;
};

export const getQuestsByGenre = (genre: QuestType, quests: QuestItem[]) => {
  if (genre === QuestType.All) {
    return quests;
  }

  const filteredQuests = quests.filter((quest) => quest.type === genre);

  return filteredQuests;
};
