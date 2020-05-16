import http from '@/utils/http'

const getJobs = async () => {
    return http.get('get/all/jobs')
}

const submitJob = async (form) => {
    return http.post('post/recruitment', {
        job_title: form.job_title,
        location: form.location,
        skills: form.skills,
        experience: form.experience,
        description: form.description,
        requirement: form.requirement,
        responsibility: form.responsibility,
        qualification: form.qualification,
        scope_of_work: form.scope_of_work,
        closing_date: form.closing_date,
    })
}

export { getJobs, submitJob }
