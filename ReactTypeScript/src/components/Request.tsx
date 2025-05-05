import React from 'react'

type RequestProps = {
    status: 'loading' | 'success' | 'error';
}

function Request(props: RequestProps) {
 
    let message = '';
    if (props.status === 'loading') {
        message = 'Loading..';
    }
    if (props.status === 'success') {
        message = 'Successful..';
    }
    if (props.status === 'error') {
        message = 'Error..';
    }

  return (
    <div>
        {message}
    </div>
  )
}

export default Request