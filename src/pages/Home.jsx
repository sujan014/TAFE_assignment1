import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import courses from "../res/data";
import { ConnectServer, getAllCourses } from "../util/courseApi";
import LoadingCard from "../components/LoadingCard";
import LoadingWindow from "../components/LoadingWindow";

export default function Home(){
    const [myCourses, setMyCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [retry, setRetry] = useState(0);
    const [displayText, setDisplayText] = useState(true);
    const [displayCards, setDisplayCards] = useState(true);

    useEffect(() => {        
        if (!retry){
            setTimeout(() => {
                readCourses();                
            }, 4000);
        } else {
            readCourses();
        }
    }, [retry]);    

    const readCourses = async() => {
        try{
            console.log('Checking connection..')
            let connection = await ConnectServer();
            if (connection){
                console.log('Getting data');
                let getCourse = await getAllCourses();
                if (getCourse){
                    setMyCourses(getCourse);
                    setLoading(false);
                }                
            } else {
                // re-try
                if (retry < 8){
                    setTimeout(() => {
                        setRetry(value => value + 1);
                    }, 1000);                    
                } else{                                        
                    setDisplayText(false);
                    alert('Unable to connect to server');
                }
            }                        
        }
        catch(error){
            alert('Cannot get courses');
        }
    }
    
    return(
        <div 
            className="main-body"            
        >            
            <h2 
                style={{
                    textAlign: 'center'
                }}
            >
                List of courses
            </h2>            
            {loading ? 
                <LoadingWindow 
                    displayText={displayText}
                    displayCards={displayCards}
                />:
                <div className='course-container'>
                    {                        
                        myCourses.map( course => (
                            <ListCard 
                                key={course.id}
                                course={course} 
                            />
                        ))
                    }
                </div>
            }            
        </div>
    )
}

