import React from 'react'

const CardLayout = ({ children }) => {
    return (
        <div className="card_stylings p-4 md:p-8 h-full w-full relative">
            {children}
        </div>
    )
}

export default CardLayout
