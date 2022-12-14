import Button from "../../../components/Button";
import { columnEnum } from "../../table/columnEnum";
import Table from "../../table/Table";

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
const Subscribers = () => {
    return (
        <div className="bg-white p-4">
            <h5 className="text-sm text-bold text-black mb-3">Subscribers</h5>
            <Table columns={columns}
                rows={rows}
                title={"Subscribers"}
                isHeader={false}
            />
            <div className="mt-3 flex justify-center">
                <Button title="View all subscribers" />
            </div>
        </div>
    )
}
export default Subscribers;