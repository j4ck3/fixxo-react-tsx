export interface User {
   _id: String
   firstName: string
   lastName: string
   email: string
}

export interface UserRequest {
    firstName: string
    lastName: string
    email: string
    password: string 
 }

 export interface UserSignIn {
   email: string
   password: string 
}

 

