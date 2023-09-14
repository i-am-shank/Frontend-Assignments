import "./Intro.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Intro() {
    return (
        <div className="Intro-wrapper">
            <div className="Intro">
                <div className="Intro-content">
                    <div className="Intro-text">
                        <p className="Intro-top">Welcome back,</p>
                        <h2 className="Intro-heading">Mark Johnson</h2>
                        <p className="Intro-para">
                            <p className="line1">Glad to see you again!</p>
                            <p className="line2">Ask me anything.</p>
                        </p>
                    </div>
                    <div className="Intro-btn">
                        <span className="Intro-btn-text">Tap to record</span>
                        <span className="Intro-btn-icon">
                            <ArrowForwardIcon fontSize="smaller" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
