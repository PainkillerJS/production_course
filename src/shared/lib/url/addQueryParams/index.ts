export const getQueryParams = (params: Partial<Record<string, string>>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
};

/**
 * @description Добавление параметров строки запроса в URL
 */
export const addQueryParams = (params: Partial<Record<string, string>>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
