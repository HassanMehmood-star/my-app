// ✅ No 'use client' here — it's a Server Component

export default async function Login() {
  // Simulate a delay (e.g., fetch from API or DB)
  await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds

  return (
    <>
      <h1>This is login page</h1>
    </>
  );
}
