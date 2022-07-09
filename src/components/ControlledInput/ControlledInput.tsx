import React, {ChangeEvent, useState} from 'react';

export function ControlledInput() {
    const [parentValue, setParentValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={parentValue}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export function ControlledCheckbox() {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input
                type={'checkbox'}
                checked={parentValue}
                onChange={onChangeHandler}/>
        </div>
    );
}

export function ControlledSelect() {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <select
                value={parentValue}
                onChange={onChangeHandler}
            >
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Bryansk</option>
            </select>
        </div>
    );
}
