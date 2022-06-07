const quizData = [
  {
    question: "Which team won the treble in Italy?",
    a: "Milan",
    b: "Juventus",
    c: "Inter",
    d: "Roma",
    correct: "c",
  },
  {
    question: "Which team won the Champions League in 2022?",
    a: "Real Madrid",
    b: "Liverpool",
    c: "Chelsea",
    d: "Bayern Munich ",
    correct: "a",
  },
  {
    question: "Who won golden boot in premier league 2022 ?",
    a: "Cristiano Ronaldo",
    b: "Romelu Lukaku",
    c: "Harry Kane",
    d: "Son Heung-min",
    correct: "d",
  },
  {
    question: "What international team play in Wembley?",
    a: "Denmark",
    b: "England",
    c: "Bulgaria",
    d: "Iceland",
    correct: "b",
  },
  {
    question: "What kind of animal is featured on Leicester City's badge?",
    a: "cat",
    b: "dog",
    c: "fox",
    d: "wolf",
    correct: "c",
  },
  {
    question: "Which of these teams isn't from London?",
    a: "Arsenal",
    b: "Chelsea",
    c: "Wolves",
    d: "West Ham",
    correct: "c",
  },
  {
    question: "Which team are nicknamed The Canaries?",
    a: "Norwich City",
    b: "Celtic",
    c: "Liverpool",
    d: "Arsenal",
    correct: "a",
  },
  {
    question: "Which was the first French team to win the European Cup?",
    a: "Bordeaux",
    b: "PSG",
    c: "Marseille",
    d: "Lyon",
    correct: "c",
  },
  {
    question: "From which country is the football player Gheorghe Hagi?",
    a: "Romania",
    b: "Bulgaria",
    c: "Poland",
    d: "Austria",
    correct: "a",
  },
  {
    question: "What Italian club is associated with the nickname Viola?",
    a: "Lazio",
    b: "Udinese",
    c: "Como",
    d: "Fiorentina",
    correct: "d",
  },
  {
    question: "What team won Champions League 2009/2010??",
    a: "Inter",
    b: "Barcelona",
    c: "Roma",
    d: "CSKA",
    correct: "a",
  },
  {
    question: "How many times have FC Internazionale won Serie A?",
    a: "10",
    b: "20",
    c: "19",
    d: "1",
    correct: "c",
  },
  {
    question: "Which Dutch club has won the most first division titles?",
    a: "Ajax",
    b: "PSV",
    c: "Feyenoord",
    d: "Az Alkmaar",
    correct: "a",
  },
  {
    question: "Who was the first football player to be sold by a transfer fee over £50 million?",
    a: "Ronaldo",
    b: "Kaka'",
    c: "Crespo",
    d: "Ronaldinho",
    correct: "b",
  },
  {
    question: "From which country is the football player Pavel Nedvěd?",
    a: "Ukraine",
    b: "Croatia",
    c: "Bosnia and Herzegovina",
    d: "Czech Republic",
    correct: "d",
  },
  {
    question: "Which team won the World Cup in 2010?",
    a: "Portugal",
    b: "France",
    c: "Spain",
    d: "Italy",
    correct: "c",
  },
  {
    question: "Which team won the Euro Cup in 2016?",
    a: "Portugal",
    b: "France",
    c: "Spain",
    d: "Italy",
    correct: "a",
  },
  {
    question: "Which team are nicknamed The Gunners?",
    a: "Monaco",
    b: "PSG",
    c: "Marseille",
    d: "Arsenal",
    correct: "d",
  },
  {
    question: "Which team are nicknamed The Nerazzurri?",
    a: "Milan",
    b: "Inter",
    c: "Roma",
    d: "Napoli",
    correct: "b",
  },
  {
    question: "Which team are nicknamed The Red devils?",
    a: "Man Utd",
    b: "Man City",
    c: "Tottenham",
    d: "Nottingham forest",
    correct: "a",
  },
];
let currentQuiz=0
let score=0
const answerEls=document.querySelectorAll('.answer')
const quiz=document.getElementById('quiz')

const questionEl=document.getElementById('question')
const a_Text=document.getElementById('a_Text')
const b_Text=document.getElementById('b_Text')
const c_Text=document.getElementById('c_Text')
const d_Text=document.getElementById('d_Text')
const submitBtn=document.getElementById('submit')
loald()

function loald(){
  deselectAnswer()
  const currentQuizData=quizData[currentQuiz]

  questionEl.textContent=currentQuizData.question
  a_Text.textContent=currentQuizData.a
  b_Text.textContent=currentQuizData.b
  c_Text.textContent=currentQuizData.c
  d_Text.textContent=currentQuizData.d
}
function getSelected(){
  let answer=undefined

  answerEls.forEach(answerEl=>{
      if(answerEl.checked){
        answer= answerEl.id
      }
  })
  return answer
}

function deselectAnswer (){
  answerEls.forEach(answerEl=>{
    answerEl.checked=false
  })
}

submitBtn.addEventListener('click',()=>{
  const answer= getSelected()
  if(answer){
    if(answer===quizData[currentQuiz].correct){
      score++
    }

    currentQuiz++
  if(currentQuiz<quizData.length){
    loald()
  }else{
   quiz.innerHTML=`<h2>You answered correctly at ${score} / ${quizData.length} questions</h2> 
   <button onclick="location.reload()">Reload</button>`
  }
  }

})