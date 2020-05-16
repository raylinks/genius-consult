import http from '@/utils/http'

const getJobs = async () => {
    return await http.get('get/all/jobs')
}

const submitJob = async (form) => {
    return await http.post('post/recruitment', {
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

const getAdminJobs = () => {
    return http.get('get/recruitment')
}

const publishJob = async (id) => {
    return await http.post('publish/recruitment', { id })
}

export { getJobs, submitJob, getAdminJobs, publishJob }
