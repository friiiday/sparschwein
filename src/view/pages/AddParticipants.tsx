import { useState } from "react";
import AddButton from "../components/addButton/AddButton";
import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea";
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout";
import ParticipantsList from "../components/participant/participantsList/ParticipantsList";
import ModalParticipantAdd from "../components/modals/ModalParticipantAdd";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../control/hooks/useLocalStorage";
import { useSessionStorage } from "../../control/hooks/useSessionStorage";
import type { Participant, PiggyBankData } from "../../model/types";


const AddParticipants = () => {

    const [participants, setParticipants] = useState<Participant[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate()


    const [currentPiggyBankData, setCurrentPiggyBankData] = useSessionStorage<PiggyBankData>("current-piggybank", {
        name: "",
        description: "",
        amountPaid: null,
        totalAmount: null,
        due: null,
        participants: []
    });

    const [__, setPiggyBankData] = useLocalStorage<PiggyBankData[]>("your-piggy-banks", [])

    const saveToLocalStorage = () => {
        setPiggyBankData(prev => ([
            ...prev,
            currentPiggyBankData
        ]))
    }

    const clearCurrentPiggyBankData = () => {
        setCurrentPiggyBankData(() => ({
            name: "",
            description: "",
            totalAmount: null,
            amountPaid: null,
            due: null,
            participants: []
        }))
    }

    const handleClickedNegative = () => navigate(-1)
    const handleClickedPositive = () => {
    
        saveToLocalStorage()
        clearCurrentPiggyBankData()

        navigate("/piggybanks")
    }


    const updateParticipants = (newParticipant: Participant) => { 
        setParticipants(currentParticipants => [...currentParticipants, newParticipant]); 
    }

    const handleClickedAdd = () => {
        setIsModalOpen(true)
    }

    const handleOk = (newParticipant: Participant) => {
        updateParticipants(newParticipant)
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <DefaultLayout
            viewHeadline="Participants"
            choiceButtons={
                <ChoiceButtonsArea 
                    negative={{ title: "Back", onClick() {
                        handleClickedNegative()
                    }, }}
                    positive={{ title: "Create", onClick() {
                        handleClickedPositive()
                    }, }}
                />
            }
        >   
            <ModalParticipantAdd 
                isModalOpen={ isModalOpen } 
                onOk={ handleOk }
                onCancel={ handleCancel }
            />


            <AddButton title="Add" onClick={ handleClickedAdd }/>

            <ParticipantsList 
                participants={ participants }
                actionButtonsToShow="EDIT"
            />

        </DefaultLayout>
    )
}

export default AddParticipants;