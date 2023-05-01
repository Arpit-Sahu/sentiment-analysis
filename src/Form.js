import React from 'react';
import './Form.css';
// import { textData } from './services';
import { useEffect } from 'react';

import axios from "axios";

function Form(props){

  const textData = async (text ) => {

    var bodyFormData = new FormData();
    bodyFormData.append('text', text);
  
    axios({
        method: 'post',
        headers: { "Content-Type": "multipart/form-data" },
        url: 'http://1906078.pythonanywhere.com/predict',
        // data: {
        // //   ...val,
        // val
        // }
        data: bodyFormData,
      }).then(response =>{
        console.log(response.data);
        setResult(response.data);
        return response.data;
      })
  };

    const [text, setText] = React.useState('');
    const [result, setResult] = React.useState('');

    useEffect(()=>{
        console.log(result);
        props.setSentiment(result);
      },[result]);

    function text_ChangeHandeler(e) {
        setText(e.target.value);
    }

      // const val = {
      //   'text': text
      // }

      async function submitChangeHandler() {
        console.log("clicked");
        // let ret = textData(val);
        // console.log(ret);
        // await textData(val).then((response) => {
        //   console.log(response);
        // })
        // setResult(await textData(val));
        textData(text);
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