type PaginationProps = {
    elementsPerPage: number;
    totalElements: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    elementsPerPage,
    totalElements,
    currentPage,
    paginate,
}) => {
    // const indexOfLastPage = currentPage * elementsPerPage;
    const totalPages = Math.ceil(totalElements / elementsPerPage);

    // const goToPreviousPage = () => {
    //     if (currentPage > 1) {
    //         paginate(currentPage - 1);
    //     }
    // };

    // const goToNextPage = () => {
    //     if (indexOfLastPage < totalElements) {
    //         paginate(currentPage + 1);
    //     }
    // };

    // const goToLastPage = () => {
    //     paginate(totalPages);
    // };

    // const goToFirstPage = () => {
    //     paginate(1);
    // };

    const renderPaginationButtons = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => paginate(i)}
                    disabled={currentPage === i}
                    className={`pagination__button pagination--page ${
                        currentPage === i ? 'pagination--active' : ''
                    }`}
                >
                    {/* {i} */}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className='pagination'>
            {/* <button
                onClick={goToFirstPage}
                className='pagination__button pagination--avance'
            >
                {'<<'}
            </button> */}

            {/* <button
                onClick={goToPreviousPage}
                className='pagination__button pagination--avance'
            >
                {'<'}
            </button> */}

            {renderPaginationButtons()}
            {/* <button
                onClick={goToNextPage}
                className='pagination__button pagination--avance'
            >
                {'>'}
            </button> */}
            {/* <button
                onClick={goToLastPage}
                className='pagination__button pagination--avance'
            >
                {'>>'}
            </button> */}
        </div>
    );
};

export default Pagination;
