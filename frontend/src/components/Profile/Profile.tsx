import React, { useEffect, useState } from "react";
import { User } from "../Auth/User";
import UserItem from "../Auth/UserItem";
import * as userService from "../Auth/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./UserProfile.css";

import mainBanner from "../../img/main-banner.jpg";

const Profile = () => {
  const [user, setUser] = useState<User[]>([]);

  const navigate = useNavigate();

  const loadUser = async () => {
    const res = await userService.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const deleteUser = async (id: string) => {
    await userService.deleteUser(id);
    toast.error("Perfil eliminado");
    return navigate("/");
  };

  return (
    <div className="row p-2">
      <div className="col-auto text-center offset-md-4 p-2">
        <div className="d-flex justify-content-between p-2">
          <div className="card card-body p-2">
            Profile
            {user.map((user) => {
              return <UserItem user={user} key={user.id} />;
            })}
            <button
              className="user-edit btn btn-info p-2 m-2"
              onClick={() =>
                navigate(
                  `/edit/profile/${user.map((user) => {
                    return user.id;
                  })}`
                )
              }
            >
              Editar perfíl
            </button>
            <button
              className="user-delete btn btn-danger m-2 p-2"
              onClick={() =>
                deleteUser(
                  `${user.map((user) => {
                    return user.id;
                  })}`
                )
              }
            >
              Eliminar perfíl
            </button>
          </div>

          <div className="card card-body">
            My designs
            <div className="overflow">
              <img
                src={mainBanner}
                alt="Main Banner"
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
