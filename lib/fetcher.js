import axios from 'axios'

const token = () => {
  // Set token depending on where the call is made.
  if (!process.browser) {
    return `Basic ${Buffer.from(
      `${process.env.USER_EMAIL}:${process.env.TOKEN}`,
      `binary`
    ).toString(`base64`)}`
  }

  return `Basic ${btoa(`${process.env.NEXT_PUBLIC_USER_EMAIL}:${process.env.NEXT_PUBLIC_TOKEN}`)}`
}

export const fetchIssuesByJqlSearch = (jql) => {
  return axios
    .get(`https://prologuetech.atlassian.net/rest/api/3/search?jql=${encodeURIComponent(jql)}`, {
      headers: {
        Authorization: token(),
        'Content-Type': `application/json`,
      },
    })
    .then((res) => res.data)
}

export const fetchIssueByKey = (key) => {
  console.log(key ?? `Howdy`)
}
