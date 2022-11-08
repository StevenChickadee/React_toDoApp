import React, { useState } from 'react';



//Input section
function InputSection({ listSection_listEntity_add }) {

    //States
    const [inputSection_textBox_text, setInputSection_textBox_text] = useState('')

    //Event handlers
    //Updates inputSection_textBox when input is changed
    const inputSection_textBox_textHandler = (e) => {
        setInputSection_textBox_text(e.target.value);
    }
    //Adds new entity into listSection_list when submited
    const inputSection_textBox_submitHandler = (e) => {
        e.preventDefault();
        listSection_listEntity_add(inputSection_textBox_text)
        setInputSection_textBox_text('');
    }

    //JSX
    return (
        <form onSubmit={inputSection_textBox_submitHandler} id="inputSection">
            <input onChange={inputSection_textBox_textHandler} value={inputSection_textBox_text} type="text" id="inputSection_textBox" placeholder="What do you have planned?" />
            <button onClick={inputSection_textBox_submitHandler} type="button" id="inputSection_submitButton">
                <i className="fa-sharp fa-solid fa-square-plus"></i>
            </button>
        </form>
    );



}

export default InputSection;