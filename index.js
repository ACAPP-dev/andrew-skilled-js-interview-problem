/*
  Given that you have an already valid JSON string where the keys are
  all kebab-case, write a function called transformKebabCaseToCamelCase 
  that takes in this JSON string and returns a JSON string where all
  the keys are transformed to be camelCase.

  Turn a JSON string to an object
    JSON.parse(data: string): object

  Turn an object to a JSON string
    JSON.stringify(data: object): string

  Get the keys of an object into an array
    Object.keys(data: object): Array(string)
  
  Iterate through each key of an object.
    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }
*/

const exampleJson = `{
    "first-name": "Jeff",
    "last-name": "Green",
    "city-and-state": "Boston, MA",
    "zip": "12345-1234",
    "pet-name": "Bruno",
    "pet-gender": "male"
  }`;
  
  const exampleJsonCollection = `[{
    "first-name": "Jeff",
    "last-name": "Green",
    "address": {
      "city-and-state": "Boston, MA",
      "zip": "12345-1234"
    },
    "pets": [{
      "pet-name": "Bruno",
      "pet-gender": "male"
    }]
  }]`;
  
  function transformKebabCaseToCamelCase(data) {
    // Example is that if I was passed '{"first-name": "Fred"}', the result
    // should be '{"firstName": "Fred"}'
    const dataObject = JSON.parse(data);
    const dataKeys = Object.keys(dataObject);
  
    const camelKeys = dataKeys.map((key) => {
      const splitKey = key.split("-");
      const camelKey = splitKey
        .map((element, index) => {
          if (index > 0) {
            const capitalElement =
              element.slice(0, 1).toUpperCase() + element.slice(1);
            return capitalElement;
          } else {
            return element;
          }
        })
        .join("");
      return camelKey;
    });
    console.log(camelKeys);
  
    const returnObj = {};
  
    // const key = 'foo';
    // const obj = {[key]: 'bar'}
    // obj.hello = 'world';
    // obj['foo2'] = 'bar2';
  
    // const foo3 = 'foo3';
    // obj[foo3] = 'bar3';
  
    // console.log('HERE', obj);
    let i = 0;
    for (const element in dataObject) {
      const objValue = dataObject[element]
      
      Object.assign(returnObj, {[camelKeys[i]]: objValue})
      
      i++;
    }
    console.log(returnObj);
  
    return JSON.stringify(returnObj);
  }
  
  const result = transformKebabCaseToCamelCase(exampleJson);
  console.log(result);
  document.getElementById("app").innerHTML = result;
  