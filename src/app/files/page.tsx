import { getUsers } from "@/actions";
import Image from "next/image";

export default async function FilesPage() {
  const users = await getUsers();

  return (
    <div className="flex justify-center items-center w-1/2">
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <Image
            src={`/${user.filePath}`}
            alt={user.name}
            width="500"
            height="500"
          />
        </div>
      ))}
    </div>
  );
}
