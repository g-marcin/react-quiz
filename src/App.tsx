import './App.css';
import { Quiz } from './modules';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';
function App() {
  library.add(faX, faCheck);
  return (
    <>
      <Quiz></Quiz>
    </>
  );
}

export default App;
