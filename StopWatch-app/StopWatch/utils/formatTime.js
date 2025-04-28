export const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
  
    return hours !== '00'
      ? `${hours}:${minutes}:${seconds}.${milliseconds}`
      : `${minutes}:${seconds}.${milliseconds}`;
  };