export default function LoadingCard(){
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
                    <h2>Loading courses</h2>
                </div>                
            </div>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',                    
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >                
                <div className="loader" />
                <button className="btn_style3">
                    <span className="btn-text1">Click me</span>
                </button>
            </div>                        
        </div>
    )
}