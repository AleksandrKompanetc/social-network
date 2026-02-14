import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs'
              element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/profile'
              element={<Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch} 
            />} />
              
            {/* <Route path='/dialogs' render={() => <Dialogs />} />
            <Route path='/profile' render={() => <Profile />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
