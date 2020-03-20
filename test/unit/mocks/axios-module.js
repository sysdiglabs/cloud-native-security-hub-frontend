const axiosMethods = {
  $get: jest.fn(),
  $post: jest.fn(),
  $put: jest.fn(),
  $patch: jest.fn(),
  setHeader: jest.fn(),
  setToken: jest.fn(),
  setBaseURL: jest.fn(),
  onRequest: jest.fn(),
  onResponse: jest.fn(),
  onError: jest.fn(),
  onRequestError: jest.fn(),
  onResponseError: jest.fn()
}

export default {
  create: jest.fn(() => axiosMethods),
  ...axiosMethods
}
