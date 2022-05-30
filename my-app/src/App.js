import './App.css';
import { Info } from './info';
import { Gentleman } from './gentleman';
import { Button } from './button';

function App() {
  return (
    <>
      <Info></Info>
      <main className="main">
        <Gentleman></Gentleman>
        <Button></Button>
      </main>
    </>
  );
}

export default App;
