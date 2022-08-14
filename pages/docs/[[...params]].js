import { useRouter } from "next/router";

export default function Docs() {
    const router = useRouter();
    const { params = [] } = router.query; // params = le nom du fichier [...params].js
    console.log(params);

    if(params.length === 2 ){
        return(
            <h1>
                There is 2 params in the URL :  param  1 = {params[0]} and param 2 = {params[1]}
            </h1>
        )
    }else if(params.length === 1){
        return(
            <h1>
                There is 1 params in the URL : param 1 = {params[0]}
            </h1>
        )
    }

    return(
        <h1>Home page here</h1>
    )    
};
/**
 * Catch all routes à partir de l'URL /docs/...
 * 
 * [[...params]].js a 2 [] pour éviter d'avoir une érreur sur l'URL /docs et va utiliser cette page
 * en guise d'index.js
 * 
 */