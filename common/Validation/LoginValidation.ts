export const Validation = {
    email: {
        required: "Vui lòng nhập Email",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email không đúng định dạng"
        }
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        minLength: {
            value: 8,
            message: "Mật khẩu ít nhất 8 kí tự"
        }   
    }
};