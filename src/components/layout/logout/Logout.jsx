import { Button } from "@mui/material"; 
import useLogout from "src/hooks/useLogout";

const Logout = () => {

    const logout = useLogout();

    const onClick = () => {
        logout();
    }

    return (
        <Button variant="contained" size="small" onClick={onClick}>Logout</Button>
    )
};

export default Logout;