export const CHANGE_THEME = "CHANGE_THEME";

const changeTheme = (newTheme) => {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
};

export { changeTheme };
