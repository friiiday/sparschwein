
export type Participant = {
    id: number;
    name: string;
    toPay: number;  // FIXME: should be calculated beforhand
    totalAmountPaid: number;   // FIXME: should be calculated beforhand
}

export type ParticipantContributionHistory = {
    date: string;
    amount: number;
}

export type PiggyBankContributionHistory = {
    name: string;
    date: string;
    amount: number;
}

export type ChoiceButtons = {
    positive: {
        title: string;
    }
    negative: {
        title: string;
    }
}