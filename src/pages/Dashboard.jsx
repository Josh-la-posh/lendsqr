import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Header />
      </div>
      <div className="dashboard__body">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}