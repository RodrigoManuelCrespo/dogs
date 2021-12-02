import React from "react";
import { useEffect, useState } from "react";
import{ useDispatch, useSelector} from "react-redux";
import { getBreeds } from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home(){
    
    const dispatch = useDispatch();
    //reemplaza mapStateToProps
    let dogs = useSelector((state)=>state.dogs)
    //pagina actual arranca en 1
    const [currentPage, setCurrentPage] = useState(1)
    //perros por pagina
    const [dogPage, setDogPage] = useState(8)
    //indice del ultimo perro por pagina
    const indexLastDog = currentPage * dogPage 
    //indice del primer personaje por pagina
    const indexFirstDog = indexLastDog - dogPage
    //guarda personajes por pagina - con slice recorto en array pasandole indice del primer personaje y el ultimo
    const currentDog = dogs.slice(indexFirstDog, indexLastDog)

    //paginado
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        //reemplaza mapDsipatchToProps
        dispatch(getBreeds())
    }, [dispatch])
    
    return(
        <>
        <div>
            <Link to= '/dog'>Crear Personaje</Link>
        </div>
        <div>
            <select>
                <option value='asc'>ASC</option>
                <option value='desc'>DES</option>
                <option value='weight'>Weight</option>
            </select>
            <select>
                <option value='api'>API</option>
                <option value='bdd'>Creados</option>
            </select>
        </div>
        {
            dogs.map(dog=>{
                return(
                    <Card key={dog.id} name={dog.name} image={dog.image} weight={dog.weight} temperament={dog.temperament}/>
            )})
        }
        </>
    )
}