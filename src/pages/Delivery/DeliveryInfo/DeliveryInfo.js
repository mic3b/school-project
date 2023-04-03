import React from "react";
import { BsFillStarFill } from "react-icons/bs";

import "./DeliveryInfo.css";

const DeliveryInfo = () => {
  return (
    <div className="section delivery-info">
      <div className="container">
        <div className="grid-container">
          <div>
            <div className="delivery-iconbox">
              <BsFillStarFill color="#c3512f" />
              <h3 className="heading-tertiary">
                krótki <span>opis</span>
              </h3>
            </div>

            <p>
              potrawa kuchni włoskiej, obecnie szeroko rozpowszechniona na całym
              świecie. Jest to płaski placek z ciasta drożdżowego (focaccia), z
              sosem pomidorowym, posypany tartym serem (najczęściej jest to
              mozzarella) i ziołami, pieczony w bardzo mocno nagrzanym piecu.
              Pizzę podaje się na gorąco, lecz rozpowszechnione jest jedzenie
              jej również na zimno. Tradycyjnym miejscem spożywania pizzy są
              pizzerie, lokale gastronomiczne specjalizujące się w przyrządzaniu
              i serwowaniu pizzy.
            </p>
          </div>

          <div>
            <div className="delivery-iconbox">
              <BsFillStarFill color="#c3512f" />
              <h3 className="heading-tertiary">
                <span>Przepis</span>
              </h3>
            </div>

            <p>
              <b>1.</b> Drożdże utrzyj z 1/3 szklanki ciepłej wody, łyżką mąki
              oraz łyżeczką cukru. Następnie rozczyn odstaw na 10-15 minut w
              ciepłe miejsce, aby zaczął pracować. Mąkę przesiej do dużej miski,
              dodaj pozostałe składniki: rozczyn, pozostałą wodę oliwę z oliwek
              oraz sól. Następnie wyrabiaj ciasto – aż stanie się elastyczne i
              gładkie. Ciasto przykryj ściereczką, pozostaw do wyrośnięcia w
              ciepłe miejsce na około 30 minut.
            </p>
            <br></br>
            <p>
              <b>2.</b> Następnie kamień do pizzy włóż do zimnego piekarnika i
              rozgrzej go 230°C z funkcją termoobiegu. Kamień nagrzewa się około
              30 minut. Jeśli nie macie termoobiegu włączcie pieczenie góra i
              dół i dajcie maksymalną temperaturę.
            </p>
            <br></br>
            <p>
              <b>3.</b> Wyrośnięte ciasto wyrób jeszcze raz, następnie podziel
              na 2 równe części. Każdą część rozciągnij na kształt koła średnicy
              30-35 cm, można to zrobić ręcznie lub za pomocą wałka. Do
              wykonania pizzy użyliśmy stolnicy również wykonanej z granitu.
              Dzięki temu, że jest wykonana właśnie z granitu jest zimna, ale
              doskonale wyrabia się na niej ciasto.
            </p>
            <br></br>
            <p>
              <b>4.</b> W niewielkim rondelku rozgrzej oliwę, następnie lekko
              podsmaż drobno posiekany czosnek. Dodaj pomidory z puszki, dopraw
              solą, pieprzem i oregano. Gotuj na małym ogniu ok. 10 minut. Na
              koniec zmiksuj sos blenderem. Spody posmaruj sosem pozostawiając
              czyste brzegi. Następnie posyp po całej powierzchni porwanym serem
              mozzarella.
            </p>
            <br></br>
            <p>
              <b>5.</b> Pizzę piecz 5-8 minut, aż rant ciasta mocno się
              zarumieni. Po wyjęciu z pieca połóż plasterki szynki
              dojrzewającej, połówki pomidorków, posyp liśćmi rukoli.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
