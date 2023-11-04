{

    //Constrains  ->
    const addCourseToStudent = <T extends {id: number , name: string, email: string}>(student: T) => {
        const course = "Next Level Web Development";
        return {
          ...student,
          course,
        };
      };

      const student3 = addCourseToStudent({
        id:4,
        name: "Mr r",
        email: "r@gmail.com",
        role:'role'}) // outsider but id, name,email are in extends...
    
      const student1 = addCourseToStudent<{
      id: number;
      name: string;
      email: string;
      devType: string;
}>
      ({
        id:1,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
      });
    
      const student2 = addCourseToStudent({
        id:2,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
      });
    


















}