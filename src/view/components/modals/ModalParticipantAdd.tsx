import { Form, Input, Modal } from "antd";
import type { Participant, PiggyBankData } from "../../../model/types";
import { useState } from "react";
import { useSessionStorage } from "../../../control/hooks/useSessionStorage";

interface modalParticipantAdd {
    isModalOpen: boolean;
    onOk?: (newParticipant: Participant) => void
    onCancel: () => void
}

const ModalParticipantAdd: React.FC<modalParticipantAdd> = ({ isModalOpen, onOk, onCancel }) => {

    const [participantName, setParticipantName] = useState<string>("")
    const [id, setId] = useState<number>(0)

    const [_, setFormData] = useSessionStorage<PiggyBankData>("current-piggybank", {
        name: "",
        description: "",
        totalAmount: null,
        due: null,
        participants: []
    });

    const updateFormData = (newParticipant: Participant) => {
        setFormData(prev => ({
            ...prev, 
            participants: [...prev.participants, newParticipant]
        }))
    }

    const clearInput = () => setParticipantName("")

    const handleClickedOk = () => { 

        setId(id+1)

        const newParticipant: Participant = { 
            id,
            name: participantName ,
            toPay: 0.00,
            totalAmountPaid: 0.00  
        }; 

        onOk?.(newParticipant); 
        updateFormData(newParticipant)
        clearInput()
    };

    const handleCancel = () => {
        clearInput()
        onCancel();
    };


    const handleInputChange = (value: string) => {
        setParticipantName(value)
    }

    return (
        <Modal
            title="Add participant"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={ isModalOpen }
            onOk={ handleClickedOk }
            onCancel={ handleCancel }
        >
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
            >
                <Form.Item label="Name">
                    <Input 
                    value={ participantName }
                    onChange={ (e) => handleInputChange(e.currentTarget.value) }
                    />
                </Form.Item>                
            </Form>
            
      </Modal>
    )
}

export default ModalParticipantAdd;