let users = [];

exports.getUsers = async (req, res, next) => {
  try {
    res.json(users);
  } catch (error) {
    next(error);
  }
}

exports.getUserById = (req, res) => {

  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
}

exports.createUser = (req, res) => {
  const user = { 
    id: Date.now(), 
    name: req.body.name 
  };

  users.push(user);
  res.status(201).json(user);
}

exports.deleteUser = (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.send('User deleted');
}