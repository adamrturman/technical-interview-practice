interface Options {
    lowercase?: boolean;
    omitVowels?: boolean;
  }
//  First solution - using conditionial to introduce other testcases
//   export function stringReverse(
//     input: string,
//     options: Options = { lowercase: false, omitVowels: false }
//   ) {  
//     // generic reverse - solves the first test case 
//     let result = "";
//     for (let i = input.length - 1; i >= 0; i--) {
//       console.log(input[i]);
//       result = result.concat(input[i]);
//     }
//     //  Conditions for other tests
//     if (options.lowercase === true) {
//       result = result.toLowerCase()
//     }
//   //  Using regex to globally match any vowels and replace them with an empty string
//     if (options.omitVowels === true) {
//       result = result.replace(/[aeiouAEIOU]/gm, '')
//     }
  
//     return result;
//   }
  
  //    Second solution - refactored conditions into functions for 
  //     improved readability and
  export function stringReverse(
    input: string,
    options: Options = { lowercase: false, omitVowels: false }
  ) {
    //  check for generic reverse
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
      result = result.concat(input[i]);
    }
    //  pass in the result & call lowercase method if that option is true
    function lowerCase(result:string, options:Options) {
      if (options.lowercase === true) {
        result = result.toLowerCase();
      }
      return result;
    }
    //  pass in result & use regular expression to omit vowels if that option is true
    function omitVowels(result:string, options:Options) {
      if (options.omitVowels === true) {
        result = result.replace(/[aeiouAEIOU]/gm, '');
      }
      return result;
    }
  
    result = lowerCase(result, options);
    result = omitVowels(result, options)
  
    return result;
  }