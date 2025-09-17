import { DownloadOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import React, { useState } from 'react'

const Option1 = () => {

    const [loading, setLoading]= useState(false);

    const onLoading=()=>{
        setLoading(false)
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }
  return (
    <div>
        <Button type='link' href='https://ant.design/components/menu/' target='_blank'>LINK</Button>
        <Button type='primary' variant='dashed' color='blue' shape='circle' icon={<DownloadOutlined/>} iconPosition='end' onClick={onLoading} loading={loading}>LINK</Button>
        <Divider orientation='center'>NEXT</Divider>
    </div>
  )
}

export default Option1