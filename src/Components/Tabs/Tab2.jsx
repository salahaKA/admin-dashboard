import { LoadingOutlined } from '@ant-design/icons';
import { Button, Modal, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'

const Tab2 = () => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);
    


     useEffect(()=>{
        console.log("Initial Count is:", count)

        return()=>{
            console.log("I am being cleaned up!")
        }
     },[count])

     
    

    const handleModal= ()=>{
        try{

            console.log("Opened successfully!")
            setShowModal(true)
        }catch(err){
            console.log("Error in Modal:", err)
        }
    }

    const handleOk=()=>{
        console.log("Closed Successfully")
        setShowModal(false)
    }

    const handleCancel = ()=>{
        console.log("Closed successfully!")
        setShowModal(false)
    }

    const handleCount =()=>{
        try{
            
            setCount(count+1)
            console.log("Count incremented successfully!", count)
        }catch(err){
            console.log("Eror occured on counter", err)
        }
    }
  return (
    <div>
        <Button type='dashed' onClick={handleModal} style={{ marginRight: '16px' }}>TO MODAL</Button>
        <Modal
        title="Modal Title"
        open= {showModal}
        onOk={handleOk}
        onCancel={handleCancel}

        closable={{ 'aria-label': 'Custom Close Button' }}
        footer={[
    <Button key="cancel" onClick={handleCancel}>
      Cancel
    </Button>,
    <Button key="ok" type="primary" onClick={handleOk}>
      OK
    </Button>,
  ]}
    //     closeIcon={
    // <Skeleton.Avatar active size="small" shape="circle" aria-label="Custom Close Button" />}
        >
            <p>dsgg</p>
            <p>sfdsFSdf</p>
            <p>Dsfsfds</p>
        </Modal>

        <Button onClick={handleCount}>COUNT</Button>
        <h1>{count}</h1>

    </div>
  )
}

export default Tab2