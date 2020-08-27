import useSWR from 'swr'
import IssueCard from '../components/IssueCard/IssueCard'
import { defaultIssues, PROJECT_PDEV, SOFTWARE_PIPELINE } from '../lib/constants'
import { fetchIssuesByJqlSearch } from '../lib/fetcher'
import { useIssueStore } from '../contexts/IssueContext'

const getIssues = () => {
  const issueStore = useIssueStore()

  const { data, error } = useSWR(
    defaultIssues(PROJECT_PDEV, SOFTWARE_PIPELINE, 30),
    fetchIssuesByJqlSearch
  )

  issueStore.setIssues(data?.issues)
  issueStore.setIsLoading(!error && !data)
  issueStore.setIsError(error)
}

const Issues = () => {
  getIssues()

  return (
    <>
      <IssueCard />
    </>
  )
}

export default Issues
