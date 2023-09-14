import "./HorzBar.css";

export default function HorzBar({ width }) {
    return (
        <div className="horz-bar">
            <div id="horz-bar-progress" className={width}></div>
        </div>
    );
}
