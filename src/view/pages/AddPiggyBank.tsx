import { useNavigate } from "react-router-dom"
import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea"
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBankForm from "../components/piggyBankForm/PiggyBankForm"

const AddPiggyBank = () => {

    const navigate = useNavigate()

    const handleClickedNegative = () => navigate(-1)
    const handleClickedPositive = () => navigate("/participants/add")

    return (
        <DefaultLayout
            viewHeadline="New PiggyBank"
            choiceButtons={
                <ChoiceButtonsArea 
                    negative={{ title: "Back", onClick() {
                        handleClickedNegative()
                    }, }}
                    positive={{ title: "Create", onClick() {
                        handleClickedPositive()
                    }, }}
                />
            }    
        >
            <PiggyBankForm />
        </DefaultLayout>
    )
}

export default AddPiggyBank;