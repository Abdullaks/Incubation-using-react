import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
// import Spinner from '../components/Spinner'
import { getGoals } from '../features/goals/goalSlice'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals)

  useEffect(() => {
    // if(isError){
    //   console.log(message);
    // }
    // console.log('useEffect working');

    if (user && user.role == 'admin') {
      navigate('/admin')
    }

    if (!user) {
      navigate('/login')
    }
  }, [user])

  // if(isLoading){
  //   return <Spinner/>
  // }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>User Home</p>
        <Link to={'/incubation'}>
          <button className='btn btn-block' >
            Book Slot
          </button>
        </Link>
      </section>


    </>
  )
}



export default Dashboard