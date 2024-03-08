import { Container } from "./styles";

import { IoIosArrowDown } from "react-icons/io";

export function Select({children, ...rest}) {
    return (
        <Container>
            <select {...rest}>
                {children}
            </select>

            <IoIosArrowDown/>
        </Container>
    )
}