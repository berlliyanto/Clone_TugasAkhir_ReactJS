
export const useLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
}