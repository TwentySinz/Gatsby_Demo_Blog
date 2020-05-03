import React from 'react';
import Layout from "../components/layout"
import Link from 'gatsby-link';
import SEO from "../components/seo"

const Formelsammlung = () => {
    return(
        <div>
            <Layout>
            <SEO title="Formelsammlung" />
            <h1> Potenzgesetze </h1>
            <p>Potenzgesetze stellen für Schüler des Öfteren eine größere Hürde in 
                der Mathematik dar, dabei sind sie garnicht so schwer wie es auf den 
                ersten Blick scheint. Besonders wichtig wird es spätestens in der 11. 
                Klasse die Anwendung der Potenzgesetze zu beherschen, da diese beim 
                Ableiten von Funktionen oft zur Anwendung kommen. Hier findet Ihr 
                einen einen Überblick über alle Potenzgesetze. Wer ausführlichere 
                Informationen zu einzelnen Potenzregeln benötigt, hat darüber 
                hinaus die Möglichkeit sich weiterführende Artikel zum jeweiligen 
                Potenzgesetz anzusehen. Darüber hinaus bietet jeder Artikel ein 
                zusätzliches Videotutorial, in dem die Potenzgesetze nocheinmal 
                ausführlich mit Beispielen erklärt werden. Zu den Artikeln mit 
                Videotutorial gelangt Ihr <Link to="/blog" className="text-base hover:text-gray-600">hier</Link>.
            </p>
            <h2>Was ist eine Potenz</h2>
            <div className="lg:flex bg-gray-400 rounded mb-4">
                <div className="lg:w-1/2 p-2">
                    <h4>Formel:</h4>
                    <p>a<sup>n</sup> = a<sub>1</sub> &sdot; a<sub>2</sub> &sdot; ... &sdot; a<sub>n</sub></p>
                </div>
                <div className="lg:w-1/2 p-2">
                    <h4>Beispiel:</h4>
                    <p>2<sup>3</sup> = 2 &sdot; 2 &sdot; 2 = 8</p>
                </div>
            </div>
            <p>
            Eine Potenz besteht aus einer Basis a und einem Exponenten n. Allgemein schreibt man Potenzen also als 
            a<sup>n</sup>, wobei die Basis a n-mal miteinander multipliziert wird. Konkret heißt das, dass der 
            Exponent angibt wie oft eine Zahl mit sich selbst multipliziert wird. In unserem Beispiel ist die Basis 2 
            und der Exponent 3. Das heißt, die Zahl 2 wird dreimal miteinander multipliziert.    
            </p>
            <h2>Potenzen addieren und subtrahieren</h2>
            <div className="lg:flex bg-gray-400 rounded mb-4">
                <div className="lg:w-1/2 p-2">
                    <h4>Formel:</h4>
                    <p>a &sdot; x<sup>n</sup> + b &sdot; x<sup>n</sup> = (a + b) &sdot; x<sup>n</sup></p>
                    <p>a &sdot; x<sup>n</sup> - b &sdot; x<sup>n</sup> = (a - b) &sdot; x<sup>n</sup></p>
                </div>
                <div className="lg:w-1/2 p-2">
                    <h4>Beispiel:</h4>
                    <p>4x<sup>2</sup> + 5x<sup>2</sup> = (4 + 5)x<sup>2</sup> = 9x<sup>2</sup></p>
                    <p>6x<sup>2</sup> - 3x<sup>2</sup> = (6 - 3)x<sup>2</sup> = 3x<sup>2</sup></p>
                </div>
            </div>
            <p>
            Streng genommen gehört diese Rechenregel nicht zu den Potenzregeln. Ferner besagen die Potenzgesetze sogar, 
            dass Potenzen selbst nicht addiert werden können. Hier werden lediglich die Faktoren vor der Potenz addiert.    
            </p>
            </Layout>
        </div>
    )
}


export default Formelsammlung;