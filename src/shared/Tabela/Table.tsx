import React from 'react';
import './Table.scss';
import PRODUCTS from './Table.mockdata'

declare interface TableHeader {
    key: string,
    value: string,
    right?: boolean
}

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedData = {
    [key: string]: any
}

const headers: Array<TableHeader> = [
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key:'actions', value: 'Actions' },
    { key: 'stock', value: 'Available Stock', right: true },
];

function organizeData(data: Array<any>, headers: Array<TableHeader>): [OrganizedData, IndexedHeaders] {

    const indexedHeaders: IndexedHeaders = {};

    headers.forEach(header => {

        indexedHeaders[header.key] = {
            ...header
        }
    });

    const headerKeysInOrder = Object.keys(indexedHeaders);

    const organizedData = data.map(item => {

        const organizedItem: OrganizedData = {};

        headerKeysInOrder.forEach(key => organizedItem[key] = item[key]);

        organizedItem.$original = item;

        return organizedItem;
    });

    return [organizedData, indexedHeaders];
}

const Table: React.FC = () => {

    const [organizedData, indexedHeaders] = organizeData(PRODUCTS, headers);

    return <table className="AppTable">
        <thead>
            <tr>
                {
                    headers.map(header => 
                        <th 
                            className={ header.right ? 'right' : '' } 
                            key={ header.key }
                        >
                            { header.value }
                        </th>
                    )
                }
            </tr>
        </thead>
        <tbody>
            {
                organizedData.map((row: OrganizedData, i: number) => {
                    return <tr key={`tr_${i}`}>
                        {
                            Object
                                .keys(row)
                                .map((property, i) => 
                                    property !== '$original'
                                        ? <td
                                            className={ indexedHeaders[property].right ? 'right' : '' }
                                            key={ row.$original.id + i }
                                        >
                                            { row[property] }
                                        </td>
                                        : null
                                )
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default Table;
