import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import ActionButtons, { ActionButton } from "../actionButtons/ActionButtons";
import EmptyDisplay from "../emptyDisplay/EmptyDisplay";
import type { PiggyBankData } from "../../../model/types";
import { useNavigate } from "react-router-dom";

interface piggyBanksListProps {
    piggyBanks: PiggyBankData[]
}

const PiggyBanksList: React.FC<piggyBanksListProps> = ({ piggyBanks }) => {

    const navigate = useNavigate()

    const handleRowClicked = (record: PiggyBankData) => {
        console.log(record);
        navigate(`/piggybanks/details/${ record.id }`)
        
    }

  const piggyBankOverviewColumns: ColumnsType<PiggyBankData> = [
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
            actionButtonToShow={ ActionButton.EDIT }
            showActionButton={ true }
          />
      ),
    },
  ];

    return (
        <Table<PiggyBankData>
            pagination={ false }
            columns={ piggyBankOverviewColumns }
            showHeader={ false }
            size="small"
            dataSource={ piggyBanks || [] }
            locale={{
              emptyText: <EmptyDisplay emptyOption="PIGGYBANKS" />
            }}
            onRow={(record) => (
                { onClick: () => { handleRowClicked(record) }}
            )}
        />
    )
}

export default PiggyBanksList;