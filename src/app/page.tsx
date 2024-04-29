import { createUser } from "@/actions/";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold pb-24">Create User</h1>
      <form action={createUser}>
        <div className="my-4">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded p-2 border-2 border-gray-300"
          />
        </div>
        <div className="">
          <label htmlFor="email" className="">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full rounded p-2 border-2 border-gray-300"
          />
        </div>
        <div>
          <input type="file" name="image" className="w-96 p-4" />
        </div>
        <button className="bg-blue-500 text-white p-4 rounded">Submit</button>
      </form>
    </main>
  );
}
