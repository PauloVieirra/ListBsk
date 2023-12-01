import React,{useState} from "react";
import './style.css';


    const DataLocations = [
        {
            title: "13", 
            lat: -15.809769,
            lng: -47.921585,
            local: "Parque da Cidade",
        },
        {
            title: "22", 
            lat: -15.835323,
            lng: -47.969906,
            local: "Guara",
        },
        { 
            title: " 30 ", 
            lat: -15.839036, 
            lng: -48.014096,
            local: "202AC",
        }, 
        {  
            title: " 18", 
            lat: -15.838983, 
            lng: -48.018829 ,
            local: "Sigma",
        }, 
        {   
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAHsuz_zAuPNtKe_1RQx542R0nnq_y26mIQ&usqp=CAU",
            title: " 28 ", 
            lat: -15.811726, 
            lng: -48.055289 ,
            local: "TaguaPark",
            tipo: "Aberto"
        }, 
];

const DataRanked = () => {
    const dataEvents = [
        {   
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 3", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 3", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 3", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 3", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 3", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        }
       
    ];

    return (
        <div className="diccardrank">
            {dataEvents.map((event, index) => (
                <div key={index} className="carddranketails">
                    <div className="rankimagecard">
                    {event.img && <img src={event.img}  className="imgfront" />}
                    </div>
                    <div className="rankdadoscard">
                    <h4>{event.nome}</h4>
                    <div className="datarankline">
                        <div className="ranklinedatas">
                    <p>pts:{event.pts}</p>
                    <p>rbt: {event.rbt}</p> 
                        </div>
                        <div className="ranklinedatas">
                    <p>rou: {event.rou}</p>
                    <p>sti: {event.sti}</p> 
                        </div>
                        <div className="ranklinedatas">
                    <p>blo: {event.blo}</p>
                    <p>fal: {event.fal}</p> 
                        </div>
                    </div>
                 
                    </div>
                  
                </div>
            ))}
            <div className="space"/>
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
        }
        
       
       
    ];

    const toggleDiv = () => {
        setShowFullDiv(!showFullDiv);
    };

    return (
      <>
        <div onClick={toggleDiv} className={`conrbtnflat ${showFullDiv ? '' : 'retractbtn'}`}>See</div>
        <div className={`listfront ${showFullDiv ? '' : 'retract'}`}>
            {dataEvents.map((event, index) => (
                   <div key={index} className="player-info">
                         {event.img && <img src={event.img}  className="imgfront" />}
                         <p>pts: {event.pts}</p>
                       <p>reb: {event.reb}</p>
               </div>
            ))}
        </div>
     </>
    );
}

const DataEvents = () => {
    const dataEvents = [
        {   
            img: "https://i.pinimg.com/564x/85/9f/14/859f1441be8d78e32116041b1d42d009.jpg",
            nome: "Evento 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://i.pinimg.com/564x/77/fb/d8/77fbd8d00652606d3bfb829e254f877e.jpg",
            nome: "Evento 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://i.pinimg.com/564x/fb/d5/b6/fbd5b655830466d98378ca8111ec7679.jpg",
            nome: "Evento 3", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        },
        {   
            img: "https://i.pinimg.com/564x/cf/f3/d9/cff3d94ab36edcbd3bd4507ac22b9c2a.jpg",
            nome: "Evento 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:10,
            blo:15,
            fal:26,
        }
       
    ];

    return (
        <div className="diccardevents">
        {dataEvents.map((event, index) => (
            <div key={index} className="cardeventstails">
                <div className="eventsimagecard">
                    {event.img && <img src={event.img} className="imgfrontevents" />}
                </div>
                <div className="eventsdadoscard">
                    <h4>{event.nome}</h4>
                    <p>{event.descricao}</p>
                    <p><strong>Data:</strong> {event.data}</p>
                    <p><strong>Hora:</strong> {event.hora}</p>
                    <p><strong>Local:</strong> {event.local}</p>
                </div>
            </div>
        ))}
        <div className="space"/>
    </div>
    );
}

export {DataLocations, DataRanked, DataPlayers, DataEvents}