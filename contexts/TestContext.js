import { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react'
import createTestStore from '../stores/TestStore'

const TestContext = createContext(null)

export const TestProvider = ({ children }) => {
  const testStore = useLocalStore(createTestStore)

  return <TestContext.Provider value={testStore}>{children}</TestContext.Provider>
}

export const useTestStore = () => useContext(TestContext)
