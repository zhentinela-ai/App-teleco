import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { User } from "./User";
import * as userService from "./UserService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement>;

const AuthForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    position: "",
  };

  const [user, setUser] = useState<User>(initialState);

  const handleInputChange = (e: InputChange) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getLastUser = async () => {
    return await userService.getLastUser();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await userService.createUser(user);
      toast.success("Nuevo Usuario agregado");
      setUser(initialState);
    } else {
      await userService.editUserProfile(user, params.id);
      toast.info("Usuario actualizado");
      setUser(initialState);
    }
    const res = getLastUser();
    const id = (await res).data[0].id;
    navigate(`/api/home/${id}`);
  };

  const getUserById = async (id: string) => {
    const res = await userService.getUserById(id);
    setUser(res.data[0]);
  };

  useEffect(() => {
    if (params.id) getUserById(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-auto text-center bg-dark">
        {!params.id ? <h1>SISTEMA DE REGISTRO</h1> : <h1>EDITANDO</h1>}
        <div className="card p-2">
          <div className="card-body text-ligth">
            <form onSubmit={handleSubmit}>
              {params.is ? <h2>Bienvenido</h2> : <h2></h2>}
              <div className="form-group p-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombres"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.name}
                  autoFocus
                />
              </div>

              <div className="form-group p-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellidos"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.lastName}
                />
              </div>

              <div className="form-group p-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Correo Electronico"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.email}
                />
              </div>

              <div className="form-group p-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.password}
                />
              </div>

              <div className="form-group p-2">
                <input
                  type="text"
                  name="position"
                  placeholder="Cargo"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.position}
                />
              </div>

              {params.id ? (
                <div className="form-group p-2">
                  <button className="btn btn-info rounded-0">Editar Perfil</button>
                </div>
              ) : (
                <div className="form-group p-2">
                  <button className="btn btn-primary rounded-0 btn-block">Nuevo Ingeniero</button>
                </div>
              )}

              {/* Example TextArea */}
              <div className="form-group">
                <textarea name="example" rows={3}></textarea>
                {/* | HTMLTextAreaElement */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
