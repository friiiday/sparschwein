
interface addButtonProps {
    title: string;
    onClick: () => void;
}

const AddButton = ({ title, onClick }: addButtonProps) => {

    return (
        <span className="add-new-button" onClick={ onClick } style={{ height: "44px", width: "44px", backgroundColor: "green"}}>
            <span className="icon" style={{ height: "25px", width: "25px", backgroundColor: "darkgreen", borderRadius: "15px"}}>
                <img src="/icons/add_icon.svg" alt="+" />
            </span>
            { title }
        </span>
    )
}

export default AddButton;