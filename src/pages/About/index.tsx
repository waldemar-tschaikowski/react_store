import useAuth from "../../hooks/useAuth";

export default function About() {
  const { user } = useAuth();
  return <div>Dear {user?.name}! Our site can...</div>;
}
