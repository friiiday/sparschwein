import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import ActionButtons, { ActionButton } from "../../actionButtons/ActionButtons";
import type { Participant } from "../../../../model/types";
import EmptyDisplay from "../../emptyDisplay/EmptyDisplay";

interface participantsListProps {
  participants:  Participant[];
  actionButtonsToShow: ActionButton
}

const ParticipantsList: React.FC<participantsListProps> = ({ participants, actionButtonsToShow }) => {


const participantsListColumns: ColumnsType<Participant> = [
  {
    title: "key",
    dataIndex:"key"
  },
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
          actionButtonToShow={ actionButtonsToShow }   // TODO: make dynamic
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