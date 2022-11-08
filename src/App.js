//CSS import
import './App.css';
//React and hooks import
import React, { useState, useEffect } from 'react';
//Package import
import { v4 as uuidv4 } from 'uuid'
//Components import
import InputSection from './components/InputSection';
import ListSection from './components/ListSection';

function App() {

  //Local storage
  const LOCAL_STORAGE_KEY = 'todolist_project_react.listSection_list'
  const storedListSection_list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

  //Hooks
  //States
  const [listSection_list, setListSection_list] = useState(storedListSection_list ? storedListSection_list : [])

  //Effects
  //When listSection_list updates, store into local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listSection_list))
  }, [listSection_list])

  //Functions
  //Adds entity to list
  function listSection_listEntity_add(text) {
    if (text.length !== 0) {
      setListSection_list([
        ...listSection_list,
        { text: text, id: uuidv4() }
      ]);
    }
  }

  //Deletes entity from list
  function listSection_listEntity_delete(id) {
    setListSection_list(listSection_list.filter((item) => item.id !== id))
  }

  //Edits text of specif list entity
  function listSection_listEntity_edit_text(text, id) {
    setListSection_list(
      listSection_list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text: text
          }
        }
        return item;
      })
    )
  }

  //JSX
  return (
    <div className='App'>
      <header>
        <h1 id="header_text">Štěpán's TO-DO List</h1>
      </header>
      <InputSection
        listSection_listEntity_add={listSection_listEntity_add}
      />
      <ListSection
        listSection_list={listSection_list}
        listSection_listEntity_delete={listSection_listEntity_delete}
        listSection_listEntity_edit_text={listSection_listEntity_edit_text} />
    </div>
  );
}

export default App;
