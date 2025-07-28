

import React from "react";

const ContactList = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Contact List</h2>
      <ul className="space-y-3">
        <li className="flex justify-between">
          <span>John Doe</span>
          <span className="text-sm text-gray-500">john@example.com</span>
        </li>
        <li className="flex justify-between">
          <span>Jane Smith</span>
          <span className="text-sm text-gray-500">jane@example.com</span>
        </li>
        <li className="flex justify-between">
          <span>Michael Brown</span>
          <span className="text-sm text-gray-500">michael@example.com</span>
        </li>
      </ul>
    </section>
  );
};

export default ContactList;