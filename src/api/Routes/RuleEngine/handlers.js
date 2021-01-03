import { RuleEngine } from "../../../helper";
import { getParamsForRuleEngine } from './helper';
import { validateRuleData } from './validator';

export const post = async (request, h) => {
  try {
    const { user_id, expr } = request.payload;
    //get user data and convert to required format which can be passed to rule engine
    const parsedParams = await getParamsForRuleEngine(user_id);
    if(!parsedParams.success) {
      return parsedParams;
    }

    try {
      // set expression and params to rule engine and return the results
      RuleEngine.setExpression(expr);
      RuleEngine.setParams(parsedParams.data);
      const value = RuleEngine.evaluate();
      return { success: true, data: { value } };
    } catch (e) {
      console.error(`Routes[User-postUser-RuleEngine] error ${e}`);
      return {
        success: false,
        error: {
          message:
            "Rule engine error, make sure all variables are added to user and expression is correct",
          error: e?.message,
        },
      };
    }
  } catch (e) {
    console.error(`Routes[User-postUser] error ${e}`);
    return { success: false };
  }
};
