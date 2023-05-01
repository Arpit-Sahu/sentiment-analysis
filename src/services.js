import axios from "axios";



export const textData = async (val ) => {

    var bodyFormData = new FormData();
    bodyFormData.append('text', 'i am sad');

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
        return response.data;
      })
};