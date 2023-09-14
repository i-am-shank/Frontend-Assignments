import "./Sidebar.css";

// Material UI Icons =========================
import LogoDevIcon from "@mui/icons-material/LogoDev";

import HouseIcon from "@mui/icons-material/House";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BuildIcon from "@mui/icons-material/Build";

import Person2Icon from "@mui/icons-material/Person2";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SideCard from "../components/SideCard";

export default function Sidebar() {
    return (
        <div className="side-bar-wrapper">
            <div className="side-bar">
                <div className="side-top">
                    <div className="side-top-content">
                        <div className="side-logo">
                            <LogoDevIcon
                                fontSize="large"
                                className="dev-icon relative"
                            />
                        </div>
                        <span className="side-header">Vision UI Free</span>
                    </div>
                    <div className="side-top-border"></div>
                </div>
                <div className="side-top-list">
                    <div className="side-top-item active-item">
                        <div className="side-top-active-item-icon">
                            <HouseIcon fontSize="small" className="relative" />
                        </div>
                        <div className="side-top-item-text active-text">
                            Dashboard
                        </div>
                    </div>
                    <div className="side-top-item">
                        <div className="side-top-item-icon">
                            <BarChartIcon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        </div>
                        <div className="side-top-item-text">Tables</div>
                    </div>
                    <div className="side-top-item">
                        <div className="side-top-item-icon">
                            <AccountBalanceWalletIcon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        </div>
                        <div className="side-top-item-text">Billing</div>
                    </div>
                    <div className="side-top-item">
                        <div className="side-top-item-icon">
                            <BuildIcon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        </div>
                        <div className="side-top-item-text">RTL</div>
                    </div>
                </div>
                <div className="side-mid-text">Account Pages</div>
                <div className="side-bottom-list">
                    <div className="side-top-item">
                        <div className="side-top-item-icon">
                            <Person2Icon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        </div>
                        <div className="side-top-item-text">Profile</div>
                    </div>
                    <div className="side-top-item">
                        <div className="side-top-item-icon">
                            <ContactPageIcon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        </div>
                        <div className="side-top-item-text">Sign In</div>
                    </div>
                    <div className="side-top-item">
                        <div className="side-top-item-icon">
                            <RocketLaunchIcon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        </div>
                        <div className="side-top-item-text">Sign Up</div>
                    </div>
                </div>
                <div className="side-bottom">
                    <div className="side-bottom-card">
                        <SideCard className="relative" />
                    </div>
                    <div className="side-btn">Upgrade to PRO</div>
                </div>
            </div>
        </div>
    );
}
