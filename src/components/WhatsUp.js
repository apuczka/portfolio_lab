import { Link as RouterLink, Routes, Route } from "react-router-dom";

import HomeHeader from "./HomeHeader";


function WhatsUp() {
    return (
      <>
        <section className='container_whatsUp' name='whatsUp'>
          <div className='container_whatsUp-theme'>Wystarczą 4 proste kroki</div>
          <div className='container_whatsUp_steps'>
            <div className="container_whatsUp_steps_step_1">
              <p>Wybierz rzeczy</p>
              <hr />
              <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="container_whatsUp_steps_step_2">
              <p >Spakuj je</p>
              <hr />
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className="container_whatsUp_steps_step_3">
              <p>Zdecyduj komu chcesz pomóc</p>
              <hr />
              <p>wybierz zaufane miejsce</p>
            </div>
            <div className="container_whatsUp_steps_step_4">
              <p>Zamów kuriera</p>
              <hr />
              <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
          </div>
          <div className="container_whatsUp_boxes">
              <RouterLink to='signIn' className="container_whatsUp_boxes-box">ODDAJ RZECZY</RouterLink>
          </div>


        </section>
        
      </>
    );
  }

  export default WhatsUp;