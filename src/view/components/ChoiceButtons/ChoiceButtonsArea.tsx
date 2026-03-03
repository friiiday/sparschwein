import ChoiceButton from "./ChoiceButton";


const ChoiceButtonsArea = () => {

    const handleClicked = () => {
        console.log("clicked");
        
    }

    return (
        <span className="choice-buttons-area">
            <ChoiceButton title="Back/Cancel"  onClick={ handleClicked } />
            <ChoiceButton title="Save/Next" onClick={ handleClicked } />
        </span>
    )
}

export default ChoiceButtonsArea;