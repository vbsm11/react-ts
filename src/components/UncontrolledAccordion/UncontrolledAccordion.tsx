import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle
                collapsed={collapsed}
                setCollapsed={() => setCollapsed(!collapsed)}
                title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setCollapsed()}>
            --- {props.title} ---
        </h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
