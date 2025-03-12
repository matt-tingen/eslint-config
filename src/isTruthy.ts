export type Falsy = false | undefined | null | 0 | '';

/**
 * @param value
 * @returns Whether the provided value is truthy
 */
// eslint-disable-next-line unicorn/prefer-native-coercion-functions
export const isTruthy = <T>(value: T | Falsy): value is T => Boolean(value);
