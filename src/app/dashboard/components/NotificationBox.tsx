"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NotificationBox = () => {
  const searchParams = useSearchParams();
  const isArchive = searchParams.get("view") === "archive";

  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        {isArchive ? "Archived Notifications" : "Notifications"}
      </h2>
      <ul className="space-y-3 text-sm text-gray-700 mb-4">
        {isArchive ? (
          <>
            <li>🗃️ Task archived: Old Deployment Issue</li>
            <li>🗃️ System reboot notification</li>
            <li>🗃️ User left: Steve</li>
          </>
        ) : (
          <>
            <li>✅ Task completed: API Integration</li>
            <li>🔔 New message from Jane</li>
            <li>📢 System maintenance at 2 AM</li>
            <li>📥 New user registration: Alex</li>
          </>
        )}
      </ul>

      <Link
        href={
          isArchive
            ? "/dashboard" // go back to default
            : "/dashboard?view=archive" // show archive
        }
        className="text-blue-600 text-sm hover:underline"
      >
        {isArchive ? "← Back to Notifications" : "📂 View Archived Notifications"}
      </Link>
    </section>
  );
};

export default NotificationBox;
