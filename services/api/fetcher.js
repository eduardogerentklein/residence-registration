export const postAsync = async (url, body = {}) => {
  const response = await fetch(`http://localhost:3004${url}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return response
}

export const getAsync = async url => {
  const response = await fetch(`http://localhost:3004${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response
}
