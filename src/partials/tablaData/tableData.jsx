import Button from "../../components/Button";
import Input from "../../components/Input";
import { columnEnum } from "../table/columnEnum";
import Rating from "../table/Rating";
import StatusBadge from "../table/Statusbadge";
import searchIcon from '../../images/icons/searchIcon.svg';
import organizedIcon from '../../images/icons/organized.svg';


const TableData = ({ columns,
    rows,
    children,
    title,
    coloumnClick,
    filters = []
}) => {

    return (
        <>
            <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                <header className="px-5 py-4">
                    <div className="flex lg:justify-between flex-wrap justify-center">
                        <div className="flex gap-3 lg:mb-0 mb-3 items-center">
                            <Input leftIcon={searchIcon} />
                        </div>
                        <div className="flex gap-3 border border-black items-center p-2">
                            <span className="font-thin text-xs">Organized by</span>
                            <img src={organizedIcon} className="h-[15px] cursor-pointer" />
                        </div>
                    </div>
                </header>
                <div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                                <tr>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div className="flex items-center">
                                            <label className="inline-flex">
                                                #
                                            </label>
                                        </div>
                                    </th>
                                    {
                                        columns.map((column, index) => (
                                            <th key={index} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                {

                                                    column.isImage ? <img src={column.name} />
                                                        :
                                                        column.key === "action" ? <></>
                                                            :
                                                            <div className="font-semibold">{column.name}</div>
                                                }

                                            </th>
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
                                                {index + 1}
                                            </td>
                                            {
                                                rowsItem.map((item, index) => (
                                                    <td key={index} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="flex justify-center items-center">

                                                            {item.image && <img src={item.image} className="w-[50px] h-[30px]" />}
                                                            {
                                                                item.columnType === columnEnum.rating && <Rating value={item.value} />
                                                            }
                                                            {
                                                                item.columnType === columnEnum.text &&
                                                                <div className="text-center font-thin cursor-pointer "
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
                                                                                        { ...valueItem, key: item.key })}>

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
export default TableData;

