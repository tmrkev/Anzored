import './global.css';
import Header from './components/Header';
import Section__1 from './components/Section__1';
import Section__2 from './components/Section__2';
import Section__3 from './components/Section__3';
import Section__4 from './components/Section__4';
import Section5 from './components/Section__5';
import Section__6 from './components/Section__6';
import Section7 from './components/Section__7';
import Section8 from './components/Section__8';
import Footer from './components/Footer';


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
      <Section__3/>
      <Section__4/>
      <Section5/>
      <Section__6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  );
}

export default App;