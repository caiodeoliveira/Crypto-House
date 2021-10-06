import React from 'react'
import ButtonProps from './type'
import S from './styles'
const Button = ({
    type,
    id,
    onClick,
    children
}:ButtonProps) => {

    
    const selectType = () => {
        switch(type) {
            case 'submit':
                return(
                    <S.BoxButton>
                        {children}
                    </S.BoxButton>
                )
        }
    }
    return selectType();
}

export default Button;