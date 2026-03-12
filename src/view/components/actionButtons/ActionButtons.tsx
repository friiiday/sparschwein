import ContributeButton from "./ContributeButton";
import EditButton from "./EditButton";


export const ActionButton = {
  EDIT: "EDIT",
  CONTRIBUTE: "CONTRIBUTE",
  ALL: "ALL",
} as const;

export type ActionButton = (typeof ActionButton)[keyof typeof ActionButton];


interface actionButtonsProps {
    showActionButton: boolean;
    actionButtonToShow?: "EDIT" | "CONTRIBUTE" | "ALL";
    editCallback?: () => void;
    contributeCallback?: () => void;
}

export const ActionButtons: React.FC<actionButtonsProps> = ({ showActionButton, actionButtonToShow, editCallback, contributeCallback }) => {

    const showEditButton = ActionButton.EDIT == actionButtonToShow && showActionButton
    const showContributeButton = ActionButton.CONTRIBUTE == actionButtonToShow && showActionButton
    const showAllButtons = ActionButton.ALL == actionButtonToShow && showActionButton
    

    return (
        <span className="action buttons">
            {
                showEditButton
                &&
                    <EditButton editCallback={ editCallback} />
            }
            {
                showContributeButton
                &&
                    <ContributeButton contributeCallback={ contributeCallback } />
            }
            {
                showAllButtons 
                &&
                    <>
                        <EditButton editCallback={ editCallback} />
                        <ContributeButton contributeCallback={ contributeCallback } />
                    </>

            }
            {
                !showActionButton &&
                    <></>
            }
        </span>
    )
}

export default ActionButtons;