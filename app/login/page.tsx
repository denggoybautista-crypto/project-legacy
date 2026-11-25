export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-green-800 text-center">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Project Legacy
        </p>

        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </div>

      </div>
    </main>
  );
}