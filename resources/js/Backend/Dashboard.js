import { Response } from '@inertiajs/inertia-interceptor'
import { default as authenticatedSharedState } from './shared/auth'

export default {
  get: () => {
    Response.share(authenticatedSharedState)

    return Response.render('Dashboard/Index')
  },
}
