import React from "react";
import './ItemDetail.css';

export const ItemDetail = ({detail}) => {
    return(
        <div className="detail_container">
                <img src={detail.image} alt="{detail}"/>
                <div className="detail_info">
                    <h1>{detail.title}</h1>
                    <p>{detail.description}</p>
                </div>
        </div>
    );
}

export default ItemDetail;