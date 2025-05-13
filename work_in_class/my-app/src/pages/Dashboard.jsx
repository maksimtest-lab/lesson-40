import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
    const location = useLocation();

    const isDashboard = location.pathname === "/dashboard";

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="stats" className={isActive("/dashboard/stats")}>Stats</Link>
                    </li>
                    <li>
                        <Link to="settings" className={isActive("/dashboard/settings")}>Settings</Link>
                    </li>
                </ul>
            </nav>

            {isDashboard && <p>Welcome to the dashboard!</p>}

            <Outlet />
        </div>
    );
}