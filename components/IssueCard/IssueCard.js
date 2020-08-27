import { useObserver } from 'mobx-react'
import { useIssueStore } from '../../contexts/IssueContext'

const IssueCard = () => {
  const issueStore = useIssueStore()

  if (issueStore.isLoading) return useObserver(() => issueStore.isLoadingString)
  if (issueStore.isLoading) return useObserver(() => issueStore.isLoadingString)

  return useObserver(() => (
    <>
      <ul>
        {issueStore.issues.map((issue) => (
          <li key={issue.key}>{issue.key}</li>
        ))}
      </ul>
    </>
  ))
}

export default IssueCard
