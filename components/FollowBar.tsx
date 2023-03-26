import useUsers from "@/hooks/useUsers";
import Avatar from "./Avatar";

const FollowBar = () => {
  const { users = [] } = useUsers();
  console.log("🚀 ~ file: FollowBar.tsx:6 ~ FollowBar ~ users:", users);

  return (
    <div className="hidden px-6 py-4 lg:block">
      <div className="rounded-xl bg-lightPrimary p-4 dark:bg-darkSecondary">
        <h2 className="text-xl font-semibold">Who to follow</h2>
        <div className="mt-4 flex flex-col gap-6">
          {users.map((user: any) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id.toString()} />
              <div className="flex flex-col">
                <p className="text-sm font-semibold ">{user?.name}</p>
                <p className="text-sm text-neutral-400">@{user?.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
