document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        { question: "당신의 성별은?", choices: ["남자", "여자"] },
        { question: "당신의 성격은?", choices: ["내향형", "외향형"] },
        { question: "당신의 키는?", choices: ["크다", "작다"] }
    ];

    const results = {
        "남자,내향형,크다": "여자 1과 매치되었습니다!",
        "남자,내향형,작다": "여자 2과 매치되었습니다!",
        "남자,외향형,크다": "여자 3과 매치되었습니다!",
        "남자,외향형,작다": "여자 4과 매치되었습니다!",
        "여자,내향형,크다": "남자 1과 매치되었습니다!",
        "여자,내향형,작다": "남자 2과 매치되었습니다!",
        "여자,외향형,크다": "남자 3과 매치되었습니다!",
        "여자,외향형,작다": "남자 4과 매치되었습니다!"
    };

    let currentQuestionIndex = 0;
    let answers = [];

    const startButton = document.getElementById('start');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');
    const loadingContainer = document.getElementById('loading');

    quizContainer.style.display = 'none';

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion();
    });

    function loadQuestion() {
        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];
            quizContainer.innerHTML = `
                <h2>${currentQuestion.question}</h2>
                <button class="choice-button">${currentQuestion.choices[0]}</button>
                <button class="choice-button">${currentQuestion.choices[1]}</button>
            `;
            document.querySelectorAll('.choice-button').forEach(button => {
                button.addEventListener('click', () => {
                    answers.push(button.textContent);
                    currentQuestionIndex++;
                    if (currentQuestionIndex < quizData.length) {
                        loadQuestion();
                    } 
                    else {
                        showLoading();
                        setTimeout(() => {
                            showResult();
                        }, 1500);
                    }
                });
            });
        }
    }

    function showLoading() {
        quizContainer.style.display = 'none';
        loadingContainer.style.display = 'block';
    }

    function showResult() {
        loadingContainer.style.display = 'none';
        const key = answers.join(',');
        const resultText = results[key] || "매칭 결과를 찾을 수 없습니다.";
        resultContainer.innerHTML = `
            <p>${resultText}</p>
            <a id="sign-up-button" href="register.html">지금 회원가입</a>
        `;
        resultContainer.style.display = 'block';
    }
    loadQuestion();
});
