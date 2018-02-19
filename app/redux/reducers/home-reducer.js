const initialState = {
  jobs: [],
  refreshing: false
}

const homeRecucer = (state = initialState, action) => {
  switch (action.type) {

  //login
  case 'FETCH_JOBS_REQUEST':
    newState = Object.assign({}, state, {
      refreshing: true
    })
    return newState

  case 'FETCH_JOBS_SUCCESS':
    console.log('FETCH_JOBS_SUCCESS', action.jobs)
    let key = 0
    const jobs = action.jobs.filter(job => ((job.reactions) && (job.reactions[0].name === 'calling') && (job.reactions[0].users.includes('U6PRY7EAH'))))

    console.log('map jobs', jobs)
    newState = Object.assign({}, state, {
      jobs,
      refreshing: false
    })
    console.log('newState', newState)
    return newState

  case 'LOGIN_FAILURE':
    return state

  default:
    return state

  }
}

export default homeRecucer
/*
[REMOTE] [FRONTEND DEV] [CALIFORNIA]

Hey! This is a test job post!!

Hey! This is a test job post!!

Hey! This is a test job post!!

react-brasil #Jobs app is coming!! :stuck_out_tongue:

This is our company link, please, apply:  https://google.com (gonna add a link preview)
*/
