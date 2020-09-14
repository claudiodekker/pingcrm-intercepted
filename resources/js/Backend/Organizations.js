import { Response } from '@inertiajs/inertia-interceptor'
import { default as authenticatedSharedState } from './shared/auth'
import { default as organizations } from './data/organizations'

export default {
  get: ({ params, route }) => {
    Response.share(authenticatedSharedState)

    if (params.get('remember') === 'forget') {
      return Response.redirect(route)
    }

    const search = params.get('search')
    const trashed = params.get('trashed')

    return Response.render('Organizations/Index', {
      filters: {
        search,
        trashed,
      },
      organizations: {
        data: organizations.data
          .filter(item => !search || item.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
          .filter(item => trashed && trashed === 'only' ? item.deleted_at !== null : true),
        links: organizations.links,
      },
    })
  },
}
