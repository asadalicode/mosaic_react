import Button from '../../components/Button';
import PaginationNumeric from '../../components/PaginationNumeric'
import Dropdown from './Dropdown';

const TablePagination = ({
    title, totalRecords, pageNumber, limit, handleShowData, paginateBack, paginateFront, paginate
}) => {
    return (
        <>
            <div className="mt-3 flex lg:justify-between flex-wrap justify-center mb-[7rem]">
                <div className="flex gap-2 items-center lg:mb-0 mb-3">
                    <span className="text-xs">Show</span>
                    <Dropdown handleSelectedOption={handleShowData} limit={limit} />
                    <span className="text-xs">{title} per page</span>
                </div>
                <div className='flex gap-3 items-center flex-wrap justify-center'>
                <p className="text-xs">Showing <span className='font-bold'> {(pageNumber - 1) * limit + 1}-{(((pageNumber-1 )* limit) + limit) > totalRecords ? totalRecords : (((pageNumber-1 ) * limit )+ limit)}</span> of {totalRecords} entries</p>
                  
                    <PaginationNumeric
                        postsPerPage={limit}
                        totalPosts={totalRecords}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                        paginate={paginate}
                        currentPage={pageNumber}
                    />
                </div>
            </div>

        </>
    )
}
export default TablePagination;

