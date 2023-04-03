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
              typowe danie typu fast food, kanapka (sandwich) z kotletem z mięsa
              wołowego (patty). Porcja mięsa mielonego uformowana jest w płaski,
              okrągły placek, następnie usmażona lub upieczona bez panierki na
              ruszcie (grillu). Gotowy kotlet bywa zwykle umieszczany między
              dwoma kawałkami lekko przypieczonej, poprzecznie przeciętej bułki
              (co pozwala go jeść trzymając w dłoni, bez pomocy sztućców), oraz
              ugarnirowany dodatkami takimi jak sałata, pomidor, ketchup,
              majonez, ogórek konserwowy. W języku polskim słowo „hamburger”
              oznaczać może także sam, niepanierowany kotlet z mięsa mielonego.
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
              <b>1.</b> Potrzebujesz kilogram (do 1200 gramów) wołowiny. Polecam
              łączyć ze sobą kilka rodzajów mięsa. Tym razem użyłem: 350 gramów
              antrykotu ; około 350 gramów pręgi wołowej; niecałe 350 gramów
              łaty wołowej. Całe mięso zmieliłem w maszynce na średnich oczkach.
              Mięso można też mielić na dużych oczkach, ale nie polecam wówczas
              dodawać do niego siekanej cebuli.
            </p>
            <br></br>
            <p>
              <b>2.</b> Średnią lub małą cebulę obierz i bardzo drobno
              poszatkuj. Dodaj ją do miski ze zmielonym mięsem. Wbij też jajko i
              dodaj dwie płaskie łyżeczki soli oraz płaską łyżeczkę pieprzu.
              Zacznij wyrabiać masę mięsną pod kotlety na burgery. Ja mieszam
              masę dłońmi, ponieważ tak jest mi najwygodniej i widzę oraz czuję,
              czy masa jest dokładnie wymieszana. Masę mięsną mieszam tak przez
              przynajmniej pięć minut, aż będzie idealnie jednolita.
            </p>
            <br></br>
            <p>
              <b>3.</b> Masę mięsną podziel na 6 kawałków takiej samej
              wielkości. Uformuj z nich duże kule. Rozpłaszcz je na kotlety
              grubości do 2 cm (kotlety kurczą się podczas smażenia, więc niech
              będą dość szerokie). Mięso odpowiednio tłuste będzie idealnie
              soczyste, nie ma zatem potrzeby dodawania tłuszczu na
              patelnię/grill. Kotlety smaż na dobrze nagrzanej patelni
              (najlepiej grillowej) nie dłużej niż po trzy minuty na stronę.
              Podczas smażenia ustaw średnią lub wyższą moc palnika, by nie
              przypiec za mocno mięsa. Kotletów nie ruszamy, aż do momentu
              przewrócenia ich na drugą stronę. Ja swoje kotlety pod burgery
              szykowałem na grillu elektrycznym. Czas smażenia/grillowania
              podany przeze mnie jest czasem orientacyjnym. Polecam cały czas
              kontrolować stopień wypieczenia kotletów.
            </p>
            <br></br>
            <p>
              <b>4.</b> Teraz wystarczy już tylko złożyć burgery. Bułki do
              burgerów przekrój na pół i podpiecz kilka minut w piekarniku lub
              na grillu. Bardzo często na lekko natłuszczonej patelni kładę
              plasterek żółtego sera lub mozzarelli. Gdy ser zacznie się topić,
              kładę na niego dolną połówkę bułki (wewnętrzną stroną do patelni),
              lekko kręcę bułką np. zgodnie ze wskazówkami zegara i podnoszę. Na
              bułce zostaje mi przyklejony, roztopiony ser. Na tak przygotowany
              dół bułki kładę gruby plasterek dużego pomidora a następnie sałatę
              lodową i plasterki ogórków. Mogą to być ogórki kiszone lub
              konserwowe, albo i takie i takie. Dalej idzie soczysty, gorący
              kotlet wołowy a następnie ser mozzarella lub ser żółty oraz rukola
              i cebula. Na sam koniec jeszcze ulubiony sos (czosnkowy, siedem
              wysp, sos tatarski.. czy też sam majonez) oraz druga połówka
              bułki, którą również można od spodu podpiec samą lub z serem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
