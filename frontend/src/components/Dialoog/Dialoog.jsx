import React, { useState } from "react";
import "./Dialoog.css"

const Dialoog = () => {

      return (
        <div className="dialoog_container">
            <h1>De cursus begint</h1>
            <div className="dialoog">
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Goedemorgen allemaal.</p>
                        <p>Welkom in de cursus Nederlands.</p>
                        <p>Ik ben Karin Dijkstra en ik ben jullie docent.</p>
                        <p>Jullie hebben twee docenten. De andere docent is Paul de Vries. Hij geeft twee dagen les en ik drie.</p>
                        <p>We beginnen met kennismaken.</p>
                        <p>Wie ben jij? Wat is jouw naam?</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Cursist:</span>
                    </div>
                    <div className="sentence">
                        <p>Ik ben Susy. Mijn naam is Susy.</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Dag Susy. Susy is je voornaam. En wat is je achternaam?</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Susy:</span>
                    </div>
                    <div className="sentence">
                        <p>Mijn achternaam is Wall.</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Uit welk land kom je?</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Susy:</span>
                    </div>
                    <div className="sentence">
                        <p>Ik kom uit Engeland.</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>De buurman van Susy: Wie ben jij? Hoe heet jij?</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Buurman:</span>
                    </div>
                    <div className="sentence">
                        <p>Ik heet Ning.</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Dag Ning. En waar kom je vandaan?</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Ning:</span>
                    </div>
                    <div className="sentence">
                        <p>Ik kom uit China.</p>                    
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Waar woon je?</p>                   
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Ning:</span>
                    </div>
                    <div className="sentence">
                        <p>Ik woon nu in Utrecht.</p>                  
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Wat is je adres?</p>                  
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Ning:</span>
                    </div>
                    <div className="sentence">
                        <p>Mijn adres is Hofstraat 22.</p>                  
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Op welk nummer? Wat is je antwoord? 23?</p>                    
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Ning:</span>
                    </div>
                    <div className="sentence">
                        <p>Nee, op 22. En mijn postcode is 3581 TW in Utrecht.</p>
                        <p>En u, mevrouw? Woont u ook in Utrecht?</p>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>Zeg maar jij, hoor. Ja, ik woon hier al twintig jaar.</p>
                        <p>Oké, we gaan verder met de les. Heeft iedereen het boek?</p>
                        <p>We beginnen met tekst 1 op bladzijde 8. We gaan naar de tekst luisteren. We gaan de tekst ook lezen.</p>                  
                    </div>
                </div>
                <div className="dialogue_box pause">
                    <div className="speaker">
                        <span>(...)</span>
                    </div>
                </div>
                <div className="dialogue_box">
                    <div className="speaker">
                        <span>Docent:</span>
                    </div>
                    <div className="sentence">
                        <p>We stoppen even, het is pauze. Tot straks.</p>
                    </div>
                </div>
                {/* <div className="speaker">
                        <p>Nee, op 22. En mijn postcode is 3581 TW in Utrecht.</p>
                        <p>En u, mevrouw? Woont u ook in Utrecht?</p>
                    <p>Docent:</p> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Cursist:</p>
                    <p>Docent:</p>
                    <p>Susy:</p>
                    <p>Docent:</p>
                    <p>Susy:</p>
                    <p>Docent:</p>
                    <p>Buurman</p>
                    <p>Docent:</p>
                    <p>Ning:</p>
                    <p>Docent:</p>
                    <p>Ning:</p>
                    <p>Docent:</p>
                    <p>Ning:</p>
                    <p>Docent:</p>
                    <p>Ning:</p>
                    <br />
                    <p>Docent:</p>
                    <br />
                    <br />
                    <br />
                    <p>(...)</p>
                    <br />
                    <p>Docent:</p>
                </div>
                <div className="sentence">
                    
                    
                    
                    
                    
                   
                   
                    
                    
                    
                    
                    
                    
                    
                    <br />
                    <br />
                    <br />
                </div> */}
            </div>
        </div>
      )
    
}

export default Dialoog;