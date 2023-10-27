const USER_STORAGE_KEY = 'user';

export const setUserFromLocalStorage = (value: unknown): void => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(value));
};

export const getUsetFromLocalStorage = () => JSON.parse(localStorage.getItem(USER_STORAGE_KEY)!);

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem(USER_STORAGE_KEY);
};
