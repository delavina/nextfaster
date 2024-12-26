export default function Page() {
  return (
    <main className="min-h-screen p-4">
      <div className="mx-auto flex max-w-md flex-col gap-4">
        <h1 className="font-futura text-2xl text-green-800">ORDER HISTORY</h1>
        <p className="font-semibold text-green-800">
          Log in to view order history
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-black p-2 pr-16 outline-none"
          disabled
        />
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-black p-2 pr-16 outline-none"
            disabled
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600">
            show
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div className="flex flex-row items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="stay-logged-in"
              className="border"
              disabled
            />
            <label htmlFor="stay-logged-in" className="text-sm">
              Stay logged in
            </label>
          </div>
          <div className="text-sm underline">Reset Password</div>
        </div>
        <div className="w-full rounded-sm bg-green-800 p-2 text-center font-bold text-white hover:bg-green-800">
          Log in
        </div>
        <div className="w-full rounded-sm border border-green-800 p-2 text-center font-bold text-green-800">
          Create login
        </div>
      </div>
    </main>
  );
}
