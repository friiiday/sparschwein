import { useNavigate } from "react-router-dom";
import type { ChoiceButtons } from "../../../model/types";
import ChoiceButton from "./ChoiceButton";


const ChoiceButtonsArea: React.FC<ChoiceButtons> = ({ negative, positive }) => {

    const displayChoiceButtons = negative !== undefined && positive !== undefined;
    const areInputsValid = true;   // TODO: Actually check

    const navigate = useNavigate()

    const handleClickedNegative = () => {
        navigate(-1)        
    }

    const handleClickedPositive = () => {
        if (areInputsValid) {
            navigate("/participants/add")
        }
        

    }

    return (
        <>
        {
            displayChoiceButtons &&
                <span className="choice-buttons-area">
                    <span id="negative">
                        <ChoiceButton title={ negative.title } onClick={ handleClickedNegative } />
                    </span>
                    <span id="positive">
                        <ChoiceButton title={ positive.title } onClick={ handleClickedPositive } />
                    </span>
                </span>
        }
        </>
    )
}

export default ChoiceButtonsArea;