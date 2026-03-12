
interface balanceProps {
    total: number;
    paid: number;
}

const Balance: React.FC<balanceProps> = ({ total, paid }) => {

    return (
        <span className="balance">
            Balance:
            <span className="paid">{ paid }</span>
            /
            <span className="total">{ total }</span>
        </span>
    )
}

export default Balance;