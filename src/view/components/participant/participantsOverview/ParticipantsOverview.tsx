import type { ColumnsType, TableProps } from "antd/es/table";
import Table from "antd/es/table";
import ActionButtons, { ActionButton } from "../../actionButtons/ActionButtons";
import type { Participant } from "../../../../model/types";

const ParticipantsOverview = () => {




const data: Participant[] = [
{
    id: 1,
    name: "Some name",
    toPay: 1000.00,
    totalAmountPaid: 0.00,
},
{
    id: 2,
    name: "Some other name",
    toPay: 1000.00,
    totalAmountPaid: 0.00,
},
{
    id: 3,
    name: "A project",
    toPay: 1000.00,
    totalAmountPaid: 0.00,
},
]

const participantOverviewColumns: ColumnsType<Participant> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'toPay',
    dataIndex: 'toPay',
  },
  {
    title: 'totalAmountPaid',
    dataIndex: 'totalAmountPaid'
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
        <Table<Participant>
            // {...tableProps}
            pagination={ false }
            columns={ participantOverviewColumns }
            showHeader={ false }
            size="small"
            dataSource={ data }
        />
    )
}

export default ParticipantsOverview;