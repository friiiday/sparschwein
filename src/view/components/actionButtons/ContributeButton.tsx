
interface contributeButtonProps {

}

const ContributeButton: React.FC<contributeButtonProps> = () => {

    const handleClick = () => {
        console.log("contribute");
        
    }

    return (
                <span 
                    className="contribute-button"
                    onClick={ handleClick }
                >
                    <img src="./icons/contribute_icon.svg" alt="CONTRIBUTE" />  
                </span>
    )
}

export default ContributeButton;