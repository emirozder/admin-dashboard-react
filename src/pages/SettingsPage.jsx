import PageHeaderTitle from "../components/PageTitleHeader";
import ConnectedAccountsSection from "../components/SettingsPage/ConnectedAccountsSection";
import DangerZoneSection from "../components/SettingsPage/DangerZoneSection";
import NotificationsSection from "../components/SettingsPage/NotificationsSection";
import ProfileSection from "../components/SettingsPage/ProfileSection";
import SecuritySection from "../components/SettingsPage/SecuritySection";

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
