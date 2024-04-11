import { Container } from "./styles";

import { GoPlus, GoX } from "react-icons/go";

export function InputIngredient({isNew, onClick, value, ...rest}) {
    return(
        <Container isNew={isNew} >
            <input 
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            {isNew ? <GoPlus onClick={onClick} /> : <GoX onClick={onClick} />}
        </Container>
    )
}