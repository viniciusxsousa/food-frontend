import { Container } from "./styles";

import { GoPlus, GoX } from "react-icons/go";

export function InputIngredient({isNew, onclick, value, ...rest}) {
    return(
        <Container isNew={isNew} >
            <input 
                type='text'
                value={value}
                readonly={!isNew}
                {...rest}
            />

            {isNew ? <GoPlus/> : <GoX/>}
        </Container>
    )
}