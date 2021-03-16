import { useReducer } from 'react'
import { initializeBoard } from '../services/initializeBoard'


export function useBoard() {
    const [ board, dispatch ] = useReducer(reducer, initializeBoard())

    return [ board, dispatch ]

    function reducer(state, action) {

    }
}

