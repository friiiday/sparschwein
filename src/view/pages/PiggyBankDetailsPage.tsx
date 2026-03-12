import { useLocalStorage } from "../../control/hooks/useLocalStorage";
import type { PiggyBankData } from "../../model/types"
import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea"
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBankDetails from "../components/piggyBankDetails/PiggyBankDetails"
import { useParams } from "react-router-dom";

const PiggyBankDetailsPage = () => {

    const { id } = useParams();

    const [piggyBanks, _] = useLocalStorage<PiggyBankData[]>("your-piggy-banks", [])

    const handleClickedNegative = () => {
        console.log(id);   
    }

    const idNumber = Number(id)

    return (
        <DefaultLayout
            viewHeadline={ piggyBanks[idNumber].name }
            choiceButtons={
                <ChoiceButtonsArea 
                    negative={{ 
                        title: "Back", onClick() {
                            handleClickedNegative()
                        }, 
                    }}
                    // FIXME: Why have to add both positive and negative to show?
                    positive={{ 
                        title: "", onClick() {}, 
                    }}
                />
            }
        >
            <PiggyBankDetails
                piggyBankData={ piggyBanks[idNumber] }
            />
        </DefaultLayout>
    )
}

export default PiggyBankDetailsPage;