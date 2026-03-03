
interface addButtonProps {
    title: string;
}

const AddButton: React.FC<addButtonProps> = ({ title }) => {

    const handleClicked = () => {
        console.log("add new PB");
        
    }

    return (
        <span className="add-new-button" onClick={ handleClicked } style={{ height: "44px", width: "44px", backgroundColor: "green"}}>
            <span className="icon" style={{ height: "25px", width: "25px", backgroundColor: "darkgreen", borderRadius: "15px"}}>
                <img src="./icons/add_icon.svg" alt="+" />
            </span>
            { title }
        </span>
    )
}

export default AddButton;