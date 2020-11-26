export default function paginate(array: Array<any>, itemsPerPage: number, actualPage: number) {
    return array.slice(
        (actualPage - 1) * itemsPerPage,
        actualPage * itemsPerPage
    );
}