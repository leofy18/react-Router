import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'

  return (
    <>
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={()=> setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={()=> setSearchParams({})}>Reset Users</button>
      </div>
      {
        showActiveUsers ? (<h2>Showing Active Users</h2>):(<h2>Showing Users</h2>)
      }
    </div>

    </>
  )
}

export default Users
