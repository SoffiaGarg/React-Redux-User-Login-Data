/**
 * .........................................................................
 * As right now , we are not using backend so we are managing state
 * with the hel of cookies.
 * ........................................................................
 */

var Cookie = require('js-cookie');

//Add Cookie When login
export const setCookie = ()=>{
    try{
        Cookie.set('isLogin',true);

    }catch(error){
        console.log("Unable to set Cookie");
    }
}

//Remove Cookie when logout
export const removeCookie = ()=>{
    try{
        Cookie.remove('isLogin');

    }catch(error){
        console.log("Unable to delete Cookie");
    }
}

//Get Cookie , for Redirection purpose
export const getCookie = ()=>{
    try{
        let result = Cookie.get('isLogin');
        return result;
    }catch(error){
        console.log("Unable to get Cookie");
    }
}