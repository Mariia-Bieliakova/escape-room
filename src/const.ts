export enum AppRoute {
  Root = '/',
  Login = '/login',
  NotFound = '*',
  Quest = 'quest/:id',
  Reservations = '/my-quests',
  Booking = 'quest/:id/booking',
  Contacts = '/contacts'
}

export enum APIRoute {
  Quests = '/escape-room/quest',
  Booking = '/booking',
  Reservations = '/escape-room/reservation',
  Login = '/escape-room/login',
  Logout = '/escape-room/logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW'
}

export enum NameSpace {
  Quest = 'QUEST',
  Booking = 'BOOKING',
  Reservation = 'RESERVATION',
  User = 'USER',
  UI = 'UI',
  Notifications = 'NOTIFICATIONS'
}

export enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Error = 'Error'
}

export enum Level {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const SortByLevelType: {[key: string]: {id: Level; title: string}} = {
  Any: {id: Level.Any, title: 'Любой'},
  Easy: {id: Level.Easy, title: 'Лёгкий'},
  Middle: {id: Level.Medium, title: 'Средний'},
  Hard: {id: Level.Hard, title: 'Сложный'}
} as const;

export const SortByGenreType = {
  All: {title: 'Все квесты', iconWidth: 26, svgRef: '#icon-all-quests', id: QuestType.All},
  Adventure: {title: 'Приключения', iconWidth: 36, svgRef: '#icon-adventure', id: QuestType.Adventures},
  Horror: {title: 'Ужасы', iconWidth: 30, svgRef: '#icon-horror', id: QuestType.Horror},
  Mystic: {title: 'Мистика', iconWidth: 30, svgRef: '#icon-mystic', id: QuestType.Mystic},
  Detective: {title: 'Детектив', iconWidth: 40, svgRef: '#icon-detective', id: QuestType.Detective},
  SciFi: {title: 'Sci-fi', iconWidth: 28, svgRef: '#icon-sci-fi', id: QuestType.SciFi},
} as const;

export enum PageLink {
  Quest = 'quest',
  Contact = 'contact',
  MyQuests = 'my quests'
}

export const URL_MARKER_DEFAULT = '/img/pin-default.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const levelTranslation: {[key: string]: string} = {
  hard: 'Сложный',
  medium: 'Средний',
  easy: 'Легкий'
};

export const genreTranslation: {[key: string]: string} = {
  'adventures': 'приключения',
  'detective': 'детектив',
  'horror': 'ужасы',
  'mystic': 'мистика',
  'sci-fi': 'sci-fi'
};
