import { getConnection, sql, queries } from "../database";
("../database");

export const signUp = async (req, res) => {
  const { name, lastName, email, password, age } = req.body;

  if (
    name == null ||
    lastName == null ||
    email == null ||
    password == null ||
    age == null
  ) {
    return res.status(400).json({ msg: "Please Fill all fiels" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .input("age", sql.VarChar, age)
      .query(queries.registerUser);
    res.json({ name, lastName, email, password, age });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const signUpView = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection()
  const User = await pool.request().input("Id", sql.Int, id).query(queries.getUser)
  console.log(User)
};
