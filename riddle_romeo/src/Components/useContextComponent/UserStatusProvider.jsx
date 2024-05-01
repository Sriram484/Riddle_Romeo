import React, { createContext, useState } from 'react';

export const UserStatusContext = createContext();

const UserStatusProvider = ({children}) => {
    const [userStatus, setUserStatus] = useState({
        userId: "",
        scoreId: "",
        status: false
      });

      const contextValue = {
        userStatus,
        setUserStatus,
      };
    
      return (
        <UserStatusContext.Provider value={{ userStatus, setUserStatus }}>
            {children}
        </UserStatusContext.Provider>
      );
}

export default UserStatusProvider
