import {moviesReducer} from '../reducers'
import {watchme} from '../actions'
import {connect} from 'react-redux';

export const MovieList = () => {
    return( 
        <>     
    {
    moviesReducer().map((item,e) => {
       return <><h3 key={e}>{item.title}</h3><button id={e} onClick={()=>watchme(item.title)}>Details</button></>
    })}
    </>
    )
}

