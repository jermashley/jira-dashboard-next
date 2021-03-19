import { useObserver } from 'mobx-react'
import { useIssueStore } from '../../contexts/IssueContext'

const IssueCard = () => {
  const issueStore = useIssueStore()

  if (issueStore.isLoading) return useObserver(() => issueStore.isLoadingString)
  if (issueStore.isError) return useObserver(() => issueStore.isErrorString)

  return useObserver(() => (
    <>
      <ul>
        {issueStore.issues !== undefined
          ? issueStore.issues.map((issue) => <li key={issue.key}>{issue.key}</li>)
          : `No issues to display`}
      </ul>
    </>
  ))
}

export default IssueCard
