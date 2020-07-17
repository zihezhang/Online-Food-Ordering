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
    filter: contrast(85%);
    border-radius: 5px;
    margin-top 3px;
    transition-property: box-shadow margin-top filter;
    transition-duration: .2s;
    box-shadow: 0px 3px 5px 0px #0000007a;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 10px 0px #0000007a;
        margin-top 0px;
        margin-bottom: 3px;
        filter: contrast(100%);

    }
`