import React, { useEffect, useState } from "react";
import { User } from "../Auth/User";
import UserItem from "../Auth/UserItem";
import * as userService from "../Auth/UserService";
import { useParams } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState<User[]>([]);

  const params = useParams();

  const loadUser = async (id: string) => {
    const res = await userService.getUserById(id);
    setUser(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    if (params.id) loadUser(params.id);
  }, []);

  return (
    
    <div className="row">
      <div className="col-auto p-4 text-center">
        <div className="card card-body">
          {user.map((user) => {
            return (
              <h2 className="card-title" key={user.id}>
                {user.name} {user.lastName}
              </h2> 
            );
          })}
        </div>
        <div className="card card-body">
          {user.map((user) => {
            return <h2 className="text-primary" key={user.id}>{user.position}</h2>;
          })}
        </div>
      </div>

      {/* {user.map((user) => {
        return <UserItem user={user} key={user.id} />;
      })} */}
    </div>
  );
};

export default Home;
