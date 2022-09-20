export const isLogin = () => {
    const Login = localStorage.getItem("user");

    if (Login === "kishan") {
        return true;
    } else {
        return false;
    }
}