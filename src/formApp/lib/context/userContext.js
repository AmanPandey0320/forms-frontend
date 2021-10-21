import React from 'react'
const UserContext = React.createContext({
    verified:false
})
export const UserProvider = UserContext.Provider
export default UserContext