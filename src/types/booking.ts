import { QuestItem } from './quest';

export type Coords = [number, number];

export type Location = {
  id: number;
  address: string;
  coords: Coords;
}

export type Time = {
  time: string;
  isAvailable: boolean;
}

export type BookingQuestInfo = {
  id: number;
  locations: Location[];
  slots: {
    today: Time[];
    tomorrow: Time[];
  };
}

export type QuestBooking = {
  id: number;
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  locationId: number;
  questId: number;
}

export type BookedQuestItem = {
  id: number;
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  location: Location;
  quest: QuestItem;
}
