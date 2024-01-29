//write a Function Named outerFunction and give as parameters
function outerFunction(parameter) {
    
        // Variable declared within outerFunction
       const innerVariable ="I am From Out Door 🙄 !"

           // Inner function accessing both parameter and innerVariable
          function innerFunction(){
            console.log(`Inner Function : Perameter From OuterFunction : ${parameter}`);
            console.log(`Inner Function : Variable From OuterFunction : ${innerVariable}`);
          }

          //Retuen The innerFunction
          return innerFunction;
}

// Call outerFunction with a parameter
const parameterValue = "Hello 😎, PW Skill's🤗 !";
const innerFunctionInstance = outerFunction(parameterValue);

// Call the inner function, which still has access to both the parameter and innerVariable
innerFunctionInstance();
