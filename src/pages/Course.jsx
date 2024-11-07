import { useParams } from "react-router"
import { ServerURL } from "../res/data";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Course(){
    const {id} = useParams();
    const [course, setCourse] = useState({});
    const [errState, setErrState] = useState(true);
    console.log(`id: ${id}`);
    // const course = courses.find((course) => Number(id) === course.id);

    useEffect(() => {
        readCourseById();
    }, []);
    
    const readCourseById = async() => {
        try{
            let result = await axios.get(`${ServerURL}/courses/${id}`);
            console.log(result);            
            if (result.status === 200){
                setCourse(result.data);
                setErrState(false);
            } else {
                alert(result.err);
                setErrState(true);
            }
        } catch (error){
            setErrState(true);
            console.log(error);
        }
    }
    const handleEnroll = (event) => {
        event.preventDefault();
        alert('Congratulations ! Enrollment successfull');
    }

    if (errState){
        return(
            <div className="main-body flex-vertical">
                <h2>Loading course</h2>
            </div>
        )
    } else{
        return(        
            <div className="main-body flex-vertical">
                <img 
                        width={'70%'}
                        src={course.image}
                    />
                <div
                    style={{
                        width: '70%',
                        margin: '20px auto',
                        border: '1px solid black',                        
                    }}
                >
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: '1.7rem'
                        }}
                    >
                        Title: {course.title}
                    </h2>
                    <hr />
                    <div
                        style={{padding: '0 20px'}}
                    >
                        <p>Hours: {course.hours}</p>
                        <p>Category: {course.category}</p>
                        <p>Instructor: {course.instructor}</p>
                    </div>
                    <hr />
                    <div style={{padding: '0 20px'}}>
                        <p
                            style={{
                                fontSize: '1.3rem'
                            }}
                        >
                            Course Description: {course.description}
                        </p>
                        <p>Modules: </p>
                        {course.modules.map(module => (
                            <button className="btn_style2">
                                {module}
                            </button>
                        ))}
                    </div>
                    <div style={{padding: '10px 20px'}}>
                        <button 
                            className="btn_style1 btn-text1"
                            style={{
                                marginTop: '20px'
                            }}
                            onClick={handleEnroll}
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}