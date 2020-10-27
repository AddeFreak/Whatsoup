import React from 'react';
import styled from 'styled-components'

const initialList = [
    { type: "Soup", id: 1, price: 50 },
    { type: "Protein", id: 2 },
    { type: "Bread", id: 3, price: 15 },
    { type: "Spread", id: 4, },
    { type: "Treats", id: 5, },
    { type: "Beverages", id: 6, }
]


const Friend = () => {
    //const [components, setComp] = React.useState(initialComponents);
    const [listData, dispatchListData] = React.useReducer(listReducer, {
        list: initialList,
        isShowList: true,
    });
    function handleRemove(id) {
        dispatchListData({ type: 'REMOVE_ITEM', id });
    }

    if (!listData.isShowList) {
        return null;
    }
    function handleToggleComplete(id) {
        dispatchListData({ type: 'UPDATE_ITEM', id });
    } if (!listData.isShowList) {
        return null;
    }

    return <List list={listData.list} onRemove={handleRemove} onToggleComplete={handleToggleComplete} />;
}
const List = ({ list, onRemove, onToggleComplete }) => (
    <ul>
        {list.map((item) => (
            <Item key={item.id} item={item} onRemove={onRemove} onToggleComplete={onToggleComplete} />
        ))}
    </ul>
);



const Item = ({ item, onRemove, onToggleComplete }) => (

    <div key={item.id}>
        <span style={{
            textDecoration: item.isComplete
                ? 'line-through'
                : 'none',
        }}>Soup:{item.type} {item.price}</span>
        <button type="button" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        <button type="button" onClick={() => onToggleComplete(item.id)}>
            {item.isComplete ? 'Undo' : 'Done'}
        </button>
    </div>
)

const listReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.id),
            };
        case 'UPDATE_ITEM': {
            const newList = state.list.map((item) => {
                if (item.id === action.id) {
                    const updatedItem = {
                        ...item,
                        amount: action.count + 1
                    };

                    return updatedItem;
                }

                return item;
            });

            return { ...state, list: newList };
        }
        default:
            throw new Error();
    }
}



export default Friend;