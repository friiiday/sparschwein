import { useNavigate } from "react-router-dom";
import AddButton from "../components/addButton/AddButton";
import EmptyDisplay from "../components/emptyDisplay/EmptyDisplay";
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"

const OverviewPiggyBanks = () => {

    const navigate = useNavigate()

    const handleAdd = () => {
        navigate("/piggybanks/add") 
    }

    return (
        <DefaultLayout
            viewHeadline="PiggyBanks">
                <EmptyDisplay emptyOption="PIGGYBANKS" />
                <AddButton title="Add" onClick={ handleAdd } />
        </DefaultLayout>
    )
}

export default OverviewPiggyBanks;