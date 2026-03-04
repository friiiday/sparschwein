import type { Participant } from "../../model/types"
import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea"
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBankDetails from "../components/piggyBankDetails/PiggyBankDetails"
import { useParams } from "react-router-dom";

const PiggyBankDetailsPage = () => {

    const { id } = useParams();

    // TODO: Make dynamic ⬇️
    const pgName = "test"
        
    const participants: Participant[] = [
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
        name: "A participant",
        toPay: 1000.00,
        totalAmountPaid: 0.00,
    },
    ]

    return (
        <DefaultLayout
            viewHeadline={ pgName }
            choiceButtons={
                <ChoiceButtonsArea 
                    negative={{ title: "Back" }}
                />
            }
        >
            <PiggyBankDetails
                participants={ participants || [] }
            />
        </DefaultLayout>
    )
}

export default PiggyBankDetailsPage;