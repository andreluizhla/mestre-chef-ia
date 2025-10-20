import { TextareaAutosize } from '@mui/material'
import './index.css'
const Kitchen = () => {
    return (
        <>
            <div className="question-kitchen">
                <img src="../../images/logoChefIA.png" alt="Logo do Chef IA" className='logo-kitchen' />
                <h1>O que vamos preparar hoje?</h1>
            </div>
            <div className="input-container-kitchen">
                <TextareaAutosize className="input-kitchen" id="input" name='input' placeholder='Digite a receita aqui' color="var(--action)" />
            </div>
        </>
    )
}

export default Kitchen