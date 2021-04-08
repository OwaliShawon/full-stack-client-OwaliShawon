import React from 'react';

const Order = (props) => {
    const { name, weight, price, imageUrl } = props.order;
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{weight}</td>
                        <td>${price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Order;