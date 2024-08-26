
import './Icon.css';

import { Dock, DockIcon } from "../magicui/dock";
import { useState } from 'react';

export type IconProps = React.HTMLAttributes<SVGElement>;

import './Icon.css';

function MacOSNavbar() {
    const [isLight, toggleLight] = useState(true)

    return (
        <div className="fixed w-max h-max left-[50%] translate-x-[-50%] bottom-[4vh]">
            <Dock className='dock relative z-10' direction="middle">
                <DockIcon className="dock-icon">
                    <Icons.home />
                    <span className="tooltip">Home</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.pencil />
                    <span className="tooltip">Blog</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.gitHub />
                    <span className="tooltip">GitHub</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.linkedin />
                    <span className="tooltip">LinkedIn</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.x />
                    <span className="tooltip">X (Twitter)</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.mail />
                    <span className="tooltip">Mail</span>
                </DockIcon>
                {
                    isLight ?
                        <DockIcon className="dock-icon">
                            <span onClick={() => toggleLight(false)}>
                                <Icons.light />
                            </span>
                            <span className="tooltip">Light Mode</span>
                        </DockIcon> :
                        <DockIcon className="dock-icon">
                            <span onClick={() => toggleLight(true)}>
                                <Icons.dark />
                            </span>
                            <span className="tooltip">Dark Mode</span>
                        </DockIcon>
                }
            </Dock>
        </div>
    );
}

const Icons = {
    gitHub: () => (
        <img className="w-7" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724624163/github2_l0i2f6.png" alt="GitHub logo" />
    ),
    linkedin: () => (
        <img className='w-7' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724629163/linkedin_kkvjoi.png" alt="LinkedIn logo" />
    ),
    x: () => (
        <img className='w-7' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724631950/x_edwdsp.png" alt="X (Twitter) logo" />
    ),
    light: () => (
        <img className='w-10' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724629163/sun_jrqxdf.png" alt="Light mode icon" />
    ),
    dark: () => (
        <img className='w-7' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724629163/moon_mztsbo.png" alt="Dark mode icon" />
    ),
    home: () => (
        <img className='w-7 macos-navbar-logo' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724624428/home_trlcr5.png" alt="Home logo" />
    ),
    pencil: () => (
        <img className='w-7 macos-navbar-logo' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724624903/pencil_e2dggl.png" alt="Blog logo" />
    ),
    mail: () => (
        <img className='w-8' src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724629163/contact_nrojjd.png" alt="Contact logo" />
    )

};

export default MacOSNavbar