import * as yup from 'yup';

const RuleSchema = yup.object().shape({
  user_id: yup.number().positive().required(),
  expr: yup.string().required()
});

export const validateRuleData = async (val, options, next) => {
  const isValid = await RuleSchema.isValid(val);
  if(!isValid) {
    next()
  }
}