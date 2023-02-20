-   Tạo file .env trong thư mục server và dán vào đoạn dưới đây:
    ACCESS_TOKEN_SECRET = 'ACCESS_TOKEN_SECRET'
    REFRESH_TOKEN_SECRET = 'REFRESH_TOKEN_SECRET'
    -   Luồng hoạt động
    *   Gọi api để đăng nhập và trả về accessToken (có thời hạn ngắn) sau khi hết thời hạn thì phải đăng nhập lại nhưng gọi API ngoài việc sever trả về accessToken thì còn trả về refreshToken,refreshToken dùng để khi mà accessToken hết hạn thì sẽ dùng refreshToken để gửi lên API để đăng nhập lại, quá trình này sẽ lặp lại khi người dùng reload lại trang web
