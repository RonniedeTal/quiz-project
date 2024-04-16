class Quiz {
    // YOUR CODE HERE:
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    // 1. constructor (questions, timeLimit, timeRemaining)

    getQuestion() {
        if (this.currentQuestionIndex >= 0 && this.currentQuestionIndex < this.questions.length) {
          return this.questions[this.currentQuestionIndex];
        }
     }
    
     moveToNextQuestion(){
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        console.log("You have reached the end of the quiz"); 
      }
     }

    shuffleQuestions(){
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]; 
      }
    }

    checkAnswer(answer){
     
     let preguntaActual=this.questions[this.currentQuestionIndex]
     console.log(preguntaActual)
     let respuestaJugador=answer

      if (preguntaActual.answer===respuestaJugador) {
           this.correctAnswers++;
           console.log("Correct!");
         } else {
           console.log("Incorrect. The correct answer is:", currentQuestion.correctAnswer);
         }
       }

     hasEnded(){

     }
}







const vegetales=["patata", "cebolla", "tomate"]
let vegIndex=1
console.log(vegetales[vegIndex])