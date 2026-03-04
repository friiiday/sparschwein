import { useNavigate } from "react-router-dom";
import AddButton from "../components/addButton/AddButton";
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout"
import PiggyBanksList from "../components/piggyBanksList/PiggyBanksList";
import type { PiggyBank } from "../../model/types";

const OverviewPiggyBanks = () => {

    const navigate = useNavigate()

    const handleAdd = () => {
        navigate("/piggybanks/add") 
    }

    // TODO: Make dynamic ⬇️
    const piggyBanks: PiggyBank[] = [
        {
            key: 0,
            id: 1,
            name: "Some name",
            totalAmount: 1000.00,
            amountPaid: 0.00,
            dueIn: 5
        },
        {
            key: 1,
            id: 2,
            name: "Some other name",
            totalAmount: 1001.00,
            amountPaid: 346.66,
            dueIn: 10
        },
        {
            key: 2,
            id: 3,
            name: "A project",
            totalAmount: 1000,
            amountPaid: 0.06,
            dueIn: 1000
        },
    ]

    return (
        <DefaultLayout
            viewHeadline="PiggyBanks">
                <AddButton title="Add" onClick={ handleAdd } />
                <PiggyBanksList
                    piggyBanks={ piggyBanks }
                />
        </DefaultLayout>
    )
}

export default OverviewPiggyBanks;