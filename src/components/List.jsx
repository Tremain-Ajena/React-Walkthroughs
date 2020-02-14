import React from 'react';

const List = (props) => {
    let listItems = props.items.map((item) => {
        console.log(item);
        return (
            <li key={item.id}>{item.value}</li>
        );
    });
    return (
        <ul>{listItems}</ul>
    );
}
export default List;