export const API_PREFIX = '/api/v1';

export const PATHS = {
  authTg: `${API_PREFIX}/auth/tg`,
  families: `${API_PREFIX}/families`,
  testUsers: `${API_PREFIX}/test/users`,
} as const;