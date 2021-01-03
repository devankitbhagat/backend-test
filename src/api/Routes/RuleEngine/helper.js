import { Redis } from "../../../storage";
import _ from 'lodash';

export const getParamsForRuleEngine = async (user_id) => {
  let depositted_users = false;
  let number_of_deposits = 0;
  let wallet_balance = 0;

  try {
    const data = await Redis.hgetall(`user:${user_id}`);
    if(!data || _.isEmpty(data)) {
      return {
        success: false,
        error: {
          message:
            "User not found",
        },
      };
    }

    depositted_users = data.has_depositted && data.has_depositted.toUpperCase() === 'TRUE' ? true : false;
    number_of_deposits = data.number_of_deposits || 0;
    wallet_balance = data.wallet_balance || 0;
    return { success: true, data: {...data, depositted_users, number_of_deposits, wallet_balance} };

  } catch(e) {
    console.error(`Routes[getParamsForRuleEngine] error ${e}`);
    return { success: false };
  }

}