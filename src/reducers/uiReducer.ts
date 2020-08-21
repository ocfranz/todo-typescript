export interface UiState {
    showModalAdd: boolean;
    showModalDate: boolean;
}
const initialStateUi = {
    showModalAdd: false,
    showModalDate: false,
};

type Action = {
    type: "SHOW_MODAL_ADD" | "SHOW_MODAL_DATE";
    payload: boolean;
};
export const uiReducer = (state: UiState = initialStateUi, action: Action) => {
    switch (action.type) {
        case "SHOW_MODAL_ADD":
            return { ...state, showModalAdd: action.payload };
        case "SHOW_MODAL_DATE":
                return { ...state, showModalDate: action.payload };
        default:
            return state;
    }
};
