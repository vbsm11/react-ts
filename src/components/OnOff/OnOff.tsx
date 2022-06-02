import React from "react";
import s from "./OnOff.module.css"

type OnOffPropsType = {
    isOn: boolean;
}

export function OnOff(props:OnOffPropsType) {
    return (
      <div className={s.onoff}>
          <span className={`${s.on} ${props.isOn && s.green}`}>on</span>
          <span className={`${s.off} ${!props.isOn && s.red}`}>off</span>
          <span className={`${s.lamp} ${props.isOn && s.green} ${!props.isOn && s.red}`}> </span>
      </div>
    );
}
