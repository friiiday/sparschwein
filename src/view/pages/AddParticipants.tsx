import { useState } from "react";
import AddButton from "../components/addButton/AddButton";
import ChoiceButtonsArea from "../components/ChoiceButtons/ChoiceButtonsArea";
import DefaultLayout from "../components/layouts/defaultLayout/DefaultLayout";
import type { Participant } from "../../model/types";
import ParticipantsList from "../components/participant/participantsList/ParticipantsList";
import ModalParticipantAdd from "../components/modals/ModalParticipantAdd";


const AddParticipants = () => {

    const [participants, setParticipants] = useState<Participant[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    negative={{ title: "Back" }}
                    positive={{ title: "Create" }}
                />
            }
        >   
            <ModalParticipantAdd 
                isModalOpen={ isModalOpen } 
                onOk={ handleOk }
                onCancel={ handleCancel }
            />


            <AddButton title="Add" onClick={ handleClickedAdd }/>

            <ParticipantsList participants={ participants }/>
            {/* {
                participants.length == 0 &&
                    <EmptyDisplay emptyOption="PARTICIPANTS" />
            } */}

        </DefaultLayout>
    )
}

export default AddParticipants;