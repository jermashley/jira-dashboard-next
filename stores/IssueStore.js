export default function createIssueStore() {
  return {
    issues: [],
    isLoading: false,
    isLoadingString: `Loading issues.`,
    isError: false,
    isErrorString: `Error loading issues.`,
    setIssues(issues) {
      this.issues = issues
    },
    setIsLoading(isLoading) {
      this.isLoading = isLoading
    },
    setIsError(isError) {
      this.isError = isError
    },
  }
}
