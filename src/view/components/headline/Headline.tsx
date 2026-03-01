import Paragraph from "antd/es/typography/Paragraph"
import { useState } from "react";

interface props {
    text: string;
    isEditable: boolean;
}

const Headline: React.FC<props> = ({ text, isEditable }) => {
    // TODO: Cant turn of editable
    const [headline, setHeadline] = useState(text);

    const editableOptions = () => {
        
        if (isEditable == true) {
            return {
                tooltip: 'Edit',
                onChange: setHeadline
            }
        } else {
            return false
        }
    }

    return (
        <span className="headline">
            <Paragraph
                editable={ editableOptions() }
            >
                { headline }
            </Paragraph>
        </span>
    )
}

export default Headline;