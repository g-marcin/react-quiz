import './App.css';
import { Quiz } from './modules';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';
import { QuizForm } from './modules/QuizForm';
import { QuizContextProvider } from './modules/QuizContext';

function App() {
  library.add(faX, faCheck);
  const [isQuizRunning, setIsQuizRunning] = useState(false);

  return (
    <>
      <QuizContextProvider>
        {isQuizRunning && <Quiz></Quiz>}
        {!isQuizRunning && <QuizForm setIsQuizRunning={setIsQuizRunning} />}
      </QuizContextProvider>
    </>
  );
}

export default App;
