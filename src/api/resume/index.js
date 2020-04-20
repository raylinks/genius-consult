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

async function submitExperienceQuestions(info) {
  const data = await http.post('work/experience', {
    company_name: info.company_name,
    job_title: info.job_title,
    country: info.country,
    city: info.city,
    time_from: info.month_from + ' ' + info.year_from,
    time_to: info.month_to + ' ' + info.year_to,
    currently_work: info.currently_work,
    note: info.note
  })
  return data
}

export { submitPersonalQuestions, submitExperienceQuestions }
