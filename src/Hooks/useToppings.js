import { useState } from 'react';
import { getDefaultNormalizer } from '@testing-library/react';

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || getDefaultTopping());
    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    }

    return {
        checkTopping,
        toppings
    }
}

const toppingsList = [
    "Egg",
    "Bamboo shoots",
    "Corn",
    "Nori (Seaweed)",
    "Cheese",
    "Fish cakes",
    "Sriracha",
    "Kimchi",
    "Green Onion",
    "Garlic Oil",
    "Bean Sprouts",
]

function getDefaultTopping() {
    return toppingsList.map(topping => ({
        name: topping,
        check: false
    }));
}