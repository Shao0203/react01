async function request(url = '', method = 'GET', data) {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer SomeJwtToken',
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const error = await res.json();
    const e = new Error(error.status);
    e.error = error;
    e.status = error.status;
    throw e;
  }

  const result = await res.json();
  return result;
}

export default request;
