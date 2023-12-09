import React,{useState, useMemo} from "react";
import { Button, Modal, TextField } from "@mui/material";
import Head from "../Header";
import { useAuth } from "../../Context/useContext";
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
            regras: {
              TempoDeJogo: "10 minutos",
              Substituicao: "O proximo da lista ",
              Pontuacao: "12 ponto",
              Empate: "sai as duas equipes, mesmo se for 10 a 10",
              Continua: "o time que fizer 12 pontos em 10 minutos ou menos",
              
            }
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
        {   
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAHsuz_zAuPNtKe_1RQx542R0nnq_y26mIQ&usqp=CAU",
          title: " 0 ", 
          lat: -15.829310,
          lng: -48.013853,
          local: "301 AC",
          tipo: "Aberto"
      }, 
];

const DataRanked = () => {
    
    const [sortBy, setSortBy] = useState('');
    const[modalPlayer, setModalPlayer] = useState(false);
    const [clickedCardData, setClickedCardData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const DataRankedPlay = [
        {   ano: 1988,
            estatura: 1.80,
            posit:"Armador",
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 1",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti: 1,
            blo: 15,
            ass: 26,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1990,
            estatura: 1.90,
            posit:"Ala",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 2", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti: 10,
            blo: 8,
            ass: 26,
            bthree: 13,
            mvp:2,
        },
        {   
            ano: 2000,
            estatura: 1.88,
            posit:"Armador",
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 3", 
            pts: 198,
            rbt: 29,
            rou: 20,
            sti: 13,
            blo: 18,
            ass: 11,
            bthree: 12,
            mvp:3,
        },
        {   
            ano: 1998,
            estatura: 1.98,
            posit:"Ala",
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 4",
            pts: 199,
            rbt: 35,
            rou: 20,
            sti: 16,
            blo: 19,
            ass: 16,
            bthree: 9,
            mvp:1,
        },
        {   
            ano: 1972,
            estatura: 1.75,
            posit:"Armador",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 5", 
            pts: 111,
            rbt: 29,
            rou: 20,
            sti:18,
            blo:1,
            ass:2,
            bthree: 22,
            mvp:5,
        },
        {   
            ano: 2005,
            estatura: 1.97,
            posit:"Armador",
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 6", 
            pts: 100,
            rbt: 29,
            rou: 20,
            sti:9,
            blo:30,
            ass:33,
            bthree: 23,
            mvp:3,
        },
        {   
            ano: 2001,
            estatura: 1.86,
            posit:"Armador",
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 7",
            pts: 115,
            rbt: 35,
            rou: 20,
            sti:6,
            blo:24,
            ass:17,
            bthree: 8,
            mvp:1,
        },
        {   
            ano: 2009,
            estatura: 2.00,
            posit:"Pivo",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 8", 
            pts: 186,
            rbt: 29,
            rou: 20,
            sti:5,
            blo:31,
            ass:31,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1996,
            estatura: 1.91,
            posit:"Ala",
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 9", 
            pts: 163,
            rbt: 29,
            rou: 20,
            sti:3,
            blo:20,
            ass:51,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1980,
            estatura: 1.83,
            posit:"Armador",
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 10",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:2,
            blo:71,
            ass:41,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1988,
            estatura: 1.88,
            posit:"Armador",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 11", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti: 0,
            blo:56,
            ass:79,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 2010,
            estatura: 1.80,
            posit:"Armador",
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 12", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:21,
            blo:23,
            ass:26,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1978,
            estatura: 1.99,
            posit:"Pivo",
            img: "https://static01.nyt.com/images/2015/03/08/sports/dogMASK5/dogMASK5-superJumbo.jpg",
            nome: "Play 13",
            pts: 168,
            rbt: 35,
            rou: 20,
            sti:17,
            blo:17,
            ass:50,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1990,
            estatura: 1.83,
            posit:"Ala",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc6HDtmtJmABW3wkh4uJa6LqJ0-wOwEW_dg&usqp=CAU",
            nome: "Play 14", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:7,
            blo:15,
            ass:102,
            bthree: 3,
            mvp:1,
        },
        {   
            ano: 1978,
            estatura: 1.87,
            posit:"Ala",
            img: "https://cdn.vox-cdn.com/thumbor/ojXhDh4Q1mxyhawDccKf2gPFibQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7705195/Sad_Chris_Paul_Couldnt_Beat_The_Warriors_Is_Now_A_Meme.jpg",
            nome: "Play 15", 
            pts: 145,
            rbt: 29,
            rou: 20,
            sti:4,
            blo:10,
            ass:38,
            bthree: 3,
            mvp:1,
        }
       
    ];

    const sortPlayers = (option, players) => {
        const sortedPlayers = [...players]; // Utiliza os jogadores filtrados
    
        switch (option) {
          case 'Cesta':
            sortedPlayers.sort((a, b) => b.pts - a.pts);
            break;
          case 'Rebote':
            sortedPlayers.sort((a, b) => b.rbt - a.rbt);
            break;
          case 'Roubo':
            sortedPlayers.sort((a, b) => b.rou - a.rou);
            break;
          case 'Still':
            sortedPlayers.sort((a, b) => b.sti - a.sti);
            break;
          case 'Asistencia':
            sortedPlayers.sort((a, b) => b.ass - a.ass);
            break;
          case 'Bloqueio':
            sortedPlayers.sort((a, b) => b.blo - a.blo);
            break;
            case 'BolaTripla':
            sortedPlayers.sort((a, b) => b.bthree - a.bthree);
            break;
            case 'MVP':
            sortedPlayers.sort((a, b) => b.mvp - a.mvp);
            break;
          default:
            break;
        }
    
        return sortedPlayers;
      };
    
      const handleSortChange = (option) => {
        setSortBy(option); // Atualiza o estado com a nova opção
      };
    
      const handleCardClick = (cardData) => {
        setClickedCardData(cardData);
        setModalPlayer(true);
      };
    
      const handleClosePlayer = () => {
        setModalPlayer(false);
      };
    
      const handleOrderPlayers = () => {
        // Lógica para ordenar jogadores quando o botão é clicado
        const sortedPlayers = sortPlayers(sortBy, DataRankedPlay);
        return sortedPlayers;
      };
    

      const filteredData = useMemo(() => {
    return DataRankedPlay.filter((player) => {
      const { nome, posicao } = player;
      return (
        (nome && nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (posicao && posicao.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  }, [DataRankedPlay, searchTerm]);

  const filteredAndSortedData = useMemo(() => {
    const sortedPlayers = sortPlayers(sortBy, filteredData);
    return sortedPlayers;
  }, [filteredData, sortBy]);
    
      return (
        <>
          <div className="divtop">
           <Head/>
            <div className="divseachBar">
              
              <TextField
                label="Buscar jogador"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="seachBar"
              />
            </div>
            <div className="rank-filter">
              <Button onClick={() => handleSortChange('Cesta')}>Pontos</Button>
              <Button onClick={() => handleSortChange('Rebote')}>Rebotes</Button>
              <Button onClick={() => handleSortChange('Roubo')}>Roubo</Button>
              <Button onClick={() => handleSortChange('Still')}>Still</Button>
              <Button onClick={() => handleSortChange('Bloqueio')}>Block</Button>
              <Button onClick={() => handleSortChange('Asistencia')}>Assit</Button>
              <Button onClick={() => handleSortChange('Bloqueio')}>Block</Button>
              <Button onClick={() => handleSortChange('Asistencia')}>Assit</Button>
              <Button onClick={() => handleSortChange('BolaTripla')}>3Ball</Button>
              <Button onClick={() => handleSortChange('MVP')}>MVP</Button>
            </div>
          </div>
          <div className="diccardrank">
            {filteredAndSortedData.map((event, index) => (
              
              <div key={index} className="carddranketails" onClick={() => handleCardClick(event)}>

                <div className="rankimagecard">
                  {event.img && <img src={event.img} className="imgfront" alt="Player" />}
                </div>
                <div className="rankdadoscard">
                  <h4>{event.nome}</h4>
                  <div className="datarankline">
                    <div className="ranklinedatas">
                      <p><strong>Pts:</strong>  {event.pts}</p>
                      <p><strong>Rbt:</strong> {event.rbt}</p>
                    </div>
                    <div className="ranklinedatas">
                      <p><strong>Rou:</strong> {event.rou}</p>
                      <p><strong>Sti</strong> {event.sti}</p>
                    </div>
                    <div className="ranklinedatas">
                      <p><strong>Blo:</strong> {event.blo}</p>
                      <p><strong>Asist:</strong> {event.ass}</p>
                    </div>
                    <div className="ranklinedatas">
                      <p><strong>3Ball:</strong> {event.bthree}</p>
                      <p><strong>MVP:</strong> {event.mvp}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
            
            <div className="space" />
          </div>
          {clickedCardData && (
           <Modal
           open={modalPlayer}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
         >
           <div className="modal">
            <div className="modalfundo">
             <div className="profile-container">
              <div className="profile-top"> 
                <div className="profile-img">
                 <img src={clickedCardData.img} className="imgprofile" alt="Player profile"  />
                  </div>
                  <div className="profile-into">
                     <h2 style={{ margin: '10px 0' }}>{clickedCardData.nome}</h2>
                     <div className="profile-datas">
                      <p className="pa"> <strong>Ano:</strong> {clickedCardData.ano}</p>
                      <p className="pa"><strong>Est: </strong> {clickedCardData.estatura}</p>
                      <p className="pa"><strong>pos: </strong> {clickedCardData.posit}</p>
                     </div>
                  </div>
              </div>
              <div>
               <Button onClick={handleClosePlayer} style={{ marginTop: '20px' }}>Close</Button>
             </div>
              </div>
             </div>   
           </div>
         </Modal>
         
          )}
        </>
      );
    }

const DataPlayers = () => {
    const [showFullDiv, setShowFullDiv] = useState(true);
    const DataRankedPlay = [
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
            {DataRankedPlay.map((event, index) => (
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