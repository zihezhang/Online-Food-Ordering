export const foodItems = [
    {
        name: 'Liberty Noodle',
        img: '/img/Liberty-Noodle-1.jpg',
        section: 'Section 1'
    },
    {
        name: 'Kanpai Snack Bar',
        img: '/img/Kanpai-Snack-Bar-1.jpg',
        section: 'Section 1'
    },
    {
        name: 'Yatai Japanese Bar',
        img: '/img/Yatai-Japanese-Street-Food-1.jpg',
        section: 'Section 1'
    },
    {
        name: 'Liberty Noodle 2',
        img: '/img/Liberty-Noodle-1.jpg',
        section: 'Section 2'
    },
    {
        name: 'Kanpai Snack Bar 2',
        img: '/img/Kanpai-Snack-Bar-2.jpg',
        section: 'Section 2'
    },
    {
        name: 'Yatai Japanese Bar 2',
        img: '/img/Yatai-Japanese-Street-Food-2.jpg',
        section: 'Section 2'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
    
}, {})