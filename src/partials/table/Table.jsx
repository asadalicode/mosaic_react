import Button from "../../components/Button";
import Input from "../../components/Input";
import { columnEnum } from "./columnEnum";
import Rating from "./Rating";
import StatusBadge from "./Statusbadge";
import searchIcon from '../../images/icons/searchIcon.svg';


const Table = ({ columns,
    rows,
    isHeader = true,
    children,
    title,
    coloumnClick,
    pageNumber,
    limit,
    totalRecords,
    filters = []
}) => {

    return (
        <>
            <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                {
                    isHeader &&
                    <header className="px-5 py-4">
                        <div className="flex lg:justify-between flex-wrap justify-center">
                            <div className="flex gap-3 lg:mb-0 mb-3 items-center">
                                {
                                    filters.map((item, index) => (
                                        <a key={index} className="text-xs cursor-pointer"> {item.name}</a>
                                    ))
                                }
                            </div>
                            <div className="flex gap-4 flex-wrap  justify-center">
                                <Input leftIcon={searchIcon} />
                                <div className="flex">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xs">Show</span>
                                        {children}
                                        <span className="text-xs">{title} per page</span>
                                    </div>
                                    <div className='flex items-center ml-2'>
                                    <p className="text-xs">Showing <span className='font-bold'> {(pageNumber - 1) * limit + 1}-{(((pageNumber-1 )* limit) + limit) > totalRecords ? totalRecords : (((pageNumber-1 ) * limit )+ limit)}</span> of {totalRecords} entries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                }
                <div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                                <tr>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div className="flex items-center">
                                            <label className="inline-flex">
                                                <span className="sr-only">Select all</span>
                                                <input className="form-checkbox" type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    {
                                        columns.map((column, index) => (
                                            <td key={index} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold">{column.name}</div>
                                            </td>
                                        ))
                                    }
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <span className="sr-only">Menu</span>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm divide-y divide-slate-200">
                                {
                                    rows.map((rowsItem, index) => (
                                        <tr key={index}>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                <div className="flex items-center">
                                                    <label className="inline-flex">
                                                        <span className="sr-only">Select all</span>
                                                        <input className="form-checkbox" type="checkbox" />
                                                    </label>
                                                </div>
                                            </td>
                                            {
                                                rowsItem.map((item, index) => (
                                                    <td key={index} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="flex ">

                                                            {
                                                                item.columnType === columnEnum.rating && <Rating value={item.value} />
                                                            }
                                                            {
                                                                item.columnType === columnEnum.text &&
                                                                <div className={` font-thin cursor-pointer ${item.isLink ? 'underline' : ''}`}
                                                                    onClick={() => coloumnClick(item)} >
                                                                    {item.value}
                                                                </div>
                                                            }
                                                            {
                                                                item.columnType === columnEnum.status &&
                                                                <StatusBadge value={item.value} />
                                                            }
                                                            {
                                                                item.columnType === columnEnum.type &&
                                                                <StatusBadge value={item.value} />
                                                            }
                                                            {
                                                                item.columnType === columnEnum.action &&
                                                                <>
                                                                    <div className="flex gap-4">
                                                                        {
                                                                            item.value.map((valueItem, key) => (
                                                                                <a key={key} className="underline cursor-pointer"
                                                                                    onClick={() => coloumnClick(
                                                                                        { ...valueItem, key: item.key, id: item.id })}>

                                                                                    {valueItem.value}
                                                                                </a>
                                                                            ))
                                                                        }
                                                                    </div>

                                                                </>
                                                            }
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Table;

