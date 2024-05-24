// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 회원 정보를 저장할 배열
const users = [
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
    { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
    // 여기에 추가 사용자 정보를 추가할 수 있습니다.
];

// 로그인 폼 렌더링
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// 로그인 처리
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // 사용자가 입력한 이메일과 비밀번호를 확인하여 로그인 처리
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send(`환영합니다, ${user.username}님!`);
    } else {
        res.status(401).send('이메일 또는 비밀번호가 일치하지 않습니다.');
    }
});

// 서버 실행
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
