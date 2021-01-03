// const Joi = require("joi");
import { post } from "./handlers";
import { validateRuleData } from './validator';

export default [
  {
    method: "POST",
    path: "/rule-engine",
    handler: post,
    options: {
      auth: false,
      validate: {
        payload: validateRuleData,
      },
    },
  },
];
