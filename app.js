const quiz = [
  {
    question: '主要族とは何か',
    answers: [ '答えを見る','次へすすむ'],
    correct: '答えを見る'
  },   {
      question: '周期表の下に別枠で表示されている15の族をなんという',
      answers: [ '答えを見る','次へすすむ'],
      correct: '答えを見る'
    },    {
        question: '57番～71番の原子の総称をなんという？',
        answers: [ '答えを見る','次へすすむ'],
        correct: '答えを見る'
      },     {
          question: '89～103番の原子の総称を何という？',
          answers: [ '答えを見る','次へすすむ'],
          correct: '答えを見る'
        },    {
            question: '示強性ってなんだ？',
            answers: [ '答えを見る','次へすすむ'],
            correct: '答えを見る'
          },   {
              question: '示量性はってなんだ？',
              answers: [ '答えを見る','次へすすむ'],
              correct: '答えを見る'
            },   {
                question: '試料の化学構造の変化を伴わない性質をなんという',
                answers: [ '答えを見る','次へすすむ'],
                correct: '答えを見る'
              },    {
                  question: '全元素中、118番元素を除くと全部で何種類の非金属が存在するか',
                  answers: [ '答えを見る','次へすすむ'],
                  correct: '答えを見る'
                },     {
                    question: 'うち、固体であるのは5種類である。５種類をあげよ',
                    answers: [ '答えを見る','次へすすむ'],
                    correct: '答えを見る'
                  },  {
                      question: '周期表で金属と非金属の間にジグザグに存在する７つの元素をなんという',
                      answers: [ '答えを見る','次へすすむ'],
                      correct: '答えを見る'
                    },   {
                        question: '華氏、別の名は',
                        answers: [ '答えを見る','次へすすむ'],
                        correct: '答えを見る'
                      },   {
                          question: '華氏からセ氏、及びセ氏から華氏の求め方は？',
                          answers: [ '答えを見る','次へすすむ'],
                          correct: '答えを見る'
                        },     {
                            question: '正確さ（accuracy）とは',
                            answers: [ '答えを見る','次へすすむ'],
                            correct: '答えを見る'
                          },   {
                              question: '  精密さ（precision）',
                              answers: [ '答えを見る','次へすすむ'],
                              correct: '答えを見る'
                            }, {
                                question: '  精密さ（precision）',
                                answers: [ '答えを見る','次へすすむ'],
                                correct: '答えを見る'
                                {
                                    question: '',
                                    answers: [ '答えを見る','次へすすむ'],
                                    correct: '答えを見る'
                                  },  {
                                        question: '1calは何J？',
                                        answers: [ '答えを見る','次へすすむ'],
                                        correct: '答えを見る'
                                      },  {
                                            question: '正確さとは？',
                                            answers: [ '答えを見る','次へすすむ'],
                                            correct: '答えを見る'
                                          },  {
                                                question: '精密さとは？',
                                                answers: [ '答えを見る','次へすすむ'],
                                                correct: '答えを見る'
                                              },
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('解答をみるには次のurlをコピペし別タブでひらいてください');
  let newwin = window.open('sample.html');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = 'おつかれさまでした';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
