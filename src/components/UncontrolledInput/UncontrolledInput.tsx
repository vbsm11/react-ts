import React, {ChangeEvent, MouseEvent, useRef, useState} from 'react';

export function TrackValueUncontrolledInput() {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeHandler}/>
            - {value}
        </div>
    );
}

export function GetValueUncontrolledInputByButtonPress() {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>
                Save
            </button>
            - {value}
        </div>
    );
}
