import React from 'react'

export const IconContainer = ({ children, color, count, isLike, ...props }) => { //le ...props veut dire : si jamais y'a d'autres props tu les prends et tu les met dans l'objet props
    return (
        <div className={`icon-group ${isLike && 'icon-isLike'}`} {...props}> 
            <div className={`icon-container icon-${color}`}>
                {children}
            </div>
            {count > 0 && <p className={`icon-text icon-text-${color}`}>{count}</p>}
        </div>
    )
}
