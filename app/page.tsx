import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">

        <h1 className="text-5xl font-bold text-green-800">
          PROJECT LEGACY
        </h1>

        <p className="mt-4 text-xl text-gray-700">
          Student Assistant Duty Monitoring System
        </p>

        <p className="mt-2 text-gray-500">
          De La Salle University – Dasmariñas
        </p>

        <p className="text-gray-500">
          Scholarship Office
        </p>

        <p className="mt-8 italic text-gray-600">
          "Empowering Student Service Through Technology"
        </p>

        <Link
  href="/login"
  className="mt-10 px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold transition"
>
  Login
</Link>

        <p className="mt-10 text-sm text-gray-400">
          Version 0.1.0
        </p>

      </div>
    </main>
  );
}