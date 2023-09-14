import "./Footer.css";

// Material UI icons ==========================
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-left">
                    <span className="footer-left-text1">@2021, Made with</span>
                    <span className="footer-left-icon">
                        <FavoriteIcon
                            fontSize="smaller"
                            sx={{ color: "red" }}
                            className="relative"
                        />
                    </span>
                    <span className="footer-left-text2">
                        by Simmmple & Creative Tim for a better web
                    </span>
                </div>
                <div className="footer-right">
                    <span>Marketplace</span>
                    <span>Blog</span>
                    <span>License</span>
                </div>
            </div>
        </div>
    );
}
