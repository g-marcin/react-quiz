import React, { FC, ReactElement, useEffect, useState } from "react";
import { httpClient } from "../../common";
import {AxiosResponse} from "axios"
import { questionData } from "../../types";
import {apiKey} from "../../../api/quizApiKey"

type QuizProps = {
  children: ReactElement | ReactElement[]|undefined;
};

export const Quiz: FC<QuizProps> = ({ children }) => {
  
  const category = "linux"
  const limit = 10
  const [quizQuestions, setQuizQuestions] = useState<questionData[]>([])
  
  const [questionIndex,setQuestionIndex] = useState(0)
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  const isQuestion = !!quizQuestions[questionIndex]
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0)

  useEffect(()=>{
    httpClient.get(`/v1/questions?apiKey=${apiKey}&category=${category}&limit=${limit}`).then((response:AxiosResponse)=>{
      setQuizQuestions(response.data)
      console.log(response.data);      
    })
  },[])

  useEffect(()=>{
    console.log(questionIndex+1, `&&& question number`);
    
  },[questionIndex,])

  if (!quizQuestions) {
    return
  }


  return (<>{children}
  {
  !isQuizFinished && 
  <div>
  <h2>
  {`${questionIndex+1}. ${quizQuestions[questionIndex]?.question}`}
  </h2>
  {isQuestion?<div style={{display:"flex", flexDirection:"column", alignItems:"start", border:"1px solid black"}}>
    {
     Object.values(quizQuestions[questionIndex]["answers"]).map((answer,index)=>{
      if (!answer) {
        return null
      }
      return <div style={{listStyleType:"none"}} key={index}><input type="radio" name="answer" value={index} onChange={(event)=>{
        setCurrentAnswerIndex(Number(event.target.value));
      }}/>{answer}</div>
    })
    }
  </div>:null}
  <button onClick={()=>{
    
    setQuestionIndex(questionIndex+1)
    

    
    if(questionIndex===(10)){
      setIsQuizFinished(true)
    }

    
  }}>Next</button>
  </div>
  }

  {isQuizFinished && <div>Results</div>}
  </>);
};
