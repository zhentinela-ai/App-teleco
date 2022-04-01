import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "./User";
import * as userService from "./UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthFormIn = () => {
  const navigate = useNavigate();

  const initialState = { email: "", password: "" };

  const [user, setUser] = useState<User>(initialState);

  const getLastUser = async () => {
    return await userService.getLastUser();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {    
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await userService.getLastUser();
    toast.success("Bienvenido Nuevamente");
    const res = getLastUser();
    const id = (await res).data[0].id;
    navigate(`/api/home/${id}`);
  };

  return (
    <div className="row">
      <div className="col-auto text-center p-3 offset-mb-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="p-2 m-2">
              <h1>Bienvenido Ingeniero</h1>
              <div className="container p-3 form-group">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Correo Electronico"
                    className="form-control p-2 m-2"
                    onChange={handleInputChange}
                    value={user.email}
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="form-control p-2 m-2"
                    onChange={handleInputChange}
                    value={user.password}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary m-2">Ingresar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormIn;
