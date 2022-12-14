import { columnEnum } from "../../../partials/table/columnEnum";
import Dropdown from "../../../partials/table/Dropdown";
import Table from "../../../partials/table/Table";
import TablePagination from "../../../partials/table/TablePagination";

const columns = [
    {
        name: 'Name',
        orderBy: true,
        key: 'name'
    },
    {
        name: 'Plan',
        orderBy: true,
        key: 'plan'
    },
    {
        name: 'Status',
        orderBy: true,
        key: 'status'

    },
    {
        name: 'Start',
        orderBy: true,
        key: 'start'
    },
    {
        name: 'Due',
        orderBy: false,
        key: 'due'
    },
    {
        name: 'Amount',
        orderBy: false,
        key: 'amount',

    },
    {
        name: 'Actions',
        orderBy: false,
        key: 'action',
    }
]
const rows = [
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
    [
        {
            value: 'ThePartyBoi Entertainment',
            columnType: columnEnum.text,
            key: 'na,e',
        },
        {
            value: 'Monthly',
            columnType: columnEnum.text,
            key: 'plan',
        },
        {
            value: 'Overdue by 1 day',
            columnType: columnEnum.text,
            key: 'status',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'start',
        },
        {
            value: '25.09.2022',
            columnType: columnEnum.text,
            key: 'due',
        },
        {
            value: 'NGN 550',
            columnType: columnEnum.text,
            key: 'amount',
        },
        {
            value: [
                {
                    isEdit: true,
                    value: 'Click to modify'
                }
            ],
            columnType: columnEnum.action,
            key: 'action',
        }

    ],
]
const SubscriptionTable = () => {
    return (
        <>
            <Table columns={columns}
                rows={rows}
                title={"Subscriptions"}
                totalRecords={40}
                pageNumber={1}
                limit={10}
            >
                <Dropdown handleSelectedOption={() => { }} limit={10} />
            </Table>
            <TablePagination
                title={"Subscriptions"}
                totalRecords={40}
                pageNumber={1}
                limit={10}
                handleShowData={() => { }}
                paginate={() => { }}
                paginateBack={() => { }}
                paginateFront={() => { }}
            />
        </>
    )
}
export default SubscriptionTable;