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
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something wrong')
      }
    })
    .then(response => response)
    .catch(e => alert(e.message));
}