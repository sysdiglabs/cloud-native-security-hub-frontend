import { actions } from '@/store'
import resources, { resource } from '~/test/fixtures/Resource'
import apps, { app } from '~/test/fixtures/App'

describe('store', () => {
  describe('action', () => {
    let commit
    const context = {
      $services: {
        contentService: {
          getResources: jest.fn(() => resources),
          getResource: jest.fn(() => resource),
          getResourceByVersion: jest.fn(() => resource),
          getApps: jest.fn(() => apps),
          getApp: jest.fn(() => app),
          getAppResourcesByVersion: jest.fn(() => resources)
        }
      }
    }

    beforeEach(() => {
      commit = jest.fn()
    })

    it('gets apps on init so we have them available for search', async () => {
      await actions.nuxtServerInit.call(context, { commit }, {})

      expect(commit).toHaveBeenCalledWith('apps', apps)
    })

    it('gets an app and its resources by ID and version', async () => {
      await actions.getAppAndResourcesByVersion.call(context, { commit }, { id: app.id, version: app.availableVersions[0] })

      expect(context.$services.contentService.getApp).toHaveBeenCalledWith(app.id)
      expect(context.$services.contentService.getAppResourcesByVersion).toHaveBeenCalledWith(app.id, app.availableVersions[0])

      expect(commit).toHaveBeenCalledWith('app', app)
      expect(commit).toHaveBeenCalledWith('appResources', resources)
    })
  })
})
