import CircleProgress2 from "../components/CircleProgress2";
import "./SatisfactionRate.css";

export default function SatisfactionRate() {
    return (
        <div className="satisfaction-rate-wrapper">
            <div className="satisfaction-rate">
                <div className="sr-top">
                    <div className="sr-title">Satisfaction Rate</div>
                    <div className="sr-subtitle">From all projects</div>
                </div>
                <div className="sr-content">
                    <div className="sr-graph-wrapper">
                        <div className="sr-graph">
                            <CircleProgress2 />
                        </div>
                    </div>
                    <div className="sr-bottom-wrapper">
                        <div className="sr-bottom">
                            <div className="sr-bottom-sides">0%</div>
                            <div className="sr-bottom-mid">
                                <div className="sr-bottom-percent">95%</div>
                                <div className="sr-bottom-para">
                                    Based on likes
                                </div>
                            </div>
                            <div className="sr-bottom-sides">100%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
