import React, { useState } from 'react';
import { useRef } from 'react';

//List Entity section
function ListSection_listEntity({ listSection_listEntity, id, listSection_listEntity_delete, listSection_listEntity_edit_text }) {

    //States
    const [listSection_listEntity_readOnly, setListSection_listEntity_readOnly] = useState(true);
    const listSection_listEntity_input = useRef(null)

    //Event handlers
    //Input change handler
    const listSection_listEntity_textHandler = (e) => {
        listSection_listEntity_edit_text(e.target.value, id)
    }
    //Delete button click handler
    const listSection_listEntity_deleteHandler = (e) => {
        e.preventDefault()
        listSection_listEntity_delete(id)
    }

    //Edit button click handler
    const listSection_listEntity_editHandler = (e) => {
        e.preventDefault()
        //Focuses input if editing
        if (listSection_listEntity_readOnly) {
            listSection_listEntity_input.current.focus()
        }
        setListSection_listEntity_readOnly(!listSection_listEntity_readOnly)
    }

    //JSX
    return (
        <li>
            <form onSubmit={listSection_listEntity_editHandler} className="listSection_listEntity">
                <input ref={listSection_listEntity_input} onChange={listSection_listEntity_textHandler} className="listSection_listEntity_text" type="text" value={listSection_listEntity.text} readOnly={listSection_listEntity_readOnly}></input>
                <button onClick={listSection_listEntity_editHandler} className="listSection_listEntity_editButton">
                    {listSection_listEntity_readOnly ? <i className="fa-sharp fa-solid fa-pen-to-square"></i> : <i className="fa-sharp fa-solid fa-floppy-disk"></i>}</button>
                <button onClick={listSection_listEntity_deleteHandler} className="listSection_listEntity_deleteButton">
                    <i className="fa-sharp fa-solid fa-trash"></i></button>
            </form>
        </li>
    );
}


export default ListSection_listEntity;