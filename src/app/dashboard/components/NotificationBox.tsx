



const NotificationBox = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-3 text-sm text-gray-700">
        <li>✅ Task completed: API Integration</li>
        <li>🔔 New message from Jane</li>
        <li>📢 System maintenance at 2 AM</li>
        <li>📥 New user registration: Alex</li>
      </ul>
    </section>
  );
};

export default NotificationBox;
