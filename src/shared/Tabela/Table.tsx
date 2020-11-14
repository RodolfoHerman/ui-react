import React from 'react';
import organizeData from '../../utils/organizeDatasForTable';
import Button from '../Button';
import './Table.scss';

export interface TableHeader {
    key: string,
    value: string,
    right?: boolean
}

declare interface TableProps {
    headers: Array<TableHeader>;
    data: Array<any>;
    
    enableActions?: boolean;

    onDelete?: (item: any) => void;
    onDetail?: (item: any) => void;
    onEdit?: (item: any) => void;
}

const Table: React.FC<TableProps> = (props) => {

    const [organizedData, indexedHeaders] = organizeData(props.data, props.headers);

    return <table className="AppTable">
        <thead>
            <tr>
                {
                    props.headers.map(header => 
                        <th 
                            className={ header.right ? 'right' : '' } 
                            key={ header.key }
                        >
                            { header.value }
                        </th>
                    )
                }
                {
                    props.enableActions &&
                        <th className="right">Actions</th>
                }
            </tr>
        </thead>
        <tbody>
            {
                organizedData.map((row: any, i: number) => {
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
                        {
                            props.enableActions
                                && <td className="actions right">
                                    {
                                        props.onEdit &&
                                            <Button 
                                                // Para não executar o método em tempo de renderização 
                                                // encapsulamos ele dentro de uma arraow function
                                                onClick={() => props.onEdit && props.onEdit(row)}
                                            >
                                                Edit
                                            </Button>
                                    }
                                    {
                                        props.onDetail &&
                                            <Button 
                                                onClick={() => props.onDetail && props.onDetail(row)}
                                            >
                                                Detail
                                            </Button>
                                    }
                                    {
                                        props.onDelete &&
                                            <Button 
                                                onClick={() => props.onDelete && props.onDelete(row)}
                                            >
                                                Delete
                                            </Button>
                                    }
                                </td>
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default Table;
