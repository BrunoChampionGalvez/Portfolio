
import './Icon.css';

import { Dock, DockIcon } from "../magicui/dock";
import { MailIcon, PencilIcon } from "lucide-react";
import { useState } from 'react';

export type IconProps = React.HTMLAttributes<SVGElement>;

import './Icon.css';

function MacOSNavbar() {
    const [isLight, toggleLight] = useState(true)

    return (
        <div className="absolute left-[50%] translate-x-[-50%] bottom-[8vh]">
            <Dock direction="middle">
                <DockIcon className="dock-icon">
                    <Icons.home className="fill-green-500 stroke-black-500 size-7" />
                    <span className="tooltip">Home</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <PencilIcon className="fill-red-500 size-6" />
                    <span className="tooltip">Blog</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.gitHub className="size-6" />
                    <span className="tooltip">GitHub</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.linkedin className="size-8" />
                    <span className="tooltip">LinkedIn</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <Icons.x className="size-10" />
                    <span className="tooltip">X (Twitter)</span>
                </DockIcon>
                <DockIcon className="dock-icon">
                    <MailIcon className="fill-yellow-300 size-6" />
                    <span className="tooltip">Mail</span>
                </DockIcon>
                {isLight ?
                    <DockIcon className="dock-icon">
                        <Icons.light onClick={() => toggleLight(false)} className="size-8 fill-orange-500" />
                        <span className="tooltip">Light Mode</span>
                    </DockIcon> :
                    <DockIcon className="dock-icon">
                        <Icons.dark onClick={() => toggleLight(true)} className="size-7 fill-purple-500" />
                        <span className="tooltip">Dark Mode</span>
                    </DockIcon>
                }
            </Dock>
        </div>
    );
}

const Icons = {
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    linkedin: (props: IconProps) => (
        <svg viewBox="0 0 16 16" {...props} xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z">
            </path></g>
        </svg>
    ),
    x: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500.56 1221.19"
        >
            <path className="st0" d="M1168.12,1056.56H511.72c-55.12,0-99.8-44.68-99.8-99.8V300.36c0-55.12,44.68-99.8,99.8-99.8h656.39  c55.12,0,99.8,44.68,99.8,99.8v656.39C1267.92,1011.88,1223.24,1056.56,1168.12,1056.56z" />
            <g transform="translate(52.390088,-25.058597)">
                <path className="st1" d="M491.03,374.75L721.1,682.38L489.58,932.49h52.11l202.7-218.98l163.77,218.98h177.32   L842.46,607.56l215.5-232.81h-52.11L819.18,576.42L668.35,374.75H491.03z M567.66,413.14h81.46l359.72,480.97h-81.46L567.66,413.14   z" />
            </g>
        </svg>
    ),
    light: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24"><title>white-balance-sunny</title><path stroke="#000000" strokeWidth="1" d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>
    ),
    dark: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24"><title>moon-waning-crescent</title><path strokeWidth="1.5" stroke="#000000" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" /></svg>
    ),
    home: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24"><title>home-variant</title><path strokeWidth="1.5" stroke="#000000" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" /></svg>
    )


};

export default MacOSNavbar