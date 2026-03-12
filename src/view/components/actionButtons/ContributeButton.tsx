import type { ActionButtons } from "../../../model/types";

const ContributeButton: React.FC<ActionButtons> = ({ contributeCallback }) => {

    return (
                <span 
                    className="contribute-button"
                    onClick={ contributeCallback }
                >
                    <img src="/icons/contribute_icon.svg" alt="CONTRIBUTE" />  
                </span>
    )
}

export default ContributeButton;