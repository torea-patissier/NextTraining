export default function Post({ post }) {
  return (
    <>
      <h1>This is the post for the ID {post.id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <hr />
    </>
  );
}

/**
 * context est une convention mais c'est un  objet qui contient une key qui s'appelle (params)
 *(params) nous permet d'avoir accès au (postId)
 */
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

  // Appel à l'API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json();

  /**
   * ICI ON MAP LE RES DE L'API 
   * On met les `` car l'API return un (numéric) mais dans l'URL il s'agit de passer un (string)
   * 
   */
  const myPath = data.map(post =>{
    return{
      params:{
        postId : `${post.id}` 
      }
    }
  })

  /**
   * ICI ON DEFINI LES PATHS POUR getStaticPaths
   */
  return {
    paths : myPath, 
    fallback: false, //Définition à  voir plus tard
  };
}
