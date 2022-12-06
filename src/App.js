import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import Header from './component/Header';
import IndexPage from './component/Index';
import Login from './component/Login';

// function App() {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// }

// export default App;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/signup" element={<Hello />} />
        <Route path="/hello2" element={<Hello2 />} />
        <Route path='/header' element={<Header />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
