import { getConnection, sql, queries } from "../database";
import validator from "validator";

export const registerUsers = async (req, res) => {
  const { name, lastName, email, password, age } = req.body;
  console.log(name, lastName, email, password, age);
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

export const loginUsers = async (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;
  if (email == null || password == null) {
    return res.status(400).json({ msg: "Please Fill all fiels" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      // .input("email", sql.VarChar, email)
      // .input("password", sql.VarChar, password)
      .input("Id", sql.Int, id)
      .query(queries.loginUser);
    res.json({ email, password, id });
    res.json(result.recordset);
  } catch (error) {
    res.send(error.message);
  }
};

export const editUsers = async (req, res) => {
  const { name, lastName, email, password, age } = req.body;
  const { id } = req.params;
  console.log(name, lastName, email, password, age);
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
    await pool.request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .input("age", sql.VarChar, age)
      .input("Id", sql.Int, id)
      .query(queries.editUser);
    res.json({ name, lastName, email, password, age, id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteUsers = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  await pool.request().input("Id", sql.Int, id).query(queries.deleteUser);
  res.sendStatus(204);
};
