export function getCurrentDateTime() {
  const now = new Date().toISOString();
  return {
    date: now.split('T')[0],
    time: now.split('T')[1].split('.')[0]
  };
}