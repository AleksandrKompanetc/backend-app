let users = [];

exports.getAllUsers = () => {
  return users;
}

exports.createUser = name => {
  const user = {
    id: Date.now(),
    name
  };
  users.push(user);
  return user;
}