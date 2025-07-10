import { ScrollView } from "react-native-web";
import { useEffect, useState } from "react";
import { getPersonajes } from "../lib/rickyMorty";
import { CharacterCard } from "./CharacterCard";

export function Main() {
    
    const [personajes, setPersonajes] = useState([]);

    useEffect(()=> {
        getPersonajes().then((data)=>{
        setPersonajes(data);
        console.log("personajes:", data);
        })
    }, []);

    return (
        <ScrollView>
         { personajes.map((personaje) => (
                <CharacterCard personaje={personaje}
                key={personaje.id}/>
              ))}
        </ScrollView>
    );
}