function validParentheses(x) {
  let stack = [];
  let hasMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < x.length; i++) {
    let char = x[i];
    if (hasMap[char]) {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (!top || hasMap[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]")); 
console.log(validParentheses("([)]")); 
console.log(validParentheses("{[]}"));
