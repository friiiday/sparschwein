import { Empty, Typography } from "antd"

export const EmptyOptions = {
  PARTICIPANTS: "PARTICIPANTS",
  PIGGYBANKS: "PIGGYBANKS",
} as const;

export type EmptyOptions = (typeof EmptyOptions)[keyof typeof EmptyOptions];

interface emptyDisplayprops {
    emptyOption: EmptyOptions
}


const EmptyDisplay: React.FC<emptyDisplayprops> = ({ emptyOption }) => {
    
    const emptyString = EmptyOptions.PARTICIPANTS == emptyOption ? "participants" : "piggybanks"

    return (
        <Empty
            image="/icons/emote_happy_icon.svg"
            styles={{ image: { height: 60 } }}
            description={
            <Typography.Text>
                No { emptyString } found
            </Typography.Text>
            }
        >
        </Empty>
    )
}

export default EmptyDisplay;