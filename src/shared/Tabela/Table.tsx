import React from 'react';
import './Table.scss'

const Table: React.FC = () => {

    return <table className="AppTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th className="right">Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Milk</td>
                <td>$1.29</td>
                <td className="right">23</td>
            </tr>
            <tr>
                <td>SSD</td>
                <td>$350.29</td>
                <td className="right">88</td>
            </tr>
        </tbody>
    </table>
}

export default Table;
