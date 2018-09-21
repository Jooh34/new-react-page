export const SET_CATEGORY = 'SET_CATEGORY';

export function set_category(category) {
    return {
        type: SET_CATEGORY,
        category : category,
    };
}
