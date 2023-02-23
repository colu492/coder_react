import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"

const nft = { id:1, image: "https://woonklylabs.mo.cloudinary.net/2WI36FgCUmOPhAmFFxYtR.png?tx=if_ar_lt_1_and_h_gte_709/c_fill,h_709/if_end/if_ar_gt_1_and_w_gte_709/c_fill,w_709/if_end/if_ar_eq_1_and_w_gt_560/c_fill,w_560/if_end/if_w_gte_1536/c_fill,w_1536/if_end", title:"Gollo Legendario", description:"This Gollo NFT grants you an exclusive pass to the grower academy on our website, with access to downloads and product discounts" }

export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getDetail = new Promise(resolve => {
            setTimeout(() => {
                resolve(nft);
            }, 2000);
        });
        getDetail.then(res => setDetail(res));
        
    }, []);

    return(
        <ItemDetail detail={detail}/>
    );
}

export default ItemDetailContainer;