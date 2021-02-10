const URL = 'http://localhost:8080';

export async function callApi(endpoint, method, body = {}, headers = {}) {
  const url = URL + endpoint;
  const options = {
    method,
    headers,
  };

  if (method === 'POST') {
    options.body = body;
  }

  return fetch(url, options)
    .then(response => response.json())
    .then(response => {
      if (response.result === 'ok') {
        return response.body
      } else {
        throw new Error(response.message)
      }
    })
    .catch(e => alert(e.message));
}