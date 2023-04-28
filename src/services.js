import axios from "axios";


export const textData = async (val ) => {
    axios({
        method: 'post',
        url: 'http://localhost:3024/donorReg',
        data: {
        //   ...val,
        val
        }
      });
    
};