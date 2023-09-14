import "./Projects.css";

// Material UI icons ================================
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import DrawIcon from "@mui/icons-material/Draw";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ErrorIcon from "@mui/icons-material/Error";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Project from "../components/Project";

export default function Projects() {
    return (
        <div className="projects">
            <div className="projects-top">
                <div className="projects-top-left">
                    <div className="projects-heading">Projects</div>
                    <div className="projects-subheading">
                        <span className="projects-subheading-icon">
                            <CheckCircleIcon
                                className="relative"
                                sx={{ color: "green" }}
                            />
                        </span>
                        <span className="projects-subheading-text">
                            <span className="projects-subheading-title">
                                30 done
                            </span>
                            <span className="projects-subheading-para">
                                {" "}
                                this month
                            </span>
                        </span>
                    </div>
                </div>

                <div className="projects-top-right">
                    <MoreVertIcon className="relative" />
                </div>
            </div>

            <div className="projects-content">
                <div className="projects-content-heading">
                    <span className="project-col1">COMPANIES</span>
                    <span className="project-col2">MEMBERS</span>
                    <span className="project-col3">BUDGET</span>
                    <span className="project-col4">COMPLETION</span>
                </div>

                <div className="project-main-content">
                    <Project
                        icon={
                            <DrawIcon
                                className="relative"
                                sx={{ color: "pink" }}
                            />
                        }
                        title={"Chakra Vision UI Version"}
                        budget={"$14,000"}
                        completion={60}
                    />

                    <Project
                        icon={
                            <PublishedWithChangesIcon
                                className="relative"
                                sx={{ color: "blue" }}
                            />
                        }
                        title={"Add Progress Track"}
                        budget={"$3,000"}
                        completion={10}
                    />

                    <Project
                        icon={
                            <ErrorIcon
                                className="relative"
                                sx={{ color: "yellow" }}
                            />
                        }
                        title={"Fix Platform Errors"}
                        budget={"Not set"}
                        completion={100}
                    />

                    <Project
                        icon={
                            <MobileScreenShareIcon
                                className="relative"
                                sx={{ color: "green" }}
                            />
                        }
                        title={"Launch our Mobile App"}
                        budget={"$20,500"}
                        completion={100}
                    />

                    <Project
                        icon={
                            <PriceChangeIcon
                                className="relative"
                                sx={{ color: "blueviolet" }}
                            />
                        }
                        title={"Add the New Pricing Page"}
                        budget={"$500"}
                        completion={25}
                    />

                    <Project
                        icon={
                            <ShoppingCartIcon
                                className="relative"
                                sx={{ color: "orangered" }}
                            />
                        }
                        title={"Redesign New Online Shop"}
                        budget={"$2,000"}
                        completion={40}
                    />
                </div>
            </div>
        </div>
    );
}
