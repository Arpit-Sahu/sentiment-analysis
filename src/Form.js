import React from 'react';
import './Form.css';
import { textData } from './services';

function Form(){

    const [text, setText] = React.useState('');
    const [result, setResult] = React.useState('');

    function text_ChangeHandeler(e) {
        setText(e.target.value);
    }

      const val = {
        "text": text
      }

      function submitChangeHandler() {
        console.log("clicked");
        let ret = textData(val);
        console.log(ret);
        setResult(ret);
      }

    return (
        <div className="login-box">
            <form>
            <div className="user-box">
                <input type="text" name="" required="" onChange={text_ChangeHandeler} />
                <label><h1>What's on your mind?</h1></label>
            </div>
            <a href="#"  onClick={submitChangeHandler} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </a>
            </form>
        </div>

    );
}

export default Form;