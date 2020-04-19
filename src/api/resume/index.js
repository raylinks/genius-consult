/* eslint-disable space-before-function-paren */
import http from '@/utils/http'

async function submitPersonalQuestions(info) {
  const data = await http.post('personal/detail', {
    title: info.title,
    firstname: info.firstname,
    lastname: info.lastname,
    date_of_birth: info.date_of_birth,
    nationality: info.nationality,
    phone: info.phone,
    web: info.web,
    email: info.email,
    address: info.address,
    profile: info.profile,
    picture_url: info.picture_url,
    interest: info.interest
  })
  return data
}

export { submitPersonalQuestions }
