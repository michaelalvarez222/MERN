import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Display = () => {
    const { category, id } = useParams();

    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res=>{
                console.log("MAKING AXIOS CALL TO GET INFO ABOUT SOMETHING")
                console.log(res)
                setInfo(res.data)

            })
            .catch(err=>console.log(err))
    },[category,id])


    return (
        
        <div>
            {category=="people"?
                <>
                    <h3>Name: {info.name}</h3>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                </>:
                category=="planets"?
                <>
                    <h3>Name: {info.name}</h3>
                    <h3>Climate: {info.climate}</h3>
                    <h3>Terrain: {info.terrain}</h3>
                </>:
                category=="films"?
                <>
                    <h3>Title: {info.title}</h3>
                    <h3>Director: {info.director}</h3>
                    <h3>Producer: {info.producer}</h3>
                </>:
                category=="species"?
                <>
                <h3>Name: {info.name}</h3>
                <h3>Height: {info.average_height}</h3>
                <h3>Life Span: {info.average_lifespan}</h3>
                </>:
                <>
                    <h1>Nah dawg we dont know you</h1>
                    <img src="https://media.istockphoto.com/photos/police-dog-wearing-cap-holding-up-a-stop-sign-picture-id158755906" alt="" />
                </>
            }

        </div>
    );
};

export default Display;