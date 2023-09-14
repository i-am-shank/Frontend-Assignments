import "./App.css";

// Top sections ======================
import Header from "./sections/Header";
import TopStats from "./sections/TopStats";

// Side section ======================
import Sidebar from "./sections/Sidebar";

// Hero sections ======================
import Intro from "./sections/Intro";
import SatisfactionRate from "./sections/SatisfactionRate";
import ReferralTracking from "./sections/ReferralTracking";

// Graphs sections =======================
import SalesOverview from "./sections/SalesOverview";
import ActiveUsers from "./sections/ActiveUsers";

// List sections ======================
import Projects from "./sections/Projects";
import OrdersOverview from "./sections/OrdersOverview";

// Bottom sections ======================
import StickyFooter from "./sections/StickyFooter";
import Footer from "./sections/Footer";

function App() {
    return (
        <div className="App">
            {/* <Header />
            <TopStats />

            <Sidebar />

            <Intro />
            <SatisfactionRate />
            <ReferralTracking />

            <SalesOverview />
            <ActiveUsers /> */}

            <Projects />
            {/* <OrdersOverview />

            <StickyFooter />
            <Footer /> */}
        </div>
    );
}

export default App;
