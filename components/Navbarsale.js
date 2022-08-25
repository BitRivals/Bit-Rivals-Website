import { useRouter} from 'next/router'
import Container from './Container'
import RedTri from '../public/images/icons/red_tri.svg'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
import { SignOut, useUser } from '../hooks/authUser'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbarsale = ({user, hideLinks=false, web3=false}) => {
    const  router  = useRouter()
    const logOutUser = async() => {
        await SignOut();
        router.push('/');  
    }

    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 0);
        }
        
        const navIcon = document.getElementsByClassName('js-navIcon')[0];
        const nav = document.getElementsByClassName('js-nav')[0];
    
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);        
    },[])

    var handleSetActive = function()  {
        const navIcon = document.getElementsByClassName('js-navIcon')[0];
        const nav = document.getElementsByClassName('js-nav')[0];
        
        navIcon.classList.remove('active')
        nav.classList.remove('active')
    }
  
    return (
        <section id="home" className={isScrollValueMoreThanHeaderHeight ? "transition-all duration-200 nav z-30 activeSale fixed w-full" : "transition-all duration-100 nav z-30 fixed w-full"}>
            <Container className="relative z-10 py-6 transition-all duration-100 nav_inner">
                <div className='w-full text-white'>
                    <div className="flex items-center justify-between lg:justify-start">
                        <div className="relative z-10 mr-12">
                            <Logo />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const Logo = () => {
    return (   
        <Link href="/">
           
            <svg width="112" height="22" viewBox="0 0 112 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                <g clipPath="url(#clip0_157:5641)">
                    <path d="M13.0374 5.79379V8.6123C13.0374 9.08205 12.8847 9.47351 12.5791 9.78668L11.5096 10.8828L12.5027 11.9006C12.8083 12.2137 12.961 12.6052 12.961 13.0749V16.2849C12.961 17.381 12.6555 18.1639 12.1207 18.7119C11.586 19.26 10.7456 19.5732 9.75251 19.5732H1.65478V4.30625L0.814453 2.42725H9.82891C10.8984 2.42725 11.6624 2.74041 12.1971 3.28846C12.7319 3.8365 13.0374 4.69771 13.0374 5.79379ZM9.06497 8.45572V6.57671C9.06497 6.26354 8.75939 5.95038 8.45382 5.95038H5.62725V9.00376H8.45382C8.83579 9.08205 9.06497 8.76888 9.06497 8.45572ZM9.06497 15.4237V13.2315C9.06497 12.9183 8.75939 12.6052 8.45382 12.6052H5.62725V16.05H8.45382C8.83579 16.05 9.06497 15.8151 9.06497 15.4237Z" fill="white"/>
                    <path d="M19.6072 2.42725V19.5732H15.6348V4.30625L14.7944 2.42725H19.6072Z" fill="white"/>
                    <path d="M21.3643 6.02867V2.42725H32.7469V5.95038H29.0036V19.5732H25.0312V6.02867H21.3643Z" fill="white"/>
                    <path d="M52.4565 19.6514H48.4077L46.5742 14.3276H44.7408V19.6514H40.7683V4.30625L39.928 2.42725H48.9424C50.0119 2.42725 50.7759 2.74041 51.3106 3.28846C51.8454 3.8365 52.151 4.69771 52.151 5.7155V10.9611C52.151 12.5269 51.6162 13.4664 50.4703 14.0144L52.4565 19.6514ZM44.7408 10.7262H47.6437C48.0257 10.7262 48.2549 10.4913 48.2549 10.0998V6.57671C48.2549 6.18525 48.0257 5.95038 47.6437 5.95038H44.7408V10.7262Z" fill="white"/>
                    <path d="M58.6443 2.42725V19.5732H54.6719V4.30625L53.8315 2.42725H58.6443Z" fill="white"/>
                    <path d="M93.2508 16.05H98.9039L96.9941 19.5732H89.3547V2.42725H93.3272V16.05H93.2508Z" fill="white"/>
                    <path d="M100.279 16.4412V14.1707H104.252V15.5799C104.252 15.9714 104.481 16.2063 104.863 16.2063H107.231C107.613 16.2063 107.842 15.9714 107.842 15.5799V13.7009C107.842 13.3095 107.689 13.0746 107.307 12.9963L103.106 12.0568C101.196 11.5871 100.279 10.4127 100.279 8.45539V5.63689C100.279 4.5408 100.585 3.75789 101.119 3.20984C101.654 2.6618 102.494 2.34863 103.488 2.34863H108.377C109.446 2.34863 110.21 2.6618 110.745 3.20984C111.28 3.75789 111.585 4.6191 111.585 5.63689V7.67248H107.613V6.4981C107.613 6.10664 107.384 5.87176 107.002 5.87176H104.71C104.328 5.87176 104.099 6.10664 104.099 6.4981V8.06393C104.099 8.45539 104.252 8.69027 104.633 8.76856L108.835 9.70806C110.745 10.1778 111.662 11.3522 111.662 13.3095V16.4412C111.662 17.5372 111.356 18.3202 110.821 18.8682C110.287 19.4162 109.446 19.7294 108.453 19.7294H103.411C102.342 19.7294 101.578 19.4162 101.043 18.8682C100.585 18.3202 100.279 17.459 100.279 16.4412Z" fill="white"/>
                    <path d="M75.0691 0L72.5481 0.782918L65.9019 15.8149L65.138 6.49822H67.2006L69.034 2.42705H64.8324H63.6101H60.1724L61.0127 4.38434L62.235 19.573H65.7491H66.2075H68.5757L76.1386 2.42705L75.0691 0Z" fill="#FB385B"/>
                    <path d="M72.6244 22.0002L75.1454 21.2173L81.7917 6.18525L82.5556 15.502H80.493L78.6595 19.5732H82.8612H84.0835H87.5212L86.6809 17.6159L85.4586 2.42725H81.9445H81.5625H79.1179L71.5549 19.5732L72.6244 22.0002Z" fill="#1EBAFA"/>
                </g>
                <defs>
                    <clipPath id="clip0_157:5641">
                        <rect width="111" height="22" fill="white" transform="translate(0.814453)"/>
                    </clipPath>
                </defs>
            </svg>
        </Link>               
        
    )
}

export default Navbarsale;