import { useNavigate } from "react-router-dom";
import AddButton from "../components/addButton/AddButton";
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBanksList from "../components/piggyBanksList/PiggyBanksList";
import type { PiggyBankData } from "../../model/types";
import { useLocalStorage } from "../../control/hooks/useLocalStorage";

const OverviewPiggyBanks = () => {

    const navigate = useNavigate()

    const handleAdd = () => {
        navigate("/piggybanks/add") 
    }

    const [piggyBanks, _] = useLocalStorage<PiggyBankData[]>("your-piggy-banks", [])
    
    return (
        <DefaultLayout
            viewHeadline="Your Piggy Banks">
                <AddButton title="Add" onClick={ handleAdd } />
                <PiggyBanksList
                    piggyBanks={ piggyBanks }
                />
        </DefaultLayout>
    )
}

export default OverviewPiggyBanks;