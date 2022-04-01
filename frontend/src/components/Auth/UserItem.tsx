import { User } from "./User";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  return (
    <div>
      <div className="col-auto p-2 text-center">
        <div>
          {user.name} {user.lastName}
        </div>
        <div>{user.email}</div>
      </div>
    </div>
  );
};

export default UserItem;
