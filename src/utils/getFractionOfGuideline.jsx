const getFractionOfGuideline = (ship) => {
    const guideline = 40;

    let total = ship.fuel + ship.solarBattery + ship.electricity;

    return Math.round(((total / guideline * 100) + Number.EPSILON) * 100) / 100
};

export default getFractionOfGuideline;