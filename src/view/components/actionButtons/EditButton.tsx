
interface editButtonProps {

}

const EditButton: React.FC<editButtonProps> = () => {

    const handleClick = () => {
        console.log("Edit");
        
    }

    return (
                <span 
                    className="edit-button"
                    onClick={ handleClick }
                >
                    <img src="./icons/edit_icon.svg" alt="EDIT" /> 
                </span>
    )
}

export default EditButton;