import useUsers from "@/hooks/useUsers";
import Avatar from "./Avatar";
import Link from "next/link";

const FollowBar = () => {
  const { users = [] } = useUsers();

  return (
    <div className="relative hidden px-6 lg:block">
      <div className="sticky top-8 z-20 rounded-xl bg-lightPrimary p-4 dark:bg-darkSecondary">
        <h2 className="text-xl font-semibold">Who to follow</h2>
        <div className="mt-4 flex flex-col gap-6">
          {users.map((user: any) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div key={user.id} className="flex flex-row gap-4">
                <Avatar userId={user.id} />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold ">{user?.name}</p>
                  <p className="text-sm text-neutral-400">@{user?.username}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
