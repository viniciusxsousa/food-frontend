import { Container } from "./styles";

import { GoPlus, GoX } from "react-icons/go";

export function InputIngredient({isnew, onClick, value, ...rest}) {
    return(
        <Container isnew={isnew} >

            <input 
                type='text'
                value={value}
                readOnly={!isnew}
                {...rest}
            />

            {isnew ? <GoPlus onClick={onClick} /> : <GoX onClick={onClick} />}
        </Container>
    )
}