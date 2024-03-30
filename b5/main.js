const questions = [
    {
        title: "1 + 1 bằng bao nhiêu?",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        title: "Số nào sau đây là số nguyên tố?",
        choices: ["22", "4", "25", "11"],
        answer: "11"
    },
    {
        title: "Căn bậc hai của 81 là bao nhiêu?",
        choices: ["7", "8", "9", "10"],
        answer: "9"
    },
    {
        title: "15% của 100 bằng bao nhiêu?",
        choices: ["10", "15", "20", "25"],
        answer: "15"
    },
    {
        title: "Số nào sau đây chia hết cho 3?",
        choices: ["14", "22", "27", "32"],
        answer: "27"
    }
];

let curQuestion = 0;
let point = 0;

const titleQuestion = document.querySelector('#question p');
const choicesEl = document.querySelector('.choices');

const renderQuestion = (question) => {
    //
    const currentQuestion = questions[curQuestion];
    titleQuestion.innerHTML = currentQuestion.title;
    let choiceHtml = '';
    currentQuestion.choices.forEach((choice, index) => {
        choiceHtml += `
        <div class="choice-item">
        <input type="radio" id="choice-${index}" name="choices" value="${choice}">
        <label for="choice-${index}">${choice}</label>
    </div>
        `;
    });
    choicesEl.innerHTML = choiceHtml;
}
renderQuestion();
const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', () => {
    if(curQuestion === questions.length - 1) {
        btnNext.innerText = 'Kết thúc';
    }
    checkAnswer();
    if(curQuestion === questions.length) {
        alert('Bạn được: ' + point + '/'+ questions.length+' điểm' );
        return;
    }
});

function checkAnswer() {
    if (curQuestion >= questions.length) {
        return;
    }

    const choices = document.querySelector('input[name="choices"]:checked');
    if (!choices) {
        alert('Chọn đáp án!');
        return;
    }
    const selectedAnswer = choices.value;
    const currentQuestion = questions[curQuestion];
    if (selectedAnswer === currentQuestion.answer) {
        point++;
    }
    curQuestion++;
    if (curQuestion < questions.length) {
        renderQuestion();
    }
}