import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const inputStyle = {
    marginLeft: 'auto',
    marginRight: 'auto'
}

const Creator = () => {

    return (
        <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                marginTop: "100px",
                minHeight: '300px',
                maxWidth: '50%',


            }}
        >
            <Box sx={{width: '80%', display: 'flex', marginTop: '40px'}}>
                <TextField sx={inputStyle} label="Ship alias" focused size="small" />
                <TextField sx={inputStyle} label="Ship alias" focused size="small" />
            </Box>
            <Box sx={{width: '80%', display: 'flex', marginTop: '40px'}}>
                <TextField sx={inputStyle} label="Ship alias" focused size="small" />
                <TextField sx={inputStyle} label="Ship alias" focused size="small" />
            </Box>
            <TextField
                sx={{marginTop: '40px', width: '80%'}}
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
            />
        </Box>
        </>
    )
};

export default Creator;