{
// destructuring 
// object destructuring 
const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "0170000000",
    address: "Uganda",
  };

  const {contactNo , // cann't explicitly (__:string)
     name: {middleName : midName} ,
    } = user;

// array destructuring 

const userArray = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

  const [, , bestBuddy, ...rest] = userArray // first two value skip then last three values are stored in rest operator








}
