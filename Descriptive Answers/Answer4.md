In javaScript, there are seven primitive datatypes.
1. Number: Represents both integer and floating-point numbers.
   For example: let price="45";
                let price="50.5";

2. String: Represents a sequence of characters, enclosed in single or double quotes.
   For example: let greeting="Hello , World!";

3. Boolean: Represents a logical entity and can have only two values: true or false. 
   For example: let isJavaScriptFun = true;

4. Undefined: Indicates that a variable has been declared but not assigned a value. 
   For example: let name;
                console.log(name); // Outputs: undefined  

5. Null: Represents the intentional absence of any object value. 
   For example: let emptyValue = null;             

6. Symbol: Represents a unique and immutable identifier, often used to create unique property keys for objects.
   For example:let uniqueId = Symbol("id");

7. BigInt: Represents whole numbers larger than (2^{53} - 1), which is the largest number JavaScript can reliably 
   represent with the Number type.   
   For example: let bigNumber = 1234567890123456789012345678901234567890n;
