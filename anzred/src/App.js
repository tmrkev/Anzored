import './global.css';
import Header from './components/Header';
import Section__1 from './components/Section__1';
import Section__2 from './components/Section__2';
import Section3 from './components/Section__3';

function App() {
  return (
    <div className='page' >
      <div className='container' >
        <div className='content' >
          <Header/>
        </div>
      </div>
      <Section__1/>
      <Section__2/>
      <Section3/>
    </div>
  );
}

export default App;
