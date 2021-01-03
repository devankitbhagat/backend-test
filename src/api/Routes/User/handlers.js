import { Redis } from "../../../storage";
import { validateUser } from "./validator";

export const getUser = async (request, h) => {
  const { user_id } = request.params;
  try {
    // get user data from redis
    const data = await Redis.hgetall(`user:${user_id}`);
    return { success: true, data };
  } catch (e) {
    console.error(`Routes[User-getUser] error ${e}`);
    return { success: false };
  }
};

export const putUser = async (request, h) => {
  try {
    const { user_id } = request.params;
    await Redis.hmset(`user:${user_id}`, request.payload);
    return { success: true };
  } catch (e) {
    console.error(`Routes[User-postUser] error ${e}`);
    return { success: false };
  }
};

export const deleteUser = async (request, h) => {
  const { user_id } = request.params;
  try {
    await Redis.del(`user:${user_id}`);
    return { success: true };
  } catch (e) {
    console.error(`Routes[User-deleteUser] error ${e}`);
    return { success: false };
  }
};
