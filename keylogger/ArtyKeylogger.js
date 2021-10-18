import keylogger from "keylogger.js";
const KEYS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Delete"].map((c) => c + "");

const ArtyKeysLogger = (() => {
  const filterKeys = (cb) => {
    if (cb === undefined || cb === null || typeof cb !== "function")
      throw new Error("Callback is of wrong type");
    return (key, isKeyUp) => {
      try {
        if (KEYS.includes(key) && isKeyUp) {
          cb(key);
        }
      } catch (error) {
        throw error;
      }
    };
  };

  return (cb) => keylogger.start(filterKeys(cb));
})();

export default ArtyKeysLogger;
