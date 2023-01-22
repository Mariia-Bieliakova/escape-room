export interface Notification {
  id: string;
  type: 'error' | 'success' | 'info' | 'warning';
  message: string;
  duration?: number;
}
