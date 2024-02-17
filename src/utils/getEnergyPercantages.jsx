const getEnergyPercantages = (ships) => {
    let total = 0;
    let fuel = 0;
    let solar = 0;
    let electro = 0;
    for(let ship of ships) {
        total += ship.fuel;
        fuel += ship.fuel;

        total += ship.solarBattery;
        solar += ship.solarBattery;

        total += ship.electricity;
        electro += ship.electricity;
    }

    return [fuel / total, solar / total, electro / total];
};

export default getEnergyPercantages;