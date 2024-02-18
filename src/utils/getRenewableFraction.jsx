const getRenewableFraction = (ships) => {
    let total = 0;
    let renewable = 0;

    for(let ship of ships) {
        total += ship.fuel;
        total += ship.solarBattery;
        total += ship.electricity;

        renewable += ship.solarBattery;
        renewable += ship.electricity;
    }

    if(!total) return 0;

    return Math.round(((renewable / total * 100) + Number.EPSILON) * 100) / 100;
};

export default getRenewableFraction;