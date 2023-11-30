import React,{useState} from "react";
import './style.css';


    const DataLocations = [
        {
            title: "13", 
            lat: -15.809769,
            lng: -47.921585
        },
        {
            title: "22", 
            lat: -15.835323,
            lng: -47.969906
        },
        { 
            title: " 30 ", 
            lat: -15.839036, 
            lng: -48.014096 
        }, 
        {  
            title: " 18", 
            lat: -15.838983, 
            lng: -48.018829 
        }, 
        {  
            title: " 28 ", 
            lat: -15.811726, 
            lng: -48.055289 
        }, 
    ];

   


const DataEvents = () => {
    const dataEvents = [
        {
            title: "Evento 1",
            lat: -23.561687,
            long: -46.688436,
        },
        {
            title: "Evento 2",
            lat: -23.543660,
            long: -46.667286,
        },
        // ... outros eventos
    ];

    return (
        <div>
            {dataEvents.map((event, index) => (
                <div key={index}>
                    <h2>{event.title}</h2>
                    <p>Latitude: {event.lat}</p>
                    <p>Longitude: {event.long}</p>
                </div>
            ))}
        </div>
    );
}

const DataPlayers = () => {
    const [showFullDiv, setShowFullDiv] = useState(true);
    const dataEvents = [
        {
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 1",
            pts: 230,
            reb: 30,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 2",
            pts: 200,
            reb: 32,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 3",
            pts: 120,
            reb: 160,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 4",
            pts: 500,
            reb: 2,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 5",
            pts: 30,
            reb: 30,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 6",
            pts: 320,
            reb: 6,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 7",
            pts: 211,
            reb: 36,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 8",
            pts: 125,
            reb: 62,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 9",
            pts: 85,
            reb: 160,
        },
        {   
            img: "https://www.ocregister.com/wp-content/uploads/migration/ksw/kswl65-b78571242z.120091110091142000giqknq7h.1.jpg?w=620",
            nome: "Play 10",
            pts: 301,
            reb: 45,
        },
       
       
    ];

    const toggleDiv = () => {
        setShowFullDiv(!showFullDiv);
    };

    return (
        <div className={`listfront ${showFullDiv ? '' : 'retract'}`}>
            <div onClick={toggleDiv} className="conrbtnflat">Go</div>
            {dataEvents.map((event, index) => (
                   <div key={index} className="player-info">
                         {event.img && <img src={event.img}  className="imgfront" />}
                    
                         <p>pts: {event.pts}</p>
                       <p>reb: {event.reb}</p>
                   
               </div>
            ))}
        </div>
    );
}

export {DataLocations, DataEvents, DataPlayers}