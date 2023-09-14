import "./TopStats.css";

// Material UI icons ==========================
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Components =============================
import Card from "../components/Card";

export default function TopStats() {
    return (
        <div className="TopStats">
            <Card
                text={"Today's Money"}
                num={"$53,000"}
                percent={"+55%"}
                icon={<AccountBalanceWalletIcon className="relative" />}
                isPositive={true}
            />
            <Card
                text={"Today's Users"}
                num={"2,300"}
                percent={"+3%"}
                icon={<LanguageIcon className="relative" />}
                isPositive={true}
            />
            <Card
                text={"New Clients"}
                num={"+3,462"}
                percent={"-2%"}
                icon={<DescriptionIcon className="relative" />}
                isPositive={false}
            />
            <Card
                text={"Today's Sales"}
                num={"$103,430"}
                percent={"+5%"}
                icon={<ShoppingCartIcon className="relative" />}
                isPositive={true}
            />
        </div>
    );
}
