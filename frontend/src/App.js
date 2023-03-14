import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react'
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import LinkForlogin from './components/LinkForlogin'
import NotesLoginPage from "./pages/NotesLoginPage";
function App() {
  return (
    
      <BrowserRouter>
        <div className="container dark">
          <div className="app">
            <Header />
            <LinkForlogin />
            <Routes>
                <Route path="/" element={<NotesListPage />} exact />
                <Route path="/note/:id" element={<NotePage />} />
                <Route path="/login" element={<NotesLoginPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
