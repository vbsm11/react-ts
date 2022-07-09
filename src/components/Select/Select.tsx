import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onCollapsedHandler = () => {
      setCollapsed(!collapsed);
    }

    return (
        <div>
            <div>
                {props.items
                    .map(i => i.value === props.value
                        ? <h3 onClick={onCollapsedHandler}>{i.title} +</h3>
                        : ''
                    )}
            </div>
            {collapsed && <SelectBody items={props.items} onClickHandler={props.onChange}/>}
        </div>
    );
}



type SelectBodyPropsType = {
    items: ItemType[]
    onClickHandler: (value: any) => void
}

function SelectBody(props: SelectBodyPropsType) {
    return (
        <ul>
            {props.items
                .map((i, index) =>
                    <li key={index} onClick={() => {props.onClickHandler(i.value)}}>
                        {i.title}
                    </li>
                )}
        </ul>
    )
}

export default Select;