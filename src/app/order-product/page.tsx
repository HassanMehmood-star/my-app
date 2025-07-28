'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Order() {
  const router = useRouter();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted with:", input);
    router.push('/');
  };

  return (
    <>
      <h1>This is order page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit & Go Home
        </button>
      </form>
    </>
  );
}
