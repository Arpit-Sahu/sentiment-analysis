import axios from "axios";


export const textData = async (val ) => {
    axios({
        method: 'post',
        url: 'http://1906078.pythonanywhere.com/predict',
        data: {
        //   ...val,
        val
        }
      });
    
};