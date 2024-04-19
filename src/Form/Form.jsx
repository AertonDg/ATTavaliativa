import './Form.css'

const Form = ({ input, password }) => {
    return (
        <>
            <input className='Input' type="text" placeholder={input} />
        </>
    )
}
export default Form