import React, {Component} from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from './components/AddContact';
import ContactList from "./components/ContactList";
import NotFound from "./components/NotFound";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" Component={ContactList} />
          <Route path="/add" Component={AddContact} />
          <Route path="/contacts/edit/:id" Component={AddContact} />
          <Route path="*" Component={NotFound} />
                    <Route path="/add" Component={AddContact} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;