
import React from "react";
import ScrollReveal from "scrollreveal";
export function Contact ()
{
    const sr = ScrollReveal(
        {
            origin: 'right'
        }
    );

    sr.reveal('.skills-box', {delay: 200});
    sr.reveal ('.form-contorl', {delay: 200});
    return (
       <div className="wrapper">
         <section className="section" id="contact">
                <div className="top-header">
                    <h1>Ecrivez moi</h1>
                    <span>Auriez vous un project à me proposer ? </span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                            <h2>Mes contacts <i className="uil uil-corner-right-down"></i></h2>
                            <p><i className="uil uil-envelope"></i> Email: moiseKafeka@gmail.com</p>
                            <p><i className="uil uil-phone"></i> +243 971 250 344</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-control">
                            <div className="form-inputs">
                                <input type="text" className="input-field" placeholder="Nom"/>
                                <input type="text" className="input-field" placeholder="Email"/>
                            </div>
                            <div className="text-area">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="form-button">
                                <button className="btn">Envoyer <i className="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </div>
    )
}