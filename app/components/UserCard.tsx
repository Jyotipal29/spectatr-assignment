interface UserCardProps {
  name: string;
  username: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, username, email }) => {
  return (
    <div className="p-4 border  flex  flex-col  items-center rounded-lg shadow-lg  transform transition-transform duration-300 ease-in-out hover:scale-105">
      <img src="/user-user.webp" className="max-w-[200px]" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>@{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
