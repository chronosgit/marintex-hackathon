import { Link as ReactRouterLink } from "react-router-dom";
import logo from "src/assets/images/logo.png";

const Logo = () => {

    return (
        <ReactRouterLink to="/">
            <img 
                src={logo}
                alt="logo"
                style={{
                    maxWidth: "3rem",
                    maxHeight: "3rem"
                }}
            />
        </ReactRouterLink>
    )
};

export default Logo;