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
              potrawa japońska złożona z gotowanego ryżu zaprawionego octem
              ryżowym (su) oraz różnych dodatków w postaci, przeważnie surowych:
              owoców morza, wodorostów nori, kawałków ryb, warzyw, grzybów, a
              także omletu japońskiego (tamago-yaki), tofu, ziarna sezamowego
              (goma). Ze względu na bardzo krótki termin przydatności do
              spożycia, w restauracjach japońskich jest przygotowywana po
              dokonaniu zamówienia.
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
              <b>1.</b> Ryż ugotować zgodnie z instrukcją na opakowaniu.
              Przygotować zaprawę do ryżu. W tym celu należy wymieszać 2 łyżki
              octu ryżowego z 2 łyżeczkami cukru i 1/2 łyżeczką soli. Zaprawą
              polać ugotowany ryż i dokładnie wymieszać. Ryż studzić pod
              przykryciem.
            </p>
            <br></br>
            <p>
              <b>2.</b> Warzywa pokroić wzdłuż w cienkie paski. To samo robimy z
              awokado i łososiem.
            </p>
            <br></br>
            <p>
              <b>3.</b> Rozkładamy matę do sushi. Na macie układamy listek nori,
              błyszczącą stroną do dołu. Do małej miseczki wlewamy zimnej wody i
              dodajemy łyżkę octu ryżowego. Woda będzie nam służyła do zwilżenia
              rąk, by łatwiej rozprowadzało się ryż. Zwilżamy dłoń i
              rozprowadzamy ostudzony ryż na listku nori. Powinien być w całości
              pokryty z wyjątkiem wąskiego paska od góry.
            </p>
            <br></br>
            <p>
              <b>4.</b>Na wyłożony ryż układamy nasze ulubione dodatki.
              Spokojnie mogą wystawać, obetnie się je później. Zwijamy
              delikatnie naszą rolkę.
            </p>
            <br></br>
            <p>
              <b>5.</b> Gotową rolkę kroimy na mniejsze kawałki. Przed podaniem
              sushi trzymamy w lodówce. Domowe sushi podajemy z wasabi, sosem
              sojowym, marynowanym imbirem i innymi ulubionymi dodatkami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
