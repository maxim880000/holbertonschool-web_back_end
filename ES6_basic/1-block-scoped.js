// const/let = portée limitée au bloc {}, contrairement à var
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // ces const vivent seulement dans ce if, n'écrasent pas celles du dessus
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
