import React, {useRef, useState , useContext} from 'react';
import './contact.css';
import Phone from '../../assets/icons/phone.png';
import Email from '../../assets/icons/email.png';
import Address from '../../assets/icons/address.png';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';
 
const Contact = () => {
    const [done , setDone] = useState(false);

    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yi1ho8s',
         'template_1qnx5jf',
          formRef.current,
           'nUyct6bSLEj7eQjl6')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            document.querySelectorAll("input").value = '';
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-left">
                <div className="c-left-wrapper">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <a href="tel:+79627841575" className='c-info-item' >
                        <img src={Phone} alt="" className='c-icon'/>+ 7 962 784 15 75
                        </a>
                        <a href="mailto:avazxon.akramov@mail.ru" className='c-info-item'>
                            <img src={Email} alt="" className='c-icon' />avazxon.akramov@mail.ru
                        </a>
                        <a href="#" className='c-info-item'>
                            <img src={Address} alt="" className='c-icon' />Uzbekistan, Fergana city, street: Ahmad Yassaviy house 60, apartment 16
                        </a>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="c-text">
                    <b>What's your story?</b> Get in touch. Always available for freelancing in the right projects comes along me. 
                </div>
                <form action="" ref={formRef} onSubmit={handleSubmit}>
                <   input style={{background: darkMode && "#333" , color: darkMode && "white"}} name='user_name' type="text" placeholder='Name' />
                    <input style={{background: darkMode && "#333", color: darkMode && "white"}} name='user_subject' type="text" placeholder='Subject' />
                    <input style={{background: darkMode && "#333", color: darkMode && "white"}} name='user_email' type="text" placeholder='Email' />
                    <textarea style={{background: darkMode && "#333" , color: darkMode && "white"}} name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Submit</button>
                    {done && "Thank you...."}
                </form>
            </div>
        </div>
    );
}

export default Contact;
