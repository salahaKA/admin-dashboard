import { Typography } from 'antd';
import React from 'react'

const FormTypograpy = (prop) => {
    const {level, Text} = prop;
  return (
    <div>
        <Typography.Title level={level} style={{textAlign:"center"}}>{Text}</Typography.Title>
    </div>
  )
}

export default FormTypograpy