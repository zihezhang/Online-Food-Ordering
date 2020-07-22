import React from 'react';
import styled from 'styled-components';
import {FoodLabel} from '../Menu/FoodGrid';
import {pizzaRed} from '../Styles/colours';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { Choices } from './Choices';
import {  useChoice } from '../Hooks/useChoice';

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

const pricePerTopping = 0.5;

export const DialogContent = styled.div `
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;

export const DialogFooter = styled.div `
    box-shadow: 0px -2px 20px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled.div`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding 10px;
    text-align: center;
    width 200px;
    cursor: pointer;
    background-color: ${pizzaRed};
    ${({disabled}) => disabled &&
    `
        opacity: .5;
        background-color: grey;
        pointer-events: none;
    `}
`

const DialogShadow = styled.div`
    position:fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity:0.7;
    z-index:4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    background-size: cover;
    ${({img}) => (img ? `background-image: url(${img});` : `min-height: 75px;`)};
`;

const DialogBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
    top: ${({img}) => (img ? `100px` : `20px`)};
`;

export function getPrice(order) {
    return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
}

function hasToppings(food){
    return food.section === 'Section 1';
}

function FoodDialogContainer({openFood, setOpenFood, setOrders, orders}){
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);
    function close() {
        setOpenFood();
    };

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    };
    function addToOrder(){
        setOrders([...orders, order]);
        close();
    };
    return (
        <React.Fragment>
            <DialogShadow onClick={close}/>
            <Dialog> 
                <DialogBanner img = {openFood.img}>
                <DialogBannerName> {openFood.name} </DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity} />
                    {hasToppings(openFood) && (
                        <React.Fragment>
                            <h3> Would you like toppings? </h3>
                            <Toppings {...toppings}/>
                        </React.Fragment>)}
                    {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio}/>}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick = {addToOrder} disabled = {openFood.choices && !choiceRadio.value}>
                        Add to order: {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </React.Fragment>
    );
}

export function FoodDialog(props){
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props}/>;
}