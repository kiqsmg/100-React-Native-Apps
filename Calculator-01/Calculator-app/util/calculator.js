// Initial state value stored

export const initialState = {
    currentValue: "0",    //stores the current value
    operator: null,       // stores the current operator symbol
    previousValue: null,  // stores first operand for operations
  };
  
  // manages how numbers are input into the calculator
  export const handleNumber = (value, state) => {
    // if there is no value displayed, the number pressed becomes the number displayed
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
    //concatenate strings(numbers)
    // if there is already a number been displayed, the bumber pressed adds to the number displayed to be shown in the display
    return {
      currentValue: `${state.currentValue}${value}`,
    };
  };
  
  //Core calculation code ---> performs the requested arithmetic operation
  const handleEqual = (state) => {
    // extracts the displayed value and operators to perform
    const { currentValue, previousValue, operator } = state;
  
    // convert the strings to actual floating-point numbers
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    // template to reset the state values to null for the next operation
    const resetState = { operator: null, previousValue: null };
  
    switch (operator) {
      case "+":
        return {
          // performs addition and creates a result as string in currentValue
          currentValue: `${previous + current}`,
          // resets the operator state
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "*":
        return {
          currentValue: `${previous * current}`,
          ...resetState,
        };
      case "/":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
      // safety net returns unchanged state if no valid operator
      default:
        return state;
    }
  };
  
  // calculator function that works as a central dispatcher for all calculator operations
  const calculator = (type, value, state) => {
    switch (type) {
      // number input --> delegates to handleNumber for digit input (appends digits or replaces "0")
      case "number":
        return handleNumber(value, state);
      // clear input--> full reset currentValue, operator, previousValue
      case "clear":
        return initialState;
      // posneg(sign toggle) --> multiplies the current value by -1, and preserves the other state fields
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      // percentage --> divides the currentValue by 100
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      // operator --> stores the operation (+,-,/,*) and first operand
      // resets display for second number
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      // triggers calculation using operator/values stored
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator; 