import Vue from 'vue'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { InertiaApp } from '@inertiajs/inertia-vue'
import { Interceptor, Response } from '@inertiajs/inertia-interceptor'
import { default as Routes } from './Backend'
import { default as guestSharedState } from './Backend/shared/guest'

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.use(InertiaApp)
Vue.use(PortalVue)
Vue.use(VueMeta)

let app = document.getElementById('app')

Response.share(guestSharedState)
Interceptor.setup(app, '/login', Routes)

new Vue({
  metaInfo: {
    titleTemplate: (title) => title ? `${title} - Ping CRM` : 'Ping CRM'
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)

