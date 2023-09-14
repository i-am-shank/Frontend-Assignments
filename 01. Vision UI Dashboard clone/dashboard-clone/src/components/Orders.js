import "./Orders.css";

export default function Orders({ icon, title, time }) {
    return (
        <div className="Orders">
            <div className="orders-icon">{icon}</div>
            <div className="orders-text">
                <div className="orders-title">{title}</div>
                <div className="orders-time">{time}</div>
            </div>
        </div>
    );
}
