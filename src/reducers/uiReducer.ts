export interface UiState {
    showModalAdd: boolean;
}
const initialStateUi = {
    showModalAdd: false,
};

type Action = {
    type: "SHOW_MODAL";
    payload: boolean;
};
export const uiReducer = (
    state: UiState = initialStateUi,
    action: Action
) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return { ...state, showModalAdd: action.payload };

        default:
            return state;
    }
};
