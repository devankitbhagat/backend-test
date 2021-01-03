import * as yup from "yup";

const UserSchema = yup.object().shape({
  has_depositted: yup.string().oneOf(["TRUE", "FALSE", "true", "false"]),
  wallet_balance: yup.number().positive(),
  number_of_deposits: yup.number().positive().integer(),
});

export const validateUser = async (val, options, next) => {
  const isValid = await UserSchema.isValid(val);
  if(!isValid) {
    next()
  }
};

export const validateUserId = (val, options, next) => {
  let { user_id } = val;
  user_id = parseInt(user_id);
  if (!user_id) {
    next()
  }
};
