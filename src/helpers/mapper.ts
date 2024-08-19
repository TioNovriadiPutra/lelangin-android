export const toCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
};

export const convertKeysToCamelCase = <T>(obj: any): T => {
  if (Array.isArray(obj)) {
    return obj.map((v) => convertKeysToCamelCase(v)) as any;
  } else if (obj !== null && obj.constructor === Object) {
    const result: Record<string, any> = {};

    Object.keys(obj).forEach((key) => {
      const camelCaseKey = toCamelCase(key);
      result[camelCaseKey] = convertKeysToCamelCase(obj[key]);
    });

    return result as T;
  }

  return obj;
};

export const responseMapper = <T>(data: ApiResponse<any> | any): T => {
  const convertData = convertKeysToCamelCase<T>(data.data || data);

  return convertData;
};
