import "./OrdersOverview.css";

// Material UI Icons ============================
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Components ===============================
import Orders from "../components/Orders";
import { Check } from "@mui/icons-material";

export default function OrdersOverview() {
    return (
        <div className="OrdersOverview-wrapper">
            <div className="OrdersOverview">
                <div className="orders-top">
                    <h3 className="orders-heading">Orders overview</h3>
                    <p className="orders-subheading">
                        <span className="orders-subheading-icon">
                            <CheckCircleIcon
                                fontSize="small"
                                sx={{ color: "green" }}
                                className="relative"
                            />
                        </span>
                        <span className="orders-subheading-para">
                            <span className="orders-subheading-percent">
                                +30%{" "}
                            </span>
                            <span className="orders-subheading-text">
                                this month
                            </span>
                        </span>
                    </p>
                </div>

                <div className="orders-list">
                    <Orders
                        icon={
                            <NotificationsIcon
                                fontSize="small"
                                sx={{ color: "blue" }}
                                className="relative"
                            />
                        }
                        title={"$2400, Design changes"}
                        time={"22 DEC 7:20 PM"}
                    />
                    <Orders
                        icon={
                            <LocalMallIcon
                                fontSize="small"
                                sx={{ color: "red" }}
                                className="relative"
                            />
                        }
                        title={"New order #1832412"}
                        time={"21 DEC 11 PM"}
                    />
                    <Orders
                        icon={
                            <ShoppingCartIcon
                                fontSize="small"
                                sx={{ color: "skyblue" }}
                                className="relative"
                            />
                        }
                        title={"Server payments for April"}
                        time={"21 DEC 9:34 PM"}
                    />
                    <Orders
                        icon={
                            <AccountBalanceWalletIcon
                                fontSize="small"
                                sx={{ color: "yellow" }}
                                className="relative"
                            />
                        }
                        title={"New cart added for order #4395133"}
                        time={"20 DEC 2:20 AM"}
                    />
                    <Orders
                        icon={
                            <PaymentsIcon
                                fontSize="small"
                                sx={{ color: "purple" }}
                                className="relative"
                            />
                        }
                        title={"New cart added for order #4395133"}
                        time={"18 DEC 4:54 AM"}
                    />
                    <Orders
                        icon={
                            <AddShoppingCartIcon
                                fontSize="small"
                                sx={{ color: "pink" }}
                                className="relative"
                            />
                        }
                        title={"New order #9583120"}
                        time={"17 DEC"}
                    />
                </div>
            </div>
        </div>
    );
}
