import { Response } from '@inertiajs/inertia-interceptor'

export default {
  get: () => Response.render('Auth/Login'),
  post: () => Response.redirect('/'),

  logout: () => Response.redirect('/login'),
}
