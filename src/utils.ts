export function fibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function arraySort(arr: number[]): number[] {
  return [...arr].sort((a, b) => a - b);
}

export function objectMerge(
  ...objects: Record<string, unknown>[]
): Record<string, unknown> {
  return Object.assign({}, ...objects);
}
