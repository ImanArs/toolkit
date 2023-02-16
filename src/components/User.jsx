import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setLastName } from '../features/user/userSlice'

const User = () => {

  const dispatch = useDispatch()
  const name = useSelector(state => state.user.firstName)
  const lastName = useSelector(state => state.user.lastName)
  return (
    <div>
        <input type="text" onChange={e => dispatch(setFirstName(e.target.value))} />
        <input type="text" onChange={e => dispatch(setLastName(e.target.value))} />
        <div>{name}</div>
        <div>{lastName}</div>
    </div>
  )
}

export default User