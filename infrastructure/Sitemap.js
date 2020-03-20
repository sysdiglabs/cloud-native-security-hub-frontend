import axios from 'axios'
import { getCanonicalForApp } from './Canonical'

export async function getSitemapRoutes () {
  const apps = await axios.get(process.env.API_URL + '/apps')

  return [
    ...apps.data
      .filter(app => app.available)
      .flatMap(app => app.availableVersions.map(version => ({ app, version })))
      .map(({ app, version }) => getCanonicalForApp(app.id, app.availableVersions, version))
  ]
}
