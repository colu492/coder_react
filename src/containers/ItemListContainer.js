import React, {useEffect, useState } from "react"
import AgregarCarrito from "../components/ItemCount.js"; 
import ItemList from "../components/ItemList.js";
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';

const nfts = [
    { id: 1, image:"https://woonklylabs.mo.cloudinary.net/OhgYQcxIF7AYAuE1fAxHC.png?tx=if_ar_lt_1_and_h_gte_709/c_fill,h_709/if_end/if_ar_gt_1_and_w_gte_709/c_fill,w_709/if_end/if_ar_eq_1_and_w_gt_560/c_fill,w_560/if_end/if_w_gte_1536/c_fill,w_1536/if_end", title:"Legendario 445", category:"legendario", price:"200ETH"},
    { id: 2, image:"https://woonklylabs.mo.cloudinary.net/2WI36FgCUmOPhAmFFxYtR.png?tx=if_ar_lt_1_and_h_gte_709/c_fill,h_709/if_end/if_ar_gt_1_and_w_gte_709/c_fill,w_709/if_end/if_ar_eq_1_and_w_gt_560/c_fill,w_560/if_end/if_w_gte_1536/c_fill,w_1536/if_end", title:"Epico 643",category:"epico", price:"150ETH"},
    { id: 3, image:"https://woonklylabs.mo.cloudinary.net/6iocJda2AJsSFIJsXMDtU.png?tx=if_ar_lt_1_and_h_gte_709/c_fill,h_709/if_end/if_ar_gt_1_and_w_gte_709/c_fill,w_709/if_end/if_ar_eq_1_and_w_gt_560/c_fill,w_560/if_end/if_w_gte_1536/c_fill,w_1536/if_end", title:"Legendario 890",category:"legendario", price:"230ETH"},
    { id: 4, image:"https://woonklylabs.mo.cloudinary.net/SyWpfumXRZYJTYrhVCtvU.png?tx=if_ar_lt_1_and_h_gte_709/c_fill,h_709/if_end/if_ar_gt_1_and_w_gte_709/c_fill,w_709/if_end/if_ar_eq_1_and_w_gt_560/c_fill,w_560/if_end/if_w_gte_1536/c_fill,w_1536/if_end", title:"Epico 012",category:"epico", price:"90ETH"},
    { id: 5, image:"https://woonklylabs.mo.cloudinary.net/C-jj4d9koZmZLlB4Jpal3.png?tx=if_ar_lt_1_and_h_gte_709/c_fill,h_709/if_end/if_ar_gt_1_and_w_gte_709/c_fill,w_709/if_end/if_ar_eq_1_and_w_gt_560/c_fill,w_560/if_end/if_w_gte_1536/c_fill,w_1536/if_end", title:"Legendario 987",category:"legendario", price:"900ETH"},
];

export const ItemListContainer = ({greeting}) =>{

    const [Nfts, setNfts] = useState([]);
    const [error, setError] = useState(false)
    const {categoryid} = useParams();

    useEffect(() => {

        const getNfts = new Promise(resolve => {
            setTimeout(() =>{
                resolve(nfts)
            }, 2000);
        });
        if (categoryid) {
            getNfts.then(res => setNfts(res.filter(nfts => nfts.category === categoryid)))
        } else {
            getNfts.then(res => setNfts(res));

        }
        

        /**const getNfts = async () =>{
            try {
                const res = await fetch("https://fakestoreapi.com/products?limit=10");
                const data = await res.json();
                setNfts(data);
            }
            catch {
                setError(true)
            }
        };

        getNfts();**/

    }, [categoryid])

    const onAdd = (cantidad) => {
        alert(`compraste ${cantidad} NFTs`);
    };

    return (
        <>
        <div className="general_container">
            <h2> {greeting} </h2>
            <AgregarCarrito initial={1} stock={5} onAdd={onAdd}/>
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
