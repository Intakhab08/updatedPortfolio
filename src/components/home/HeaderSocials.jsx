import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter,  } from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='home__socials' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
           
            <a href='https://github.com/Intakhab08' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/mdintakhab/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://x.com/mdintakhab03/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
