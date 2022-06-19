import React, {useState} from "react";
import s from "./UncontrolledOnOff.module.css"

type UncontrolledOnOffType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffType ) {

    let [on, setOn] = useState(false); // hook

    const onClickHandlerOn = () => {
        setOn(true);
        props.onChange(true);
    }

    const onClickHandlerOff = () => {
        setOn(false);
        props.onChange(false);
    }

    return (
      <div className={s.onoff}>
          <span onClick={onClickHandlerOn}
              className={`${s.on} ${on && s.green}`}>
                    on
          </span>
          <span onClick={onClickHandlerOff}
              className={`${s.off} ${!on && s.red}`}>
                    off
          </span>
          <span className={`${s.lamp} ${on && s.green} ${!on && s.red}`}> </span>
      </div>
    );
}
