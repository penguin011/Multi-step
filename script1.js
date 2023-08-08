const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const progressBar = document.getElementById('progress-bar');
const yes_Image = document.getElementsByClassName('yes-button')[0];
const no_Image = document.getElementsByClassName('no-button')[0];

const questions = [
    { text: 'Question 1: Is this a sample question?', yesText: 'Yes', noText: 'No' , image_Y: './1-y.jpg', image_N: './1-n.jpg'},
    { text: 'Question 2: Another question?', yesText: 'Yes', noText: 'No', image_Y: './2-y.jpg', image_N: './2-n.jpg' },
    { text: 'Question 3: Another question?', yesText: 'Yes', noText: 'No', image_Y: './3-y.jpg', image_N: './3-n.jpg' },
    // Add more questions here
];
const answer_list = [];

let currentQuestionIndex = 0;

function answerQuestion(answer) {
    if (currentQuestionIndex < questions.length) {
        answer_list[currentQuestionIndex] = answer;
        currentQuestionIndex++;
        updateUI();
    }
}

function updateUI() {
    const question = questions[currentQuestionIndex];
    if (currentQuestionIndex == questions.length) {
        document.getElementsByClassName('question-container')[0].style.display = "none";
        document.getElementsByClassName('success-container')[0].style.display = "block";
        document.getElementsByClassName('progress-container')[0].style.display = "none";
    }
    questionText.textContent = question.text;
    no_Image.style = "background:url('" + question.image_N + "'); background-size:cover;background-position:center;";
    yes_Image.style = "background:url('" + question.image_Y + "'); background-size:cover;background-position:center;";
    
    progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
}

function success_btn() {
           // Redirect to sales page
        window.location.href = 'https://your-sales-page-url.com';

}
// Initial UI update
updateUI();
