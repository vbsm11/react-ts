import React from 'react';

type UserType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: UserType[]
    onClickHandler: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    const onClickHandler = () => {
        props.onClick(!props.collapsed);
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
            {!props.collapsed && <AccordionBody items={props.items} onClickHandler={props.onClickHandler}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>--- {props.title} ---</h3>
    )
}

type AccordionBodyPropsType = {
    items: UserType[]
    onClickHandler: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
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

export default Accordion;