export const createArray = (length) => {
    return Array.from({ length }, (_, i) => i.toString());
  };
  
  export const AVAILABLE_MINUTES = createArray(60);
  export const AVAILABLE_SECONDS = createArray(60);