import { Container } from "./styles"

import { FiSearch } from "react-icons/fi";

export function Search({searchTerm, ...rest}) {
    return(
        <Container>
            <FiSearch />

            <input  {...rest} onChange={(e) => { searchTerm(e.target.value) }} />
        </Container>
    )
}