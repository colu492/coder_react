import React, {useEffect, useState } from "react"

import ItemList from "../components/ItemList.js";
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



export const ItemListContainer = ({greeting}) =>{

    const [Nfts, setNfts] = useState([]);
    const [error, setError] = useState(false)
    const {categoryid} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'nfts');
        if(categoryid) {
            const queryFilter = query(queryCollection, where('category', '==', categoryid))
        
            getDocs(queryFilter)
            .then (res => setNfts(res.docs.map(nft => ({id: nft.id, ...nft.data() })))) 
        } else {
            getDocs(queryCollection)
            .then(res => setNfts(res.docs.map(nft => ({id: nft.id, ...nft.data() }))))
        }


    }, [categoryid])


    return (
        <>
        <div className="titulo">
            <h2> {greeting} </h2>
        </div>
        <div className="general_container">
            

            {!error ? (
                <>
                {Nfts.length ? (
                    <ItemList data={Nfts}/>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </>
            ) : (
                <h1>Error FATAL...</h1>
            )}
        </div>
        </>
    );
};



export default ItemListContainer;
