import React from 'react';

const Content = ({info}) => {
    const {fname,lname,age,gender,nuts,lac,vegan} = info
           return(
        <>
        <div style={{backgroundColor:'deepskyblue'}}>
        <h3>Entered information</h3>
        <h4>Your name {fname} {lname}</h4>
        <h4>Your Age {age}</h4>
        <h4>Your Gender {gender}</h4>
        <h4>Your Destination </h4>
        <h4>Your dietary restrictions:</h4>
        <h5>**Nuts free : {nuts}</h5>
        <h5>**Lactose free : {lac}</h5>
        <h5>**Vegan meal : {vegan}</h5>
        </div>
        </>
    )
}
export default Content