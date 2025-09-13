import React from 'react'
import { dataSource } from '../../Database/fakerData'
import { Card } from 'antd'
import TableComponent from '../TableComponent'



const CardsComponent = () => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {dataSource.slice(0,5).map((student)=>(
            <Card key={student.key} title={student.name}>
                <p>Age:{student.age}</p>
                <p>Email:{student.email}</p>
                <p>Gender:{student.gender}</p>
                <p>City:{student.city}</p>
            </Card>
        ))}

        <TableComponent/>
    </div>
  )
}

export default CardsComponent