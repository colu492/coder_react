import React from "react";
import Item from './Item';

const ItemList = ({data = []}) => {
    return(
        data.map(Nfts => <Item key={Nfts.id} info={Nfts}/>)
    );
};

export default ItemList;