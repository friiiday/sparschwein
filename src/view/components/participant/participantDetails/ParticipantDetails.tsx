import type { Participant } from "../../../../model/types";
import Headline from "../../headline/Headline";

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
            <br /> History:
            <br />- xx
            {/* TODO: Add PayHistory */}

        </span>
    )
}

export default ParticipantDetails;