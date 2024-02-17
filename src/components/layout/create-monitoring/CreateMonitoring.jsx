import { Alert, Box, Button, CircularProgress, Container, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import createMonitoring from "src/utils/createMonitoring";

const CreateMonitoring = () => {

    const [fuel, setFuel] = useState("");
    const [solarBattery, setSolarBattery] = useState("");
    const [electricity, setElectricity] = useState("");
    const [ship, setShip] = useState("");

    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);

    const onSubmit = async () => {
        try {
            setPending(true);

            const res = await createMonitoring(
                fuel, solarBattery, electricity, ship,
                () => setPending(false), () => setSuccess(true),
            );
            
            console.log(res);
        } catch(error) {
            setPending(false);

            console.error(error);
        }
    }

    return (
        <Container maxWidth="xs" sx={{py: "2rem"}}>
            <Container 
                sx={{
                    py: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "4",
                }}
            >
                <FormControl component="form" sx={{width: "100%"}}>
                    <Select
                        size="small"
                        value={ship}
                        placeholder="Ship"
                        onChange={(e) => setShip(e.target.value)}
                    >
                        <MenuItem value={10}>MIZZEN</MenuItem>
                        <MenuItem value={20}>BARGE</MenuItem>
                        <MenuItem value={30}>OAR</MenuItem>
                    </Select>

                    <TextField
                        size="small"
                        label="Fuel"
                        margin="normal"   
                        name={fuel}
                        value={fuel}
                        defaultValue={0} 
                        onChange={(e) => setFuel(e.target.value)}
                    />

                    <TextField
                        size="small"
                        label="Solar battery"
                        margin="normal"   
                        name={solarBattery}
                        value={solarBattery} 
                        defaultValue={0}
                        onChange={(e) => setSolarBattery(e.target.value)}
                    />

                    <TextField
                        size="small"
                        label="Electricity"
                        margin="normal"   
                        name={electricity}
                        value={electricity} 
                        defaultValue={0}
                        onChange={(e) => setElectricity(e.target.value)}
                    />

                    {
                    success
                        &&
                            <Alert severity="success" sx={{mx: "inline", my: "1rem"}}>
                                Success!
                            </Alert>
                    }

                    {
                    pending
                        ?
                            <Box 
                                sx={{
                                    my: "1rem",
                                    textAlign: "center",
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        :
                            <Button
                                variant="contained"
                                sx={{
                                    my: "1rem",
                                }}
                                onClick={onSubmit}
                            >
                                Continue
                            </Button>
                    }
                </FormControl>
            </Container>
        </Container>
    )
};

export default CreateMonitoring;