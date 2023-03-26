import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';



export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const refDoc = doc(querydb, 'nfts', detalleId);
        getDoc(refDoc)
        .then(res => setDetail({ id: res.id, ...res.data() }))

    }, [detalleId]);

    return(
        <ItemDetail detail={detail}/>
    );
}

export default ItemDetailContainer;