import { TableHeader } from "../shared/Tabela";

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

export default function organizeData(data: Array<any>, headers: Array<TableHeader>): [OrganizedItem, IndexedHeaders] {

    const indexedHeaders: IndexedHeaders = {};

    headers.forEach(header => {

        indexedHeaders[header.key] = {
            ...header
        }
    });

    const headerKeysInOrder = Object.keys(indexedHeaders);

    const organizedData: OrganizedItem = data.map(item => {

        const organizedItem: OrganizedItem = {};

        headerKeysInOrder.forEach(key => organizedItem[key] = item[key]);

        organizedItem.$original = item;

        return organizedItem;
    });

    return [organizedData, indexedHeaders];
}