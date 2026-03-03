import type { ColumnsType } from "antd/es/table";
import type { ParticipantContributionHistory } from "../../../model/types";
import ActionButtons, { ActionButton } from "../actionButtons/ActionButtons";
import Table from "antd/es/table";


const ParticipantPayHistory = () => {

    const data: ParticipantContributionHistory[] = [
    {
        date: "01.01.2020",
        amount: 20.00
    },
    {
        date: "01.01.2021",
        amount: 30.00
    },
    {
        date: "01.01.2022",
        amount: 40.00
    },
    ]

    const participantContributionHistoryColumns: ColumnsType<ParticipantContributionHistory> = [
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
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

    // const tableProps: TableProps<PiggyBankOverviewType> = {
    //     // bordered,
    //     // loading,
    //     // size,
    //     // expandable,
    //     showHeader=false
    //   };


    return (
        <Table<ParticipantContributionHistory>
            // {...tableProps}
            pagination={ false }
            columns={ participantContributionHistoryColumns }
            showHeader={ false }
            size="small"
            dataSource={ data }
        />
    )
}

export default ParticipantPayHistory;