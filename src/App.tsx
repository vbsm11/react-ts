import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {
    GetValueUncontrolledInputByButtonPress,
    TrackValueUncontrolledInput
} from './components/UncontrolledInput/UncontrolledInput';
import {ControlledCheckbox, ControlledInput, ControlledSelect} from './components/ControlledInput/ControlledInput';
import Select from './components/Select/Select';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAcccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false); // hook

    type ValuesType = 1 | 2 | 3;
    const [value, setValue] = useState<ValuesType>(1)

    return (
        <div className="App">
            {/*<UncontrolledOnOff
            onChange={setOn}
            /> {on.toString()}*/}

            <OnOff
                onClick={setOn}
                isOn={on}
            />

            {/*<UncontrolledAccordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*/>*/}

            <Accordion
                titleValue={'Users'}
                onClick={setAcccordionCollapsed}
                onClickHandler={(value:any) => {
                    console.log(value)}}
                collapsed={accordionCollapsed}
                items={[
                    {title:'Kolya', value: 1 },
                    {title:'Tolya', value: 2 },
                    {title:'Sanya', value: 3 },
                ]}
            />

            <Select value={value} onChange={(newValue: ValuesType) => setValue(newValue)} items={[
                {title:'Kolya', value: 1 },
                {title:'Tolya', value: 2 },
                {title:'Sanya', value: 3 },
            ]}/>

            {/*<UncontrolledRating/>*/}

            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />

            {/*<TrackValueUncontrolledInput/>*/}
            {/*<GetValueUncontrolledInputByButtonPress/>*/}

            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>

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
