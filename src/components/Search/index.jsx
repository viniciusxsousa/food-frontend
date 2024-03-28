import { Container } from "./styles"

import { FiSearch } from "react-icons/fi";

export function Search({...rest}) {
    return(
        <Container>
            <FiSearch />

            <input  {...rest}/>
        </Container>
    )
}