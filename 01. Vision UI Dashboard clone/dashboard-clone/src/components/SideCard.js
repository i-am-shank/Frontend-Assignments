import "./SideCard.css";

// Material UI icons =========================
import StarIcon from "@mui/icons-material/Star";

export default function SideCard() {
    return (
        <div className="side-card">
            <div className="side-card-icon">
                <StarIcon sx={{ color: "skyblue" }} className="relative" />
            </div>
            <div className="side-card-text">
                <div className="side-card-title">Need help?</div>
                <div className="side-card-subtitle">Please check our docs</div>
            </div>
            <div className="side-card-btn">DOCUMENTATION</div>
        </div>
    );
}
