import { ActivityIndicator, FlatList, ScrollView } from "react-native-web";
import { useEffect, useState } from "react";
import { getPersonajes } from "../lib/rickyMorty";
import { CharacterCard } from "./CharacterCard";
import { renderToPipeableStream } from "react-dom/server";

export function Main() {
    
    const [personajes, setPersonajes] = useState([]);

    useEffect(()=> {
        getPersonajes().then((data)=>{
        setPersonajes(data);
        console.log("personajes:", data);
        })
    }, []);

    return (
        <>
        {personajes.length === 0 ?(
            <ActivityIndicator size={"large"}/>
        ): (
            <FlatList
                data= {personajes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                    ({item, index}) => (
                        <CharacterCard personaje={item} index= {index}/>
                    )
               }>
                </FlatList>
            )
}
        </>
    );
}