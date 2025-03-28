export default function setInterval30fps(target: () => void) {
  return setInterval(() => target(), 34);
}
