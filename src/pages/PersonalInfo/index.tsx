import useProfile from "./useProfile";

export default function PersonalInfo() {
  const { user } = useProfile();

  if (!user) return <div>Please login to see your profile</div>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <img src={user?.avatar} alt="avatar" />
      <p>{user?.role}</p>
    </div>
  );
}
