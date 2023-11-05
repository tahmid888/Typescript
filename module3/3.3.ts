{

   // type guard

   // typeof ->

   type Alpha = string | number


const add = (param1:Alpha, param2: Alpha):Alpha => {

  if(typeof param1 === 'number' && typeof param2 === 'number'){
    return param1 + param2;
  }else{
    return param1.toString() + param2.toString()
  }

}
const res1 = add(2,2)
const res2 = add('2','2')
console.log(res2)


// in guard 
type NormalUser = {
    name:string
}
type AdminUser = {
    name:string;
    role:'admin'
}

const getUser = (user: NormalUser | AdminUser) =>{
    if('role' in user){ // in guard
         console.log(`Name: ${user.name} and role: ${user.role}`)
    }else{
        console.log(`Name: ${user.name} `)
    }
}

const normalUser: NormalUser = {
    name:'Normal'
}
const adminUser: AdminUser = {
    name:'Admin',
    role:'admin'
}

getUser(adminUser)


















}