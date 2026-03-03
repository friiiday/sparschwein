import type { ColumnsType, TableProps } from "antd/es/table";
import Table from "antd/es/table";
import ActionButtons, { ActionButton } from "../../actionButtons/ActionButtons";
import type { Participant } from "../../../../model/types";
import EmptyDisplay from "../../emptyDisplay/EmptyDisplay";

interface participantsListProps {
  participants:  Participant[];
}

const ParticipantsList = ({ participants }: participantsListProps) => {


// const data: Participant[] = [
// {
//     id: 1,
//     name: "Some name",
//     toPay: 1000.00,
//     totalAmountPaid: 0.00,
// },
// {
//     id: 2,
//     name: "Some other name",
//     toPay: 1000.00,
//     totalAmountPaid: 0.00,
// },
// {
//     id: 3,
//     name: "A project",
//     toPay: 1000.00,
//     totalAmountPaid: 0.00,
// },
// ]

const participantsListColumns: ColumnsType<Participant> = [
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
          actionButtonToShow={ ActionButton.EDIT }   // TODO: make dynamic
          showActionButton={ true }
        />
    ),
  },
];

    return (
        <Table<Participant>
            // {...tableProps}
            pagination={ false }
            columns={ participantsListColumns }
            showHeader={ false }
            size="small"
            dataSource={ participants || [] }
            locale={{
              emptyText: <EmptyDisplay emptyOption="PARTICIPANTS" />
            }}
        />
    )
}

export default ParticipantsList;