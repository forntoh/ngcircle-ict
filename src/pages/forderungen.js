import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import logo_mensch from "../assets/images/logos/logo_mensch.jpg";

export const Forderungen = () => (
  <div>
    <Header isExpanded={ false }/>
    <CallToAction description="FÖRDERUNGEN" />
    <div className="primary-image">
      <img src={logo_mensch} style={{ margin: "200px 165px" }} alt="Mensch"/>
    </div>
    <div className="content-wrapper">
      <h2>
        DAS PROGRAMM:
        <br />
        unternehmensWert Mensch
      </h2>
      <p>
        Die NgC verzeichnet ein stetiges-, wirtschaftliches-, und auch
        personelles Wachstum.
      </p>
      <p>
        Das wir so gut aufgestellt sind, ist das Ergebnis unser aller Arbeit und
        unserem gesammelten Knowhow. Wachstum bedeutet natürlich Veränderung.
        Veränderungen sind anstrengend, jedoch notwendig, da sonst Stagnation
        und Innovationen nicht mehr möglich wären. Das bedeutet, dass wir uns
        neuen Herausforderungen stellen müssen, um den wachsenden Ansprüchen des
        Marktes gerecht zu werden – diese sind ziemlich schnelllebig.
        Insbesondere durch das personelle Wachstum, besteht die Notwendigkeit,
        der Nachjustierung um eine solide Grundlage für weiteres Wachstum zu
        schaffen.
      </p>
      <p>
        Um einen Fokus von außen zu erhalten und neue Dynamik zu etablieren, war
        eine „neutrale Meinung“ einer dritten Person enorm wichtig – denn im
        Alltag hat die Umsetzung neuer Strukturen einen schweren Stand und gerät
        häufig wieder in Vergessenheit. Aus diesen Gründen haben wir uns für das
        Förderprogramm "unternehmensWert:Mensch" im Rahmen der INQA entschieden.
      </p>
      <p>
        Gemeinsam mit dem Prozesscoach Frau Gabriele Jahns haben wir von Anfang
        Juli bis Mitte Dezember 2019, passende Methoden und Arbeitsprozesse
        ausgearbeitet, damit wir uns die Balance zwischen Struktur und Freiraum
        bewahren können. Die Schaffung von Transparenz innerhalb der NgC und der
        Verbesserung der internen Zusammenarbeit durch klar definierte
        Zuständigkeiten und Verantwortungsbereiche, kommt den Mitarbeitern zu
        Gute.
      </p>
      <p>
        Die intensive und fokussierte Auseinandersetzung hat das Unternehmen
        positiv vorangebracht. Ohne die Impulse von außen fehlt im Alltag
        manchmal die Zeit und auch der Blick, um Dinge gezielt anzugehen. Die
        Beratung hat genau da angesetzt, wo wir unser Verbesserungspotenzial
        erkannt haben.
      </p>
      <p>
        In Zukunft können wir auf dieser Grundlage aufbauen und uns als
        Unternehmen weiter entwickeln. Somit können wir den wachsenden
        Anforderungen wie z.B. Agilität, Souveränität und strukturiertem
        Arbeiten gerecht werden.
      </p>
    </div>
    <Footer />
  </div>
);

export default Forderungen;
