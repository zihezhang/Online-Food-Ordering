import styled from 'styled-components';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`
export const FoodLabel = styled.div`
    position: absolute;
    background-color: white;
    padding: 5px;
`

export const Food = styled.div`
    height:180px;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    background-image: ${({img}) => `url(${img}); `}
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 5px;
    box-shadow: 0px 3px 10px 0px #0000007a;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`