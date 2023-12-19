import './App.css';
import Course from './components/Course/Course';
import Sidebar from './components/Sidebar/Sidebar';
import Quiz from './components/QuizPage/Quiz';
import Get from './components/GetHelp/Get';
import Settings from './components/Settings/Settings';
import Selection from './components/Selection/Selection';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div>
      <div className='App'>
        <div className='aside'>
          <Sidebar />
        </div>
        <div className='other'>
          <Course />
          {/* <Quiz /> */}
          {/* <Get /> */}
          {/* <Settings /> */}
          {/* <Selection /> */}
          {/* <SignUp /> */}
        </div>
      </div>
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
