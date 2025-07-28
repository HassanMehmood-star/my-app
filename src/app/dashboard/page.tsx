// app/dashboard/page.tsx

import React from "react";
import Analytics from "./components/Analytics";
import ContactList from "./components/Contact";
import NotificationBox from "./components/NotificationBox";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          <Analytics />
          <ContactList />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <NotificationBox />
        </div>
      </div>
    </main>
  );
}
