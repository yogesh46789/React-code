
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title={3} aboutText="About TextUtils"/>
      {/* <Navbar/> */}
      <div className="container">
        <h1>Enter the text to analyze the TextUtils</h1>
      <TextForm/>
        </div>
      
    </>
  );
}

export default App;


