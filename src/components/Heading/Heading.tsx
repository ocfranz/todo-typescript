import React, { FC } from "react";
import { HeadingStyled, HeadingWrapper} from './styles';

interface HeadingProps {
    type: string;
    children?: string;
}

const Heading: FC<HeadingProps> = ({ type, children }) => {
    return (
        <HeadingWrapper>
            <HeadingStyled type={type}>{children}</HeadingStyled>
        </HeadingWrapper>
    );
};

export default Heading;
