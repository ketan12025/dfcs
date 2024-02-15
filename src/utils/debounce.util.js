export default function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}
