import type { Participant } from "../../../../model/types";
import Headline from "../../headline/Headline";
import ParticipantPayHistory from "../../payHistory/ParticipantPayHistory";

const ParticipantDetails = () => {

    const participant: Participant = {
        id: 0,
        name: "Thorsten",
        toPay: 1000.00,
        totalAmountPaid: 420.69
    }

    return (
        <span className="participant-details">
            <Headline text={ participant.name } isEditable={ true } />      {/* TODO: Add logic to change name */}
            { participant.totalAmountPaid }$/{ participant.toPay }$
            <ParticipantPayHistory />
        </span>
    )
}

export default ParticipantDetails;