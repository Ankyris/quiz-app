import React, { useContext } from 'react'
import DataContext from '../Context/dataContext'

const Quiz = () => {

    const { showQuiz, question, quizs, questionIndex, checkAnswer, correctAnswer,
        selectedAnswer, nextQuestion, showTheResult
     } = useContext(DataContext);

  return (
    <section className='bg-gray-900 text-white' style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
        <div className='container mx-auto'>
            <div className='flex h-screen items-center justify-center'>
                <div className='w-2/3'>
                    <div className='p-4 bg-[#3d3d3d] border-[#646464] border'>
                        <div className='flex justify-between gap-3'>
                            <h5 className='mb-2 font-semibold text-base leading-relaxed'>
                                {question?.question}
                            </h5>
                            <h5 className='text-right text-[#60d600] w-[100px]'>
                                {quizs.indexOf(question) + 1} / {quizs?.length}
                            </h5>
                        </div>
                        <div>
                            {
                                question?.options?.map((item, index) => (
                                    <button key={index} className={`w-full text-left text-white py-2 px-3 mt-3 rounded bg-gray-800 ${correctAnswer === item && 'bg-green-500'}`}
                                    onClick={(event) => checkAnswer(event, item)}
                                    >
                                        {item}
                                    </button>
                                ))
                            }
                            
                        </div>

                        {
                            (questionIndex + 1) !== quizs.length ?
                            <button className={`py-2 w-full mt-3 text-gray-100 font-bold bg-[#0d6efd] ${
                                selectedAnswer ? 'opacity-100' : 'opacity-65'}`}
                            onClick={nextQuestion} disabled={!selectedAnswer} >
                                Next Question
                            </button>
                            :
                            <button className={`py-2 w-full mt-3 text-gray-100 font-bold bg-[#0d6efd] ${
                                selectedAnswer ? 'opacity-100' : 'opacity-65'}`}
                            onClick={showTheResult} disabled={!selectedAnswer} >
                                Show Results
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quiz