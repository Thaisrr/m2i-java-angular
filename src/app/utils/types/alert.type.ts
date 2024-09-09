export type AlertType = {
  text: string,
  level?: Level,
  duration?: Duration
}

export type Level = 'success' | 'warning' | 'error';
export type Duration = 2000 | 5000 | 8000;
