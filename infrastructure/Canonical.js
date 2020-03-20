export function getCanonicalForApp (appId, appVersions, version) {
  const versionString = version && appVersions[appVersions.length - 1] !== version ? `/${version}` : ''
  return `/apps/${appId}${versionString}`
}
