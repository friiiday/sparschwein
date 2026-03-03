
interface choiceButtonProps {
    title: string;
    onClick: () => void
}

const ChoiceButton: React.FC<choiceButtonProps> = ({ title, onClick }) => {

    return (
        <span className="choice-button" onClick={ onClick }>
            { title }
        </span>
    )
}

export default ChoiceButton;