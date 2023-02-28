import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../../styles/Footer.css'

import {IconButton} from '@mui/material'


import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getYear() + 1900;
  return (
    <footer>
        <hr />
        <div>
          © {year} Ernest Viola
          <span className='footerLinks'><IconButton href="https://github.com/ernestviola" target="_blank">
              <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/ernestviola/" target="_blank">
              <LinkedInIcon />
          </IconButton>
          </span>
        </div>
    </footer>
  )
}

export default Footer