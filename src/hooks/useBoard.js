import { useReducer } from 'react'
import { initialBoard } from '../services/initialiseBoard'


export function useBoard() {
    const [ board, dispatch ] = useReducer(reducer, initialBoard())

    return [ board, dispatch ]

    function reducer(state, action) {

    }
}

