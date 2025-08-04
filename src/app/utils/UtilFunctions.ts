export const isEmptyString = (value: string): boolean => {
  return value.trim().length < 1;
};

export const safelyConvertedString = (input: unknown): string => {
  if (input === null || input === undefined) {
    return "";
  }

  if (typeof input === "string") {
    return input;
  }

  if (
    typeof input === "number" ||
    typeof input === "boolean" ||
    typeof input === "bigint"
  ) {
    return String(input);
  }

  if (typeof input === "object") {
    try {
      return JSON.stringify(input);
    } catch {
      return "";
    }
  }

  return "";
};

export const getTrimmedString = (inputString: string): string => {
  return inputString.trim();
};
