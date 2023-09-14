import "./ActiveUsers.css";

// Material UI icons ======================
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuildIcon from "@mui/icons-material/Build";

// Components =======================
import UserStat from "../components/UserStat";

export default function ActiveUsers() {
    return (
        <div className="active-users-parent">
            <div className="active-users-wrapper">
                <div className="active-users">
                    <div className="active-users-graph"></div>
                    <div className="active-users-text">
                        <div className="active-users-title">Active Users</div>
                        <div className="active-users-subtitle">
                            <span className="active-users-subtitle-num">
                                (+23)
                            </span>
                            <span className="active-users-subtitle-text">
                                than last week
                            </span>
                        </div>
                    </div>
                    <div className="active-users-cards">
                        <UserStat
                            icon={
                                <AccountBalanceWalletIcon
                                    fontSize="smaller"
                                    className="relative"
                                />
                            }
                            title={"Users"}
                            num={"32,984"}
                        />
                        <UserStat
                            icon={
                                <RocketLaunchIcon
                                    fontSize="smaller"
                                    className="relative"
                                />
                            }
                            title={"Clicks"}
                            num={"2,42M"}
                        />
                        <UserStat
                            icon={
                                <ShoppingCartIcon
                                    fontSize="smaller"
                                    className="relative"
                                />
                            }
                            title={"Sales"}
                            num={"2,400$"}
                        />
                        <UserStat
                            icon={
                                <BuildIcon
                                    fontSize="smaller"
                                    className="relative"
                                />
                            }
                            title={"Items"}
                            num={"320"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
