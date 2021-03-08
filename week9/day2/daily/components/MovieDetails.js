import {moviesReducer} from '../reducers'
import {watchme} from '../actions'
import {connect} from 'react-redux';

export const MovieDetails = ({item}) => {
    console.log({item});
    return( 
        <>     
    <div>title {item.title}</div>
    <div>release {item.releaseDate}</div>
    <div>rating {item.rating}</div>
    </>
    )
}