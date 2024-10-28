import axios from "axios";
import courses, { ServerURL } from "../res/data";

async function ConnectServer(){
    let connection = false;
    try{
        let result = await axios.get(ServerURL);    
        if (result.status === 200){
            if (result.data === 'Server OK'){
                connection = true;
            }        
        } else{
            connection = false;
        }
    }
    catch(error){
        console.log(error);
    }
    return connection;
}
async function getAllCourses(){
    let result = await axios.get(`${ServerURL}/courses`);
    console.log(result);
    let data = null;
    if (result.status === 200){
        data = result.data;
    }
    return data;
}

export {ConnectServer, getAllCourses};