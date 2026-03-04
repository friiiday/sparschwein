import type { Participant } from "../../../model/types"
import ParticipantsList from "../participant/participantsList/ParticipantsList"

interface piggyBankDetailsProps {
    participants:  Participant[];
}

const PiggyBankDetails: React.FC<piggyBankDetailsProps> = ({ participants }) => {

    // TODO: Make dynamic ⬇️
    const dueIn = {days: 6, months: 0, years: 0}
    const toPay = 1000
    const paid = 500

    return (
        <span className="piggy-bank-details">
            <span className="due-in">
                Due-In 
                { dueIn.days } days
                { dueIn.months } months
                { dueIn.years } years
            </span>
            <span className="balance">
                <span className="to-pay">
                    { toPay }
                </span>
                <span className="paid">
                    { paid }
                </span>
            </span>
            <ParticipantsList
                participants={ participants }
                actionButtonsToShow="ALL"
            />
        </span>
    )
}

export default PiggyBankDetails;