import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'Regular User',
    email: 'user@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
];

export default users;
