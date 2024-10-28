import { Link } from "react-router-dom";

export default function ListCard({course}){
    return(
        <div className="list-card">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <div
                    style={{
                        fontWeight: '500'
                    }}
                >
                    <h2>{course.title}</h2>
                    <p>Id : {course.id}</p>
                    <p>hours : {course.hours}</p>
                </div>
                <img
                    width='200px'                    
                    src={course.image}                
                />
            </div>                        
            <p>Description: </p>
            <p>{course.description}</p>
            <button className="btn_style1">
                <Link 
                    className="nav-link"
                    to={`/course/${course.id}`}
                >
                    <span className="btn-text1">More</span>
                </Link>
            </button>
        </div>
    )
}