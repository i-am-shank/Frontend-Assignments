import HorzBar from "./HorzBar";
import "./UserStat.css";

export default function UserStat({ icon, title, num }) {
    return (
        <div className="user-stat">
            <div className="user-stat-top">
                <div className="user-stat-icon">{icon}</div>
                <div className="user-stat-title">{title}</div>
            </div>
            <div className="user-stat-bottom">
                <div className="user-stat-num">{num}</div>
                <div className="user-stat-bar">
                    <HorzBar width={"w-[60%]"} />
                </div>
            </div>
        </div>
    );
}
