import request from 'superagent'

const rootUrl = '/api/v1/user'

export function APIaddUser(data) {
  return request
    .post(rootUrl)
    .send(data)
    .then((res) => {
      return res.body
    })
}

export function APIgetUserByAuth0Id(auth0Id) {
  return request.get(rootUrl + `/${auth0Id}`).then((res) => {
    return res.body
  })
}

export function getUserRoles(id) {
  return request.get(`${rootUrl}/users/${id}`).then((res) => {
    return res.body.roles
  })
}
