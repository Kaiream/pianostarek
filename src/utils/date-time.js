export function getCurrentDateTime() {
  let serverTime = new Date();
  const datePraha = serverTime.toLocaleDateString('cs-CZ', { timeZone: 'Europe/Prague' });
  const timePraha = serverTime.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });

  return {
    date: datePraha,
    time: timePraha
  };
}