import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAcccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false); // hook

    return (
        <div className="App">
            <UncontrolledOnOff/>
            <OnOff
                onClick={setOn}
                isOn={on}
            />

            <UncontrolledAccordion
                titleValue={'Menu'}
            />

            <Accordion
                titleValue={'Menu'} onClick={setAcccordionCollapsed} collapsed={accordionCollapsed}
            />

            <UncontrolledRating/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
