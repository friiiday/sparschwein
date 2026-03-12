import type { ActionButtons } from "../../../model/types";

const EditButton: React.FC<ActionButtons> = ({ editCallback }) => {

    return (
                <span 
                    className="edit-button"
                    onClick={ editCallback }
                >
                    <img src="/icons/edit_icon.svg" alt="EDIT" /> 
                </span>
    )
}

export default EditButton;