import React, { useEffect, useState } from 'react'
import { User } from './User';
import UserItem from './UserItem';
import * as userService from './UserService'

const SignUp = () => {
  const [user, setUser] = useState<User[]>([]);

  const loadUser = async () => {
    const res = await userService.getUser()
    setUser(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      {user.map((user) => {
        return <UserItem user={user} key={user.id}/>
      })}
    </div>
  );
}

export default SignUp