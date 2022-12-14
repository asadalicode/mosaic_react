
export default function PaginationNumeric({
  postsPerPage,
  totalPosts,
  paginateBack,
  paginateFront,
  paginate,
  currentPage
}) {
  const pageNumbers = [];
  const _totalPages = Math.ceil(totalPosts / postsPerPage);

  let i = 1;

  while (i <= _totalPages) {

    if (i <= 1 ||
      i >= _totalPages - 2 ||
      i >= currentPage - 1 && i <= currentPage + 1) {
      pageNumbers.push(i);
      i++;
    } else {
      pageNumbers.push('...');

      //jump to the next page to be linked in the navigation
      i = i < currentPage ? currentPage - 1 : _totalPages - 1;
    }
  }


  return (
    <div className='flex justify-between mr-4 my-3'>

      {(totalPosts > postsPerPage) ?
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <p
            onClick={() => {
              paginateBack();
            }}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50
              ${(currentPage > 1) ? 'cursor-pointer' : 'pointer-events-none bg-gray-200 text-gray-300'}`}
          >
            <span className="sr-only">Previous</span><wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>

          </p>
          <ul className='flex pl-0 rounded list-none flex-wrap'>
            <li>
              {pageNumbers.map((number, index) => (
                <p
                  key={Math.random()}
                  onClick={() => {
                    paginate(number);
                  }}
                  className={
                    number === '...' ? "border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-500 hover:bg-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium pointer-events-none" :
                      (currentPage === number
                        ? "bg-blue border-indigo-500 text-indigo-600 hover:bg-blue-300 hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                        : "border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-500 hover:bg-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer")
                  }
                >
                  {number}
                </p>
              ))}
            </li>
          </ul>
          <p
            onClick={() => {
              paginateFront();
            }}
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50
                  ${((currentPage * postsPerPage) < totalPosts) ? 'cursor-pointer' : 'pointer-events-none bg-gray-200 text-gray-300'} `}
          >
            <span className="sr-only">Next</span><wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>

          </p>
        </nav> : null}
      {/* </div> */}
    </div>
  )
}