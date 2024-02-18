import { Alert, Box, Button, CircularProgress, Container, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import MyDatePicker from "src/components/ui/date-picker/DatePicker";
import updatePost from "src/utils/updatePost";

const ForumPostEditor = ({
    id,
    title: oldTitle = "Title", amountFuel: oldFuel = 0,
    descr: oldDescr, status: oldStatus = "PUBLIC",
    start: oldStart = new Date(), 
    finish: oldFinish = new Date(new Date().setDate(new Date().getDate() + 30)),
}) => {

    const [title, setTitle] = useState(oldTitle);
    const [amountFuel, setFuel] = useState(oldFuel);
    const [descr, setDescr] = useState(oldDescr);
    const [status, setStatus] = useState(oldStatus);
    const [start, setStart] = useState(oldStart);
    const [finish, setFinish] = useState(oldFinish);

    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);

    const onSubmit = async () => {
        try {
            const res = await updatePost(
                id, title, amountFuel, 
                descr, status,
                start, finish,
                () => setPending(false),
                () => setSuccess(true),
            );
    
            return res;
        } catch(error) {
            setPending(false);

            console.error(error);
        }
    }

    return (
        <Container maxWidth="lg">
            <Box 
                sx={{
                    p: "2rem",
                    boxShadow: "4",
                }}
            >   
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        marginBottom: "1rem",
                    }}
                >
                    Update post:
                </Typography>
                
                <FormControl
                    component="form" 
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <TextField
                        size="small"
                        label="Title"   
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextField
                        size="small"
                        label="Fuel"   
                        name={amountFuel}
                        value={amountFuel}
                        onChange={(e) => setFuel(e.target.value)}
                    />

                    <TextField
                        size="small"
                        label="Description"   
                        name={descr}
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                    />

                    <Select
                        size="small"
                        value={status}
                        placeholder="Status"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="PUBLIC">PUBLIC</MenuItem>
                        <MenuItem value="PRIVATE">PRIVATE</MenuItem>
                    </Select>

                    <MyDatePicker 
                        date={start}
                        min={new Date()}
                        setDate={setStart}
                        title="Start"
                    />

                    <MyDatePicker 
                        date={finish}
                        min={start}
                        setDate={setFinish}
                        title="Finish"
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
            </Box>
        </Container>
    )
};

export default ForumPostEditor;