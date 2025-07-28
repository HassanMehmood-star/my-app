// components/Analytics.tsx

import React from "react";

const Analytics = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">Visitors: 1,200</div>
        <div className="bg-green-100 p-4 rounded-lg">Sales: $8,000</div>
        <div className="bg-yellow-100 p-4 rounded-lg">Users: 320</div>
        <div className="bg-purple-100 p-4 rounded-lg">Bounce Rate: 24%</div>
      </div>
    </section>
  );
};

export default Analytics;
