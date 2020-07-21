import {useState} from 'react';

export function useQuantity(defaultQuantity){
    const [value, setValue] = useState(defaultQuantity || 1);
    
    function onChange(e){
        //check if it's a number, and if it's not it just default sets it to 1
        if( !(+e.target.value >= 1)){
            setValue(1);
            return;
        }
        setValue(+e.target.value);
    }

    return {
        value,
        setValue,
        onChange
    };
}