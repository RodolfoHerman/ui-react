import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import organizeData from '../../utils/organizeDatasForTable';
import Button from '../Button';
import { parse } from 'query-string';
import './Table.scss';
import paginate from '../../utils/paginate';

export interface TableHeader {
    key: string,
    value: string,
    right?: boolean
}

declare interface TableProps {
    headers: Array<TableHeader>;
    data: Array<any>;
    
    enableActions?: boolean;

    itemsPerPage?: number;

    onDelete?: (item: any) => void;
    onDetail?: (item: any) => void;
    onEdit?: (item: any) => void;
}

const Table: React.FC<TableProps> = (props) => {
    // Hook para manipular a url
    const location = useLocation();

    const itemsPerPage = props.itemsPerPage || 5;

    // Faz o parse da propriedade query params (ex.: ?page=2) e seleciona o valor de page
    const page = parseInt(
        parse(location.search).page as string
    ) || 1;

    const [organizedData, indexedHeaders] = organizeData(props.data, props.headers);
    const paginateddata = paginate(organizedData, itemsPerPage, page);
    const totalPages = Math.ceil(organizedData.length/itemsPerPage);

    return <>
        <table className="AppTable">
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
                    paginateddata.map((row: any, i: number) => {
                        return <tr key={`tr_${i}`}>
                            {
                                Object
                                    .keys(row)
                                    .map((property, i) => 
                                        property !== '$original'
                                            ? <td
                                                className={ indexedHeaders[property].right ? 'right' : '' }
                                                key={ row.$original._id + i }
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
                                                    onClick={() => props.onEdit && props.onEdit(row.$original)}
                                                >
                                                    Edit
                                                </Button>
                                        }
                                        {
                                            props.onDetail &&
                                                <Button 
                                                    onClick={() => props.onDetail && props.onDetail(row.$original)}
                                                >
                                                    Detail
                                                </Button>
                                        }
                                        {
                                            props.onDelete &&
                                                <Button 
                                                    onClick={() => props.onDelete && props.onDelete(row.$original)}
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
        <div className="Table__pagination">
            {
                Array(totalPages)
                    .fill('')
                    .map((_, index) => {
                        return <NavLink
                            key={index}
                            activeClassName="selected"
                            to={`/products?page=${index + 1}`}
                            isActive={ () => page === index + 1}
                        >
                            { index + 1 }
                        </NavLink>
                    })
            }
        </div>
    </>
}

export default Table;
