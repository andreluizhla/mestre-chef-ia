import { useEffect, useState } from 'react'
import { Check } from '@mui/icons-material'
import CustomTable from '../../components/Table'
import CustomButton from '../../components/CustomButton'
import { headers, studentsData } from '../../mock'
import './representative.css'

const Representative = () => {
    const [mockHeaders, setMockHeaders] = useState([])
    const [mockData, setMockData] = useState([])

    useEffect(() => {
        setMockHeaders(headers)
        setMockData(studentsData)
    }, [])
    return (
        <>
            <h1>Confirmação da turma</h1>
            <CustomTable 
                headers={mockHeaders}
                data={mockData}
            />
            <CustomButton 
                sx={{marginTop: "10px"}}
                icon={<Check />}
                text="Confirmar"
                onClick={() => {}}
            />
        </>
    )
}

export default Representative