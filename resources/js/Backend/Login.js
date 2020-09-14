import { Response } from '@inertiajs/inertia-interceptor'
import { Session } from './data/session'

export default {
  get: () => Response.render('Auth/Login'),
  post: () => {
    Session.auth.user = {
      id: 1,
      first_name: 'test',
      last_name: 'intercepted',
      email: 'intercepted@inertia.js',
      role: 'owner',
      account: {
        id: 1,
        name: 'Intercepted Organization',
      },
    }

    return Response.redirect('/')
  },

  logout: () => Response.redirect('/login'),
}
