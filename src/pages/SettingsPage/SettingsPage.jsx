import PageHeaderTitle from "../../components/PageTitleHeader";
import ConnectedAccountsSection from "./_partials/ConnectedAccountsSection";
import DangerZoneSection from "./_partials/DangerZoneSection";
import NotificationsSection from "./_partials/NotificationsSection";
import ProfileSection from "./_partials/ProfileSection";
import SecuritySection from "./_partials/SecuritySection";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* PAGE TITLE */}
      <PageHeaderTitle title="Settings" />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        {/* PROFILE */}
        <ProfileSection />
        {/* NOTIFICATIONS */}
        <NotificationsSection />
        {/* SECURITY */}
        <SecuritySection />
        {/* CONNECTED ACCOUNTS */}
        <ConnectedAccountsSection />
        {/* DANGER ZONE */}
        <DangerZoneSection />
      </main>
    </div>
  );
};

export default SettingsPage;
