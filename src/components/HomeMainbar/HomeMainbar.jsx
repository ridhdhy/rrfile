import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
const navigate = useNavigate()

  var questionsList = [{
    _id:1,
    votes: 3,
    noOFAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js","mongodb"],
    userPosted: "mano",
    askedOn: "jan 1",
    answer: [{
        answerBody: "Answer",
        userAnswered: 'kumar',
        answered0n: "jan 2",
        userId: 2,
    }]
  },{
    _id:2,
    votes: 0,
    noOFAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript","R","python"],
    userPosted: "mano",
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answered0n: "jan 2",
      userId: 2,
  }]
  },{
    _id:3,
    votes: 1,
    noOFAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript","R","python"],
    userPosted: "mano",
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answered0n: "jan 2",
      userId: 2,
  }]
  }]



const checkAuth = () => {
  if(user === null){
    alert("login or signup to ask a question")
    navigate('/Auth')
  }else{
    navigate('AskQuestion')
  }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
       {
        location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Quetion</h1>

       }
       <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading...</h1> :
          <>
          <p>{ questionsList.length } questions</p>
        
         
          <QuestionList questionsList={questionsList} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
