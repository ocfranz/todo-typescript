import React, { FC } from "react";
import { EmptyStyled, EmptyStrong, EmptyMessage } from "./styles";
interface EmptyDisplayProps {
    dayName: string;
}
const EmptyDisplay: FC<EmptyDisplayProps> = ({ dayName }) => {
    return (
        <EmptyStyled>
            <EmptyStrong>No tasks yet for {dayName}</EmptyStrong>
            <EmptyMessage>Click the blue button to add tasks</EmptyMessage>
        </EmptyStyled>
    );
};

export default EmptyDisplay;
