import type { ColumnsType, TableProps } from "antd/es/table";
import Table from "antd/es/table";
import ActionButtons, { ActionButton } from "../actionButtons/ActionButtons";

const PiggyBanksList = () => {

type PiggyBanksListType = {
    key: number;
    id: number;
    name: string;
    totalAmount: number;  // FIXME: should be calculated beforhand
    amountPaid: number;   // FIXME: should be calculated beforhand
    dueIn: number; // delta due - today
}


const data: PiggyBanksListType[] = [
{
    key: 0,
    id: 1,
    name: "Some name",
    totalAmount: 1000.00,
    amountPaid: 0.00,
    dueIn: 5
},
{
    key: 1,
    id: 2,
    name: "Some other name",
    totalAmount: 1001.00,
    amountPaid: 346.66,
    dueIn: 10
},
{
    key: 2,
    id: 3,
    name: "A project",
    totalAmount: 1000,
    amountPaid: 0.06,
    dueIn: 1000
},
]

const piggyBankOverviewColumns: ColumnsType<PiggyBanksListType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'totalAmount',
    dataIndex: 'totalAmount',
  },
  {
    title: 'amountPaid',
    dataIndex: 'amountPaid'
  },
  {
    title: "dueIn",
    dataIndex: "dueIn"
  },
  {
    title: 'action',
    key: 'action',
    render: () => (
        <ActionButtons
          actionButtonToShow={ ActionButton.ALL }   // TODO: make dynamic
          showActionButton={ true }
        />
    ),
  },
];

// const tableProps: TableProps<PiggyBankOverviewType> = {
//     // bordered,
//     // loading,
//     // size,
//     // expandable,
//     showHeader=false
//   };


    return (
        <Table<PiggyBanksListType>
            // {...tableProps}
            pagination={ false }
            columns={ piggyBankOverviewColumns }
            showHeader={ false }
            size="small"
            dataSource={ data }
        />
    )
}

export default PiggyBanksList;