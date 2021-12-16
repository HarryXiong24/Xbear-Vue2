const debounce = function (this: any, fn: () => any, delay: number) {
  let timer: number | null = null;
  return function (this: any) {
    if (timer) {
      clearTimeout(timer);
    }
    const ctx = this;
    const args = arguments;
    timer = window.setTimeout(function () {
      fn.apply(ctx, args as unknown as []);
    }, delay);
  };
};

export default debounce;
