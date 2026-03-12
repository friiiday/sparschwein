import type { PiggyBankData } from "../../../model/types"
import Balance from "../balance/Balance";
import ParticipantsList from "../participant/participantsList/ParticipantsList"


interface piggyBankDetailsProps {
    piggyBankData:  PiggyBankData;
}

const PiggyBankDetails: React.FC<piggyBankDetailsProps> = ({ piggyBankData }) => {

    const { due, totalAmount, amountPaid, participants } = { ...piggyBankData }

    return (
        <span className="piggy-bank-details">
            <span className="due-in">
                Due-In { due }
            </span>
            <Balance paid={ amountPaid! } total={ totalAmount! } />
            <ParticipantsList
                participants={ participants }
                actionButtonsToShow="ALL"
            />
        </span>
    )
}

export default PiggyBankDetails;