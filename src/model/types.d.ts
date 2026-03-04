
export type Participant = {
    id: number;
    name: string;
    toPay: number;  // FIXME: should be calculated beforhand
    totalAmountPaid: number;   // FIXME: should be calculated beforhand
}

export type PiggyBank = {
    key: number;
    id: number;
    name: string;
    totalAmount: number;  // FIXME: should be calculated beforhand
    amountPaid: number;   // FIXME: should be calculated beforhand
    dueIn: number; // delta due - today
}

export type PiggyBankData = {
  name: string;
  description: string;
  totalAmount: number | null;
  due: Dayjs | null;
  participants: Participant[] | [];
};


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
    positive?: {
        title: string;
        onClick: () => void;
    }
    negative?: {
        title: string;
        onClick: () => void;
    }
}