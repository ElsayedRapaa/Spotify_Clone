export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: [],
  token: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_MUSIC":
      return {
        ...state,
        music: action.music,
      };
    case "SET_CUKUR":
      return {
        ...state,
        cukur: action.cukur,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};

export default reducer;
