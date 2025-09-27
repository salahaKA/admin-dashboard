import { Button } from 'antd';
import React from 'react'

const FormButtons = (prop) => {
    const {type, htmlType, Text, onClick} = prop;
  return (
    <div>
        <Button type={type} htmlType={htmlType} style={{ marginRight: 10, paddingBottom: "10px"}} onClick={onClick} block>
            {Text}
          </Button>
    </div>
  )
}

export default FormButtons