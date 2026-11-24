const API_URL = "https://dummyjson.com/products";
export const getAllProduct = async()=>{
    const response = await fetch(API_URL);
    if(!response.ok){
        throw new Error("HTTP error! Status: ${response.status}");
    }  
    const data = await response.json();
    return data.products;
};