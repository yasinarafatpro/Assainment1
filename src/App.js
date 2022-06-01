import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddFormates } from './component/AddFormates';
import ResponsiveAppBar from './component/AppBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ResponsiveAppBar/>} />
          <Route path='/add' element={<AddFormates/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
