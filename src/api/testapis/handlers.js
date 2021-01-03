export let hello = (request, h) => {
  const response = h.response('Hello, world');
  response.type('text/plain');
  return response;
};

