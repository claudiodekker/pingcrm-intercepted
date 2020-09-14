import Login from './Login'
import Dashboard from './Dashboard'
import Organizations from './Organizations'

export default Route => {
  Route.get('/', Dashboard.get)

  Route.get('/organizations', Organizations.get)

  Route.get('/login', Login.get)
  Route.post('/login', Login.post)
  Route.post('/logout', Login.logout)
}
