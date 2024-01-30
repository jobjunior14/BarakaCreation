import React from "react";

export function About ()
{
    return (
        <div className="wrapper">
            <section className="section" id="about">
        <div className="top-header">
            <h1>A propos de moi</h1>
        </div>
        <div className="row">
            <div className="col">
                <div className="about-info">
                    <h3>MOÏSE KAFEKA</h3>
                    <p> Moïse Kafeka  est  un jeune  artiste  visuel  portraitiste, graphiste.</p>
                    <p>Depuis son jeune  âge, il a  toujours  été  une  personne  passionnée et sensible  à  tout  ce qui  concerne  l'art.</p>
                    <p>A l'âge  de 16 ans  il réalisait déjà sa passion et continuait  à surprendre  les gens  avec son talent inné.</p>
                    <p>Aucun  rapport  avec  les études  poursuivies, nous  pouvons tout  simplement  dire  que ça a toujours été sa niche.</p>
                    <p>Aujourd'hui  à  l'aide  du matériels : crayon   tablette  numérique et la peinture;  il est parvenu à réaliser un travail impressionnant quiconque le regarde.</p>
                    <p>Avec  tout c'qu'il  a eu à réaliser l'avenir ne lui prophétise que le meilleur.</p>
                    <div className="about-btn">
                        <button className="btn">Télécharger le CV <i className="uil uil-import"></i></button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Numérique</h3>
                    </div>
                    <div className="skills-list">
                        <span>Tablette</span>
                        <span>Palette Graphique</span>
                        <span>Ordinateur</span>
                        <span>Téléphone</span>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Physique</h3>
                    </div>
                    <div className="skills-list">
                        <span>crayon</span>
                        <span>Gomme</span>
                        <span>Papier</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}