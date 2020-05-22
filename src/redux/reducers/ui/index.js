import { default as favListReducer } from "./favListReducer";

const initialState = {
  favListState: { showOnMobile: false },
};

const uiState = (state = initialState, action) => ({
  favListState: favListReducer(state.favListState, action),
});

export default uiState;
