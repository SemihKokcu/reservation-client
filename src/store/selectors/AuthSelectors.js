export const isAuthenticated = (state) => {
    if (state.auth.auth.data) return true;
    return false;
};
