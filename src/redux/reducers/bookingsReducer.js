const initialData = {
    bookings: [],
};

export function bookingsReducer(state=initialData, action) {
    switch(action.type) {
        case 'GET_ALL_BOOKINGS' : {
            return {
                ...state,
                bookings: action.payload
            }
        }
        default: return state
    }
}