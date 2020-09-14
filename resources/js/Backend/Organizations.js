import { Response } from '@inertiajs/inertia-interceptor'
import { default as authenticatedSharedState } from './shared/auth'

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
      'organizations':{
        'data':[
          {
            'id':47,
            'name':'Adams LLC',
            'phone':'855.718.1137',
            'city':'East Jaleel',
            'deleted_at':null,
          },
          {
            'id':29,
            'name':'Barrows Group',
            'phone':'1-888-559-4964',
            'city':'Meghanfort',
            'deleted_at':null,
          },
          {
            'id':40,
            'name':'Bergnaum, Bernhard and Fadel',
            'phone':'888-789-0641',
            'city':'Jakubowskiberg',
            'deleted_at':null,
          },
          {
            'id':20,
            'name':'Bernhard, Nolan and Auer',
            'phone':'855.533.6927',
            'city':'Stewartmouth',
            'deleted_at':null,
          },
          {
            'id':16,
            'name':'Block, Leannon and McDermott',
            'phone':'(855) 968-2378',
            'city':'Schmelerfort',
            'deleted_at':null,
          },
          {
            'id':10,
            'name':'Block, Tremblay and Quigley',
            'phone':'844-758-3992',
            'city':'West Darrion',
            'deleted_at':null,
          },
          {
            'id':54,
            'name':'Bogisich-Denesik',
            'phone':'844.492.7649',
            'city':'Stammview',
            'deleted_at':null,
          },
          {
            'id':79,
            'name':'Bogisich Inc',
            'phone':'800.522.8400',
            'city':'East Abner',
            'deleted_at':null,
          },
          {
            'id':21,
            'name':'Boyle, Weber and McCullough',
            'phone':'866.470.7676',
            'city':'North Laurieberg',
            'deleted_at':null,
          },
          {
            'id':72,
            'name':'Brakus-Orn',
            'phone':'(866) 686-1328',
            'city':'Kyleighfort',
            'deleted_at':null,
          },
        ].filter(item => {
          return !search || item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
        }).filter(item => {
          if (trashed && trashed === 'only') {
            return item.deleted_at !== null
          }

          return true
        }),
        'links':[
          {
            'url':null,
            'label':'Previous',
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=1',
            'label':1,
            'active':true,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=2',
            'label':2,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=3',
            'label':3,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=4',
            'label':4,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=5',
            'label':5,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=6',
            'label':6,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=7',
            'label':7,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=8',
            'label':8,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=9',
            'label':9,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=10',
            'label':10,
            'active':false,
          },
          {
            'url':'http://demo.inertiajs.com/organizations?page=2',
            'label':'Next',
            'active':false,
          },
        ],
      },
    })
  },
}
