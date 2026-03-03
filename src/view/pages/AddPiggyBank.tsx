import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea"
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBankForm from "../components/piggyBankForm/PiggyBankForm"

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
            <PiggyBankForm />
        </DefaultLayout>
    )
}

export default AddPiggyBank;