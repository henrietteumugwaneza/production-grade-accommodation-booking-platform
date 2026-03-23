import MainLayout from "../layouts/MainLayout";

function Login() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <button className="w-full bg-[color:var(--color-primary)] text-white py-2 rounded-lg">
          Login
        </button>

      </div>
    </MainLayout>
  );
}

export default Login;