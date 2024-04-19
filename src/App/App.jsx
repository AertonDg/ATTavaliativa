import './App.css'
import '../Button/Button.jsx'
import '../Form/Form.jsx'
import Form from '../Form/Form.jsx'
import Button from '../Button/Button'

const App = () => {
    return (
        <>
            <div className='container'>
                <div className='Descricao'>
                    <h1 className='title'>Learn to code by watching others</h1>
                    <p className='Parag'> See how experienced developers salve problems in real-time.
                        whatching scripted tutorials is great, but understanding how
                        developers think is invaluable
                    </p>
                </div>
                <div>
                    <div className='container2'>
                        <p className='box'> Try it free 7 days then $20/mo. thereafter</p>
                        <section className='Form'>
                            <Form className="input" input="Name" />
                            <Form input="Last Name" />
                            <Form input="Email Address" />
                            <Form input="Password" />
                            <Button Button="CLAIM YOUR FREE TRIAL" />
                        </section>
                    </div>
                </div>
            </div>


        </>
    )
}
export default App