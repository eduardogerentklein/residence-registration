export const postAsync = async (url, body = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return response
}
