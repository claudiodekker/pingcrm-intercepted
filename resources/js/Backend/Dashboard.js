import { Response } from '@inertiajs/inertia-interceptor'
import { Session } from './data/session'

export default {
  get: () => {
    if (Session.auth.user === null) {
      return Response.redirect('/login')
    }

    Response.share(Session)

    return Response.render('Dashboard/Index')
  },
}
