export const queries = {
  registerUser: "INSERT INTO [UsersFRA].[dbo].[Users] (name, lastName, email, password, age) VALUES (@name, @lastName, @email, @password, @age)",
  getUser: "SELECT * FROM [UsersFRA].[dbo].[Users] WHERE Id = @Id",
  // loginUser: "SELECT * FROM [UsersFRA].[dbo].[Users] WHERE Id = @Id",
  editUser: "UPDATE [UsersFRA].[dbo].[Users] SET Name = @name, LastName = @lastName, Email = @email, Password = @password, Age = @age WHERE Id = @Id",
  deleteUser: "DELETE FROM [UsersFRA].[dbo].[Users] WHERE Id = @Id"
}