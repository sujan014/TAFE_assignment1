import LoadingCard from "./LoadingCard";

export default function LoadingWindow({displayText, displayCards}){
    return(
        <div>
            {displayText ? 
                <div className="loading-text">
                    <h1>Loading<span className="dots"></span></h1>
                </div> :
                null
            }
            {displayCards ?
                <div className='course-container'>
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                </div> :
                null
            }
        </div>
    )
}