import Link from "next/link";

export async function getStaticProps() { // Utilisation de l'API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    return{

        props : {
            posts: data // on à enlevé le slice qu'il y'avait avant
        }
        
    }
};

export default function PostList({posts}) { // Affichage de la data de l'API
    return(
        <>
        <h1>Post List here:</h1>
        {
            posts.map( (post) =>{
                return(
                    <div key={post.id}>
                    {/* Quand on utilise le composant LINK sans passer de balises <a></a> alors on utilise passHref */}
                        <Link href={`/posts/${post.id}`} passHref> 
                        <p>{post.title} {post.body}</p>
                        </Link>
                        <hr/>
                    </div>
                )
            })
        }
        </>
    )
};
