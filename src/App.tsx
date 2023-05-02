import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Quiz } from './modules';
import { QuizContextProvider } from './modules/QuizContext';
import { QuizForm } from './modules/QuizForm';

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
