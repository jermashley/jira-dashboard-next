import { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react'
import createIssueStore from '../stores/IssueStore'

const IssueContext = createContext(null)

export const IssueProvider = ({ children }) => {
  const issueStore = useLocalStore(createIssueStore)

  return <IssueContext.Provider value={issueStore}>{children}</IssueContext.Provider>
}

export const useIssueStore = () => useContext(IssueContext)
