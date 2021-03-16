import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Header.propTypes = {
    children: PropTypes.string.isRequired
}

export default function Header({children}) {
    return (
        <HeaderStyled>
            <h1>{children}</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    text-align: center;
`
