{
    const age: number = 18;

    if (age >= 18) {
      console.log("adult");
    } else {
      console.log("not adult");
    }
// Ternary operator
    const isAdult = age >= 18 ? "adult" : "not adult";
// console.log({ isAdult });

// nullish coalescing operator 
// null / undefined --> decision making 

  const isAuthenticate = null; // or undefined 
//  const isAuthenticate = '';
 const result1 = isAuthenticate ?? 'Guest'
 const result2 = isAuthenticate ? isAuthenticate : 'Guest' // ternary operator 
 console.log({result1} , {result2}) 


 type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {

    name: "Persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address Here!' // nullish coalescing 
  console.log({permanentAddress})




}