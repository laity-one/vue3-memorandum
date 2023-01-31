import Cookies from "js-cookie";

enum state {
  Token = "TOKEN",
}

export const getToken = () => {
  return Cookies.get(state.Token);
};
export const setToken = (token: string) => {
  return Cookies.set(state.Token, token);
};
export const removeToken = () => {
  return Cookies.remove(state.Token);
};
