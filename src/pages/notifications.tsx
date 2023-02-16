import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Notifications() {
  return (
    <DashboardLayout title="Notifications" crumbs={['Home', 'Manage', 'Notifications']}>
        <div className="bg-white p-6"></div>
    </DashboardLayout>
  );
}
