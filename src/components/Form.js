import React from "react";

const Form = ({inputText,setInputText,todos,setTodos}) => {
  const inputTextHandler  = (e) => {    
    setInputText(e.target.value)
  };
  const submitHandler = e => {   
      e.preventDefault()
      if(inputText !== "") {
        setTodos([
          ...todos, {text: inputText,completed: false, id: Math.random() * 1000}
        ]);
      }
     
      setInputText("")

      
    
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitHandler }  className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
