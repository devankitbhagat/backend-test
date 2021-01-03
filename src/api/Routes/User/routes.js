import { getUser, putUser, deleteUser } from './handlers';
import { validateUserId, validateUser } from './validator';

export default [
  {
    method: "GET",
    path: "/user/{user_id}",
    handler: getUser,
    options: {
      auth: false,
      validate: {
        params: validateUserId,
      },
    },
  },
  {
    method: "PUT",
    path: "/user/{user_id}",
    handler: putUser,
    options: {
      auth: false,
      validate: {
        payload: validateUser,
        params: validateUserId,
      },
    },
  },
  {
    method: "DELETE",
    path: "/user/{user_id}",
    handler: deleteUser,
    options: {
      auth: false,
      validate: {
        params: validateUserId,
      },
    },
  },
];
