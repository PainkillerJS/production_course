type ModeType = Record<string, boolean | string>;

export const classNames = (...params: Array<string | ModeType>): string => {
  const stringsClassNames: string[] = [];

  let hashClassNamesObject: ModeType = {};

  params.forEach((elem) => {
    if (typeof elem === 'string') {
      return stringsClassNames.push(elem);
    }

    hashClassNamesObject = Object.assign(hashClassNamesObject, elem);
  });

  const updateModes = Object.entries(hashClassNamesObject)
    .filter(([_, value]) => value)
    .map(([cls]) => cls);

  return [...stringsClassNames, ...updateModes].join(' ');
};
