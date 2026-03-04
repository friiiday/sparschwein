import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import ActionButtons, { ActionButton } from "../actionButtons/ActionButtons";
import EmptyDisplay from "../emptyDisplay/EmptyDisplay";
import type { PiggyBank } from "../../../model/types";

interface piggyBanksListProps {
    piggyBanks: PiggyBank[]
}

const PiggyBanksList: React.FC<piggyBanksListProps> = ({ piggyBanks }) => {


const piggyBankOverviewColumns: ColumnsType<PiggyBank> = [
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
        <Table<PiggyBank>
            // {...tableProps}
            pagination={ false }
            columns={ piggyBankOverviewColumns }
            showHeader={ false }
            size="small"
            dataSource={ piggyBanks || [] }
            locale={{
              emptyText: <EmptyDisplay emptyOption="PIGGYBANKS" />
            }}
        />
    )
}

export default PiggyBanksList;