import React from "react"

interface PureAction<T> {
    type: T
}

interface PayloadAction<T, P> {
    type: T,
    payload: P
}


function createActionCreators<A extends PayloadAction<A['type'], A['payload']>>(type: A['type']): (payload: A['payload']) => A
function createActionCreators<A extends PureAction<A['type']>>(type: A['type']): () => A

function createActionCreators<A extends {type: any, payload: any}> (type: A['type']) {
    return (payload: A['payload']) => {
        if(payload === null) return {
            type
        }
        return {
            type,
            payload
        }

    }
}
enum ActionTypes {
    Add = 'ADD',
    Set = 'SET'
}

interface AddAcction extends PureAction<ActionTypes.Add>{}
interface SetAction extends PayloadAction<ActionTypes.Set, {count: number, }>{

}


const Test = () => {
    return (
        <h2>hello</h2>
    )
}

export default Test;