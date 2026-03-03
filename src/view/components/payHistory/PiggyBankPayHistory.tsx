import type { ColumnsType } from "antd/es/table";
import type { PiggyBankContributionHistory } from "../../../model/types";
import ActionButtons, { ActionButton } from "../actionButtons/ActionButtons";
import Table from "antd/es/table";


const PiggyBankPayHistory = () => {

    const data: PiggyBankContributionHistory[] = [
    {
        name: "Thorsten",
        date: "01.01.2020",
        amount: 20.00
    },
    {
        name: "Micha",
        date: "01.01.2021",
        amount: 30.00
    },
    {
        name: "Justin",
        date: "01.01.2022",
        amount: 40.00
    },
    ]

    const participantContributionHistoryColumns: ColumnsType<PiggyBankContributionHistory> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'action',
        key: 'action',
        render: () => (
            <ActionButtons
            showActionButton={ false }
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
        <Table<PiggyBankContributionHistory>
            // {...tableProps}
            pagination={ false }
            columns={ participantContributionHistoryColumns }
            showHeader={ false }
            size="small"
            dataSource={ data }
        />
    )
}

export default PiggyBankPayHistory;