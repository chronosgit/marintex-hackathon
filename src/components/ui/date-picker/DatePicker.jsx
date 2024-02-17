import { Box, Tooltip, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({date, min, setDate, title}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "baseline",
                gap: "0.5rem"
            }}
        >
            <Tooltip title="Start of the monitoring">
                <Typography
                    sx={{
                        fontSize: "0.8rem",
                        opacity: "0.8",
                        textTransform: "uppercase",
                        cursor: "pointer"
                    }}
                >
                    {title}
                </Typography>
            </Tooltip>
            <DatePicker 
                selected={date} 
                minDate={min}
                onChange={(date) => setDate(date)} 
            />
        </Box>
    )
};

export default MyDatePicker;