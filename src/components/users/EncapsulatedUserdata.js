import React from 'react'
import Style from './Layout.module.css'

const EncapsulatedUserdata = ({address, updateData}) => {

        return <div className={`${Style.card} ${Style.enc_data}`}  >
            <label>Street:<input type="text" defaultValue={address?.street} name="street"  onChange={updateData}/></label>
            <label>City: <input type="text" defaultValue={address?.city} name="city" onChange={updateData}/></label>
            <label>Zip Code:<input type="text" defaultValue={address?.zipcode} name="zipcode" onChange={updateData}/></label>
        </div>

   
}
 
export default React.memo(EncapsulatedUserdata);