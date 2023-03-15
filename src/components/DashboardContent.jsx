import Card from "./Card";
import Table from "./table";

export default function DashboardContent() {
  return (
    <div className="dashboard__content">
      <div className="pageTitle">Users</div>
      <div className="cardContainer">
        <Card
          name="user"
          amount="2,453"
          icon="../../images/user-stat-icon-1.svg"
        />
        <Card
          name="active users"
          amount="2,453"
          icon="../../images/user-stat-icon-2.svg"
        />
        <Card
          name="users with loans"
          amount="12,453"
          icon="../../images/user-stat-icon-3.svg"
        />
        <Card
          name="users with savings"
          amount="102,453"
          icon="../../images/user-stat-icon-4.svg"
        />
      </div>

      <Table />
    </div>
  );
}
