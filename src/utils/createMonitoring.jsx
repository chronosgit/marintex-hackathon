import axios from "axios";
import refreshToken from "./refreshToken";
import baseUrl from "src/db/baseUrl";

const createMonitoring = async (
    fuel = 0, solarBattery = 0, 
    electricity = 0, ship,
    finallyCallback = () => {}, 
    successCallback = () => {}
) => {
    const username = localStorage.getItem("username");

    const res = await refreshToken(username)
    .then(async () => {
        const token = localStorage.getItem("access-token");
        
        const res = await axios.post(
            `${baseUrl}/api/v1/monitorings/createMonitor`,
            {
                fuel: fuel,
                solarBattery: solarBattery,
                electricity: electricity,
                ship: ship
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        )
        .then(response => {
            console.log(response);

            finallyCallback();
            successCallback();

            return response;
        })
        .catch(error => {
            finallyCallback();

            console.error(error);
        });

        return res;
    })
    .catch(error => {
        console.error(error);
    });

    return res;
};

export default createMonitoring;