/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'

export const AccounterContext = createContext({});

const AccountProvider = ({ children }) => {
  const [listAccount, setListAccount] = useState([])
  
  const [filterListAccount, setFilterListAccount] = useState([])

  const addAccountList = (data) => {
    if(listAccount.find((item) => item.description == data.description)){
      alert("Descrição já utilizada!")
    }
    setListAccount([...listAccount, {
      description: data.description,
      type: data.type,
      value: data.type === "saida" ? Number(data.value * -1) : Number(data.value)
    }])
  }

  const removeAccountList = (data) => {
    const updatedList = listAccount.filter((item) => item.description !== data.description);
    setListAccount(updatedList);
  }

  const filteredAccountList = (filterType) => {
    const listFiltered = listAccount.filter((item) => filterType)
    setFilterListAccount(listFiltered) 
  }

  return(
    <AccounterContext.Provider value={{ listAccount, addAccountList, removeAccountList, filterListAccount}}>
      { children }
    </AccounterContext.Provider>
  )

}


export default AccountProvider;