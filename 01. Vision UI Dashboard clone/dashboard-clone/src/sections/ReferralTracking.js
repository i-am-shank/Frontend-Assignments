import CircleProgress from "../components/CircleProgress";
import "./ReferralTracking.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ReferralTracking() {
    return (
        <div className="referral-tracking-wrapper">
            <div className="referral-tracking">
                <div className="rt-top">
                    <div className="rt-title">Referral Tracking</div>
                    <div className="rt-more">
                        <MoreHorizIcon
                            className="relative"
                            sx={{ color: "skyblue" }}
                        />
                    </div>
                </div>

                <div className="rt-content">
                    <div className="rt-text">
                        <div className="rt-card">
                            <div className="rt-card-para">Invited</div>
                            <div className="rt-card-title">
                                <div>145</div>
                                <div>people</div>
                            </div>
                        </div>

                        <div className="rt-card">
                            <div className="rt-card-para">Bonus</div>
                            <div className="rt-card-title">
                                <div>1,465</div>
                            </div>
                        </div>
                    </div>

                    <div className="rt-graph-wrapper">
                        <div className="rt-graph">
                            <CircleProgress>
                                <div className="rt-graph-text"></div>
                            </CircleProgress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
