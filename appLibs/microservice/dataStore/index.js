let _roles = [
  {
    name: 'SysAdmin'
  },
  {
    name: 'Ambassador'
  },
  {
    name: 'Spa Provider'
  },
  {
    name: 'Personal Trainer'
  }
];

let _users = [
  {
    firstName:  'Test',
    lastName: 'Admin',
    email: 'test.admin@villatest.com',
    roles: [
      {
        name: 'SysAdmin'
      }
    ]
  }
];


function getAllRoles(){
  return _roles;
};

function findRole(name){
  return _roles.find(role => role.name === name);
};

function removeRole(name){
  _roles = _roles.filter(role => role.name !== name);
};

function addRole(role){
  const existingRole = findRole(role.name);
  if (existingRole)
    throw new Error(`SECURITY GROUP ALREADY EXISTS: ${role.name}`);
  else {
    _roles = _roles.concat([role]);
    return role;
  }
};

function getAllUsers(){
  return _users;
}

function findUser(name) {
  return _users.find(user => user.email === name);
};

function removeUser(name) {
  _users = _users.filter(user => user.email !== name);
};

function addUser(user) {
  const existingUser = findUser(user.email);
  if (existingUser)
    throw new Error(`USER ALREADY EXISTS: ${user.user}`);
  else {
    user.roles = user.roles || [];
    _users = _users.concat([user]);
    return user;
  }
};

function assignUserToRole(user, role){
  const existingRole = user.roles.find(userRole => userRole.name === role.name);
  if (existingRole)
    return true;
  else {
    user.roles = user.roles.concat([role]);
    return true;
  }
};


module.exports = {
  getAllRoles: getAllRoles,
  findRole: findRole,
  removeRole: removeRole,
  addRole: addRole,

  getAllUsers: getAllUsers,
  findUser: findUser,
  removeUser: removeUser,
  addUser: addUser,

  assignUserToRole: assignUserToRole
};

