import { Form, Input, Modal } from "antd";
import type { Participant } from "../../../model/types";
import { useState } from "react";

interface modalParticipantAdd {
    isModalOpen: boolean;
    onOk?: (newParticipant: Participant) => void
    onCancel: () => void
}

const ModalParticipantAdd: React.FC<modalParticipantAdd> = ({ isModalOpen, onOk, onCancel }) => {

    const [participantName, setParticipantName] = useState<string>("")


    const clearInput = () => setParticipantName("")

    const handleClickedOk = () => { 

        const newParticipant: Participant = { 
            id: 123, // TODO: make dynamic
            name: participantName ,
            toPay: 0.00,
            totalAmountPaid: 0.00  
        }; 

        onOk?.(newParticipant); 
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