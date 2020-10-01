import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ContentService from '@/infrastructure/services/ContentService'
import resourcesResponse from '@/test/fixtures/responses/resources'
import resources, { resource } from '@/test/fixtures/Resource'
import appsResponse from '@/test/fixtures/responses/apps'
import apps, { app } from '@/test/fixtures/App'

const httpClient = new MockAdapter(axios)
const contentService = new ContentService(axios)

describe('Content Service', () => {
  it('gets resources', async () => {
    httpClient.onGet('/v1/resources').reply(200, resourcesResponse)

    const result = await contentService.getResources()

    expect(result).toEqual(resources)
  })

  it('gets a resource by ID', async () => {
    httpClient.onGet(`/v1/resources/${resource.kind}/${resource.id}`).reply(200, resourcesResponse[0])

    const result = await contentService.getResource(resource.kind, resource.id)

    expect(result).toEqual(resource)
  })

  it('gets apps', async () => {
    httpClient.onGet('/v1/apps').reply(200, appsResponse)

    const result = await contentService.getApps()

    expect(result).toEqual(apps)
  })

  it('gets a app by ID', async () => {
    httpClient.onGet(`/v1/apps/${app.id}`).reply(200, appsResponse[0])

    const result = await contentService.getApp(app.id)

    expect(result).toEqual(app)
  })

  it('gets sorted app resources by version', async () => {
    httpClient.onGet(`/v1/apps/${app.id}/${app.availableVersions[0]}/resources`).reply(200, resourcesResponse)

    const result = await contentService.getAppResourcesByVersion(app.id, app.availableVersions[0])

    expect(result).toEqual(resourcesResponse)
  })

  it('gets a resource by kind, ID and version', async () => {
    httpClient.onGet(`/v1/resources/${resource.kind}/${resource.id}/${resource.version}`).reply(200, resourcesResponse[0])

    const result = await contentService.getResourceByVersion(resource.kind, resource.id, resource.version)

    expect(result).toEqual(resource)
  })
})
