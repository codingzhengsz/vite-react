import { useState } from 'react';
import './App.css';
import Header from '@/Components/Header';
import ReadDocs from '@/Components/ReadTheDocs';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadDocs />
    </div>
  );
};

export default App;
