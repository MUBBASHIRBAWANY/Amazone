import { apiUrl } from "./config.js"

export const getProduct = async (id) => {
  try{
    const response = await axios({
        url:`${apiUrl}/api/products/${id}`,
        method: "Get",
        headers:{
            'Content-Type' : "application/json"
        }
    });
    if(response.statusText !== "OK"){
        throw new Error(response.data.message);
    }
    return response.data
  }catch(err){
    console.log(err)
  }
}

