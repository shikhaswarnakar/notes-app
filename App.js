import React, { useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";




const App =() => {
  const [notes, setNotes] = useState([{
    id: uuid(),
    text: "this is my first note",
    date: "15/12/2022"
  },
  {
    id: uuid(),
    text: "this is my second note",
    date: "16/12/2022"
  },{
    id: uuid(),
    text: "this is my third note",
    date: "17/12/2022"
  }]);

  const [searchText , setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  

  const addNote = (text) => {
    const date= new Date();
    const newNote = {
      id : uuid(),
      text : text,
      date : date.toLocaleString(),

      }
      const newNotes = [...notes, newNote]

     setNotes(newNotes)
    
  }
  
  const deleteNote = (id) => {
     const newNotes = notes.filter((note)=>note.id !== id);
     setNotes(newNotes);


  }

  
  
  return(
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
      <Header handleDarkMode={setDarkMode}/>
      <Search handleOnChange={setSearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
      
    </div>

    </div>
    
  )
} 

export default App;