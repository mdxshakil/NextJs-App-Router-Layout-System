import DashboardLayout from "@/components/layouts/DashboardLayout";
import RootLayout from "@/components/layouts/RootLayout";

const Dashboard = () => {
    return (
        <h1>
            Dashboard
        </h1>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
            {page}
        </DashboardLayout>
        </RootLayout>
    )
}