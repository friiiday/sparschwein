import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea"
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBankDetails from "../components/piggyBankDetails/PiggyBankDetails"

const AddPiggyBank = () => {

    return (
        <DefaultLayout
            viewHeadline="New PiggyBank"
            choiceButtons={
                <ChoiceButtonsArea 
                    negative={{ title: "Cancel" }}
                    positive={{ title: "Next" }}
                />
            }    
        >
            <PiggyBankDetails />
        </DefaultLayout>
    )
}

export default AddPiggyBank;