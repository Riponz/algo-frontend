import React from 'react'
import './Broker.css'
import { Select,TextField, MenuItem } from '@mui/material'

function Broker() {
  return (
    <div className='broker'>
      <span className='broker-tag'>Connect your Broker</span>

      <TextField style={{
        width : '150',
        marginTop : '20'
      }} className='broker-select' size='small' label='Select Broker' select>
      <MenuItem value={'kotak'}>Kotak Securities</MenuItem>
      <MenuItem value={'zero'}>Zeroddha</MenuItem>
      <MenuItem value={'angel'}>Angel One</MenuItem>
      </TextField>

      <form action="post">
        <input className='broker-clientid' type="text" placeholder='Client ID' />
        <input className='broker-client-pass' type="password" placeholder='Password' />
        <input className='broker-connect' type="submit" value='connect'/>
      </form>
    </div>
  )
}

export default Broker