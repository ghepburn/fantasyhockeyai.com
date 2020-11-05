export class User {
    username = "";
    role = "ANONYMOUS";

    isAdmin = () => {
        return this.role === "ADMIN";
    }

    authenticate = (passwordInput) => {
        if (passwordInput === "password") {
            this.role = "ADMIN";
        }
    }
}