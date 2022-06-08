import React, {useState} from "react";
import s from "./OnOff.module.css"

// type OnOffPropsType = {
//     isOn: boolean;
// }

export function OnOff(/*props:OnOffPropsType*/) {

    let [on, setOn] = useState(false); // hook

    return (
      <div className={s.onoff}>
          <span onClick={ () => { setOn(true) } }
              className={`${s.on} ${on && s.green}`}>
                    on
          </span>
          <span onClick={ () => { setOn(false) } }
              className={`${s.off} ${!on && s.red}`}>
                    off
          </span>
          <span className={`${s.lamp} ${on && s.green} ${!on && s.red}`}> </span>
      </div>
    );
}
