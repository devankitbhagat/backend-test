const Parser = require('expr-eval').Parser;

class RuleEngine {
  constructor() {}

  static setExpression(expr) {
    expr = expr.replaceAll('AND ', 'and ')
    expr = expr.replaceAll('NOT ', 'not ')
    expr = expr.replaceAll('OR ', 'or ')
    this.expression = expr
  }

  static setParams(params) {
    this.params = params
  }
  
  static evaluate() {
    const parser = new Parser();
    const expr = parser.parse(this.expression);
    return expr.evaluate(this.params);
  }
}

export default RuleEngine;