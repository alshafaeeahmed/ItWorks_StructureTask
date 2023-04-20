export const validateText = (text: string | null): boolean => {
  if (text !== null && text !== '') {
    let reg = /^[^!-\/:-@\[-`{-~]+$/;
    if (!reg.test(text.trim())) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
