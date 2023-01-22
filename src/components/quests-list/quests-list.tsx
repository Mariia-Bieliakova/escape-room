import { QuestItem } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type QuestsListProps = {
  quests: QuestItem[];
}

function QuestsList({quests}: QuestsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard
          quest={quest}
          key={quest.id}
        />
      ))}
    </div>
  );
}

export default QuestsList;
