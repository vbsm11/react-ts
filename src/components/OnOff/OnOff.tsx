import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    onClick: (isOn: boolean) => void
    isOn: boolean
}

export function OnOff(props:OnOffPropsType) {

    const onClickHandler = () => {
        props.onClick(!props.isOn)
    }

    return (
      <div className={s.onoff}>
          <span onClick={onClickHandler}
              className={`${s.on} ${props.isOn && s.green}`}>
                    on
          </span>
          <span onClick={onClickHandler}
              className={`${s.off} ${!props.isOn && s.red}`}>
                    off
          </span>
          <span className={`${s.lamp} ${props.isOn && s.green} ${!props.isOn && s.red}`}> </span>
      </div>
    );
}
