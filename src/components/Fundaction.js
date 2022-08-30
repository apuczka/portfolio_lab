import { Routes, Route, Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import { useState } from "react";


function Fundaction() {
    



  const [activeTab, setActiveTab] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);

  const lists = [
    [<div className="list_li"><div className="list_li-capital">Fundacja “Dbam o Zdrowie” <div className="list_li-target">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.,</div></div><div className="list_li-desc">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div></div>,
     <div className="list_li"><div className="list_li-capital">Fundacja “Dla dzieci” <div className="list_li-target">Cel i misja: Pomoc dzieciom z ubogich rodzin.</div></div><div className="list_li-desc">ubrania, meble, zabawki</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja "Bez domu" <div className="list_li-target">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</div></div><div className="list_li-desc">ubrania, jedzenie, ciepłe koce</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 4” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 5” <div className="list_li-target">  Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 6” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 7” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc"> Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 8” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 9” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     ],
     [<div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 1” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 2” <div className="list_li-target">  Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 3” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 4” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc"> Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 5” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>, 
     <div className="list_li"><div className="list_li-capital">Fundacja “Lorem Ipsum 6” <div className="list_li-target"> Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>,
    ],
    [
      <div className="list_li"><div className="list_li-capital">Zbiórka “Lorem Ipsum 1” <div className="list_li-target">Quis varius quam quisque id diam vel quam elementum pulvinar.</div></div><div className="list_li-desc">Egestas, sed, tempus</div></div>,
      <div className="list_li"><div className="list_li-capital">Zbiórka “Lorem Ipsum 2” <div className="list_li-target">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</div></div><div className="list_li-desc">Ut, aliquam, purus, sit, amet</div></div>,
      <div className="list_li"><div className="list_li-capital">Zbiórka “Lorem Ipsum 3” <div className="list_li-target">Scelerisque in dictum non consectetur a erat nam.</div></div><div className="list_li-desc">Mi, quis, hendrerit, dolor</div></div>,
      
    ]
  ];

  return (
    <div className="container_fundaction">
  
      <div className="container_fundaction-theme" name='fundaction'>Komu pomagamy?</div>
      <div className="container_fundaction-tabs">
        <button className="button_fundaction"
          style={{ border: activeTab === 1 ? "0.75px black solid" : "none" }}
          onClick={() => {
            setCurrentPage(1);
            setActiveTab(1);
          }}
        >
          
          Fundacjom
        </button>
        
        <button className="button_organization"
          style={{ border: activeTab === 2 ? "0.75px black solid" : "none" }}
          onClick={() => {
            setCurrentPage(1);
            setActiveTab(2);
          }}
        >
          Organizacjom pozarządowym
        </button>
        <button className="button_location"
          style={{ border: activeTab === 3 ? "0.75px black solid" : "none" }}
          onClick={() => {
            setCurrentPage(1);
            setActiveTab(3);
          }}
        >
          Lokalnym zbiórkom
        </button>
      </div>

      <div className="container_fundaction-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
      <div className="container_fundaction-list">
        <ul>
          {lists[activeTab - 1]
            .slice(perPage * currentPage - perPage, perPage * currentPage)
            .map((element) => {
              return <li>{element}</li>;
            })}
        </ul>

        <div className="container_fundaction-pagination">
          {Array(Math.ceil(lists[activeTab - 1].length / perPage))
            .fill(1)
            .map((element, index) => {
              return (
                <button className="button_page" 
                style={{border: currentPage === index + 1 ? "1px solid #707070" : "none"}}
                onClick={() => {setCurrentPage(index + 1);
                  activeTab(index + 1);
                }}>
                  {index + 1}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}








        
    
  
  

  export default Fundaction;