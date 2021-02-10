
const responseMiddleware = (request, response) => {
  const { err } = response;
  if (err) {
    const { message } = err;
    response.status(400).json({ result: 'error', message });
  } else {
    const { body } = response;
    response.status(200).json({ result: 'ok', body });
  }
}

module.exports = responseMiddleware;