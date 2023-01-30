// @flow strict
import{useSession,signIn,signOut}from "next-auth/react"

export default function User({className}) {
     const {data:session}=useSession();
     if(session){
        return (
          <>
           <img onClick ={signOut} src={session.user.image} alt="user-image" className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1}${className}`}/>

          </>
        )
     }
     return(
      <>
           <button className={`btn-signin ${className}`} onClick={signIn}>Sign in</button>
        </>  
        )
    }


