import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
    const [quizs, setQuizs] = useState([]);
    const [question, setQuestion] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [marks, setMarks] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    // Display Controlling States
    const [showStart, setShowStart] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResult, setShowResult] = useState(false);

    // Load JSON Data
    useEffect(() => {
      fetch('quiz.json')
        .then(res => res.json())
        .then(data => setQuizs(data))
    }, []);

    // Set a Single Question
    useEffect(() => {
      if (quizs.length > questionIndex) {
        setQuestion(quizs[questionIndex]);
      }
    }, [quizs, questionIndex])

    // Start Quiz
    const startQuiz = () => {
      setShowStart(false);
      setShowQuiz(true);
    }

    // Check Answer
    const checkAnswer = (event, selected) => {
      if(!selectedAnswer) {
        setCorrectAnswer(question.answer);
        setSelectedAnswer(selected);

        if (selected === question.answer) {
          event.target.classList.add('bg-green-500');
          setMarks(marks + 5);
        } else {
          event.target.classList.add('bg-red-500');
        }
      }
    }

    const nextQuestion = () => {
      setCorrectAnswer('');
      setSelectedAnswer('');
      
      const wrongBtn = document.querySelector('button.bg-red-500');
      wrongBtn?.classList.remove('bg-red-500');

      const rightBtn = document.querySelector('button.bg-green-500');
      rightBtn.classList.remove('bg-green-500');

      setQuestionIndex(questionIndex + 1);
    }

    const showTheResult = () => {
      setShowResult(true);
      setShowStart(false);
      setShowQuiz(false);
    }

    const startOver = () => {
      setShowStart(false);
      setShowResult(false);
      setShowQuiz(true);
      setCorrectAnswer('');
      setSelectedAnswer('');
      setQuestionIndex(0);
      setMarks(0);

      const wrongBtn = document.querySelector('button.bg-red-500');
      wrongBtn?.classList.remove('bg-red-500');

      const rightBtn = document.querySelector('button.bg-green-500');
      rightBtn?.classList.remove('bg-green-500');
    }

  return (
    <div>
        <DataContext.Provider value={{
            startQuiz, showStart, showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer, questionIndex, nextQuestion, showTheResult, showResult, marks,
            startOver
        }} >
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default DataContext;