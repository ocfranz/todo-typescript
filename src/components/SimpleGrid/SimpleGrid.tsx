import React, { FC, useEffect } from "react";
import { GridBasic, GridExtended } from "./styles";
interface SimpleGridProps {
    type?: string;
    children: any;
}

const SimpleGrid: FC<SimpleGridProps> = ({ type, children }) => {
    return (
        <>
            {type === "simple" && <GridBasic>{children}</GridBasic>}
            {type === "extended" && <GridExtended>{children}</GridExtended>}
        </>
    );
};
SimpleGrid.defaultProps = {
    type: "simple",
};
export default SimpleGrid;
