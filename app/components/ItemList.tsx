import React from "react";


interface Item {
    id: number;
    name: string;
}

const ItemComponent:React.FC<Item> = ({id, name}) => {
    return (
        <div>
            <p>ID:{id}</p>
            <p>Name:{name}</p>
        </div>
    );
};


const ItemList: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <div>
            {
                items.map((item) => (
                    <ItemComponent key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default ItemList;