import React, {useState} from "react";

export function UncontrolledRating() {

    let [value, setValue] = useState(0);

    return (
        <div>
            <Star id={1} selected={ value > 0} setValue={setValue}/>
            <Star id={2} selected={ value > 1 } setValue={setValue}/>
            <Star id={3} selected={ value > 2 } setValue={setValue}/>
            <Star id={4} selected={ value > 3 } setValue={setValue}/>
            <Star id={5} selected={ value > 4 } setValue={setValue}/>
        </div>
    );
}

type StarPropsType = {
    id: number
    selected: boolean
    setValue: (value:number) => void
}

function Star(props: StarPropsType) {
    return (
    props.selected?
        <span onClick={() => {props.setValue(props.id)} }><b>star</b> </span> :
        <span onClick={() => {props.setValue(props.id)} }>star </span>
    )
}