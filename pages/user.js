// pages/user
import User from "../components/user";
/**
 * getStaticProps  = IMPORTANT
 * Appel de l'API et de la route /user utilisation de la méthode fetch de JS
 */
 export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    /**
     le props users est retourné dans le fonction User
     Convention, il faut un return quand on utilise getStaticProps
     */
    return{ 
        props : {
            users :  data
        }
    }
}
export default function UserList({users}) {
    return(
        <>
        <h1>User page</h1>
        <h1>Test rebase2</h1>
        <h1>User page</h1>
        {
            users.map( (user) => { // equivalent foreach php
                return(
                    <div key={user.id}>
                        <User user= {user} />
                        {/* APPEL DU COMPOSANT USER */}
                        <br/>
                    </div>
                )
            })
        }
        </>
    )
};
