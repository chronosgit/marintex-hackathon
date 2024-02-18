const getArythmeticArray = (value, size) => {
    let array = [];

    for(let i = 1; i <= size; i++) {
        array.push(value * i);
    }

    return array;
};

export default getArythmeticArray;