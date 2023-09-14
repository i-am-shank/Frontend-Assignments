import "./CircleProgress2.css";

import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function CircleProgress2() {
    return (
        <div className="circle-progress-wrapper">
            <div className="circle-progress">
                <div className="outer">
                    <div className="inner">
                        <div className="circle-text2 relative">
                            <EmojiEmotionsIcon
                                className="relative"
                                fontSize="large"
                            />
                        </div>
                    </div>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                >
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop
                                offset="5%"
                                stop-color="rgba(0, 110, 212, 0.01)"
                                opacity={100}
                            />
                            <stop
                                offset="100%"
                                stop-color="rgba(0, 110, 212, 0.8)"
                                opacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
            </div>
        </div>
    );
}
