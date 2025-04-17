// Initial state value stored

export const initialState = {
    currentValue: "0",    //stores the current value
    operator: null,       // stores the current operator symbol
    previousValue: null,  // stores first operand for operations
    expression: "0",
  };
  
  // manages how numbers are input into the calculator
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      return { 
        currentValue: `${value}`,
        expression: state.expression === "0" ? `${value}` : `${state.expression}${value}`
      };
    }
    return {
      currentValue: `${state.currentValue}${value}`,
      expression: `${state.expression}${value}`
    };
  };
  
  //Core calculation code ---> performs the requested arithmetic operation
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator, expression } = state;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
  
    let result;
    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return state;
    }
  
    return {
      currentValue: `${result}`,
      expression: `${result}`,
      ...resetState,
    };
  };
  
  // calculator function that works as a central dispatcher for all calculator operations
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "clear":
        return initialState;
      case "posneg":
        return {
          ...state,
          currentValue: `${parseFloat(state.currentValue) * -1}`,
          expression: `${parseFloat(state.expression) * -1}`
        };
      case "percentage":
        return {
          ...state,
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
          expression: `${parseFloat(state.expression) * 0.01}`
        };
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
          expression: `${state.expression} ${value} `
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator; 