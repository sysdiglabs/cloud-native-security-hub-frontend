export default class ContentService {
  constructor (httpClient) {
    this.httpClient = httpClient
  }

  async getResources () {
    const result = await this.httpClient.get('/resources')
    return result.data
  }

  async getResource (kind, id) {
    const result = await this.httpClient.get(`/resources/${kind}/${id}`)
    return result.data
  }

  async getResourceByVersion (kind, id, version) {
    const result = await this.httpClient.get(`/resources/${kind}/${id}/${version}`)
    return result.data
  }

  async getApps () {
    const result = await this.httpClient.get('/apps')

    return result.data
  }

  async getApp (id) {
    const result = await this.httpClient.get(`/apps/${id}`)

    return result.data
  }

  async getAppResourcesByVersion (id, version) {
    const result = await this.httpClient.get(`/apps/${id}/${version}/resources`)

    return result.data
  }
}
