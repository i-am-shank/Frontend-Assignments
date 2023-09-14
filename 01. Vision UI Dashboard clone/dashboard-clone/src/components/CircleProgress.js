import "./CircleProgress.css";

export default function CircleProgress() {
    return (
        <div className="circle-progress-wrapper">
            <div className="circle-progress">
                <div className="outer">
                    <div className="inner">
                        <div className="circle-text">
                            <div className="circle-para">Safety</div>
                            <div className="circle-header">9.3</div>
                            <div className="circle-para">Total Score</div>
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
                                stop-color="rgba(0, 255, 11, 0.01)"
                                opacity={100}
                            />
                            <stop
                                offset="100%"
                                stop-color="rgba(0, 255, 11, 0.8)"
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
