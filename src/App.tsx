import './App.css';
import { Quiz } from './modules';
import { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from './components';
function App() {
  library.add(faX, faCheck);
  const [isQuizRunning, setIsQuizRunning] = useState(false);
  return (
    <>
      {isQuizRunning && <Quiz></Quiz>}
      {!isQuizRunning && (
        <Button
          onClick={() => {
            setIsQuizRunning(true);
          }}
        >
          Start
        </Button>
      )}
    </>
  );
}

export default App;
