import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const userDb = {
    id: "John Mark",
    name: "John Mark Caya",
    section: "BSIT - 3A",
    email: "Caya222@gmail.com",
    hobbies: ["Eabab", "MILF", "Ghosto Kita"],
  };

  // /profile/John Mark/hobbies
  if (slug[1] === "hobbies") {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
        <ul className="list-disc pl-6">
          {userDb.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }

  // validation
  if (slug[0] !== userDb.id) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{userDb.name}</h1>
      <h2 className="text-muted-foreground">{userDb.section}</h2>
      <p className="mb-4">Email: {userDb.email}</p>

      <Link href={`/profile/${userDb.id}/hobbies`}>
        <Button>View Hobbies</Button>
      </Link>
    </div>
  );
}
