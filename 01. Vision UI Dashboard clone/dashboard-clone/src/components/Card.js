import "./Card.css";

export default function Card({ text, num, percent, icon, isPositive }) {
    // Conditionally applying tailwind CSS class.
    var textColor = "text-green-500";
    if (isPositive === false) {
        textColor = "text-red-500";
    }

    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="card-left">
                    <div className="card-text">{text}</div>
                    <div className="card-data">
                        <div className="num">{num}</div>
                        <div className={`percent ${textColor}`}>{percent}</div>
                    </div>
                </div>
                <div className="card-right">{icon}</div>
            </div>
        </div>
    );
}
