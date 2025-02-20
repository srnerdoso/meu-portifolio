export function debounce<T extends (this: any, ...args: any[]) => void>(
  func: T,
  delay: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function throttle<T extends (this: any, ...args: any[]) => void>(
  func: T,
  limit: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let lastFunc: ReturnType<typeof setTimeout> | undefined;
  let lastRan: number | undefined;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (lastRan === undefined) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan! >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
