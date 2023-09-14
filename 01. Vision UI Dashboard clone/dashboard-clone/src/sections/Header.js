import "./Header.css";

// Icons =======================
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="left-header">
                    <div className="left-header-top">
                        <span className="home-icon">
                            <HomeIcon fontSize="small" sx={{ color: "gray" }} />
                        </span>
                        <span> / &nbsp; Dashboard</span>
                    </div>
                    <h3 className="left-header-bottom">Dashboard</h3>
                </div>

                <div className="right-header">
                    <div className="input-box">
                        <span className="search-icon-div">
                            <SearchIcon fontSize="small" />
                        </span>
                        <input
                            placeholder="Type here..."
                            className="search-bar"
                        />
                    </div>
                    <div className="right-header-icons">
                        <AccountCircleIcon fontSize="small" />
                        <h4 className="sign-in">Sign in</h4>
                        <span className="menu-large">
                            <MenuIcon fontSize="small" />
                        </span>
                        <span className="menu-small">
                            <MenuOpenIcon fontSize="small" />
                        </span>
                        <span className="setting-icon">
                            <SettingsIcon fontSize="small" />
                        </span>
                        <NotificationsIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
}
