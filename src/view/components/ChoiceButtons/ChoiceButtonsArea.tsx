import type { ChoiceButtons } from "../../../model/types";
import ChoiceButton from "./ChoiceButton";


const ChoiceButtonsArea: React.FC<ChoiceButtons> = ({ negative, positive }) => {

    const displayChoiceButtons = negative !== undefined && positive !== undefined;


    return (
        <>
        {
            displayChoiceButtons &&
                <span className="choice-buttons-area">
                    <span id="negative">
                        <ChoiceButton title={ negative.title } onClick={ negative.onClick } />
                    </span>
                    <span id="positive">
                        <ChoiceButton title={ positive.title } onClick={ positive.onClick } />
                    </span>
                </span>
        }
        </>
    )
}

export default ChoiceButtonsArea;