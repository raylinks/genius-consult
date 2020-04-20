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

async function submitSkillsQuestions(info) {
  const data = await http.post('skills/details', {
    skill_category: info.skill_category,
    skill_name: info.skill_name,
    skill_level: info.skill_level
  })
  return data
}

async function submitRefQuestions(info) {
  const data = await http.post('reference/details', {
    company_name: info.company_name,
    name: info.name,
    contact_1: info.contact_1,
    contact_2: info.contact_2,
    note: info.note
  })
  return data
}

async function submitAwardQuestions(info) {
  const data = await http.post('award/details', {
    title: info.title,
    issuer: info.issuer,
    web_url: info.web_url,
    date: info.date,
    note: info.note
  })
  return data
}

export {
  submitPersonalQuestions,
  submitExperienceQuestions,
  submitSkillsQuestions,
  submitRefQuestions,
  submitAwardQuestions
}
