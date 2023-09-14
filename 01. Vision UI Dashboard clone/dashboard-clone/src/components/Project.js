import "./Project.css";

import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Project({ icon, title, budget, completion }) {
    return (
        <div className="project">
            <span className="companies">
                <span className="project-icon">{icon}</span>
                <span className="project-title">{title}</span>
            </span>

            <span className="members">
                <AccountCircle className="relative" />
            </span>
            <span className="budget">{budget}</span>
            <span className="completion">
                <span className="project-completion-progress"></span>
            </span>
        </div>
    );
}
