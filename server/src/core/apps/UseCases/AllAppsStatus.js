import { chachain } from "../../../util/Railway"

export default chachain((appsRepo, messages) => async () => {
  const appList = await appsRepo.list()
  const takenApps = await appsRepo.takenApps()
  const message = (st) =>
    st ? messages.appTakenBy(st) : messages.appIsFree()
  const appStatus = (st) => st ? 'taken' : 'free'

  const status = appList.map(a => a.id)
                        .reduce((acc, app) =>
                            acc.concat({
                              id: app,
                              status: appStatus(takenApps[app]),
                              user: takenApps[app],
                              message: message(takenApps[app])
                            }), []
                        )
  return { status }
})
