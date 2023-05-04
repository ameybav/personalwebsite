import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill}  from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import cutout from '../public/cutout.jpg'
import scu from '../public/scu.png'
import infy from '../public/infy.png'
import mf from '../public/microfocus.png'
import ms from '../public/Microsoft.png'
import pune from '../public/puneunit.jpeg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amey Baviskar</title>
      </Head>
      <main className='bg-white px-10'>
        <section className="min-h-0">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Developed by Amey Baviskar</h1>
            <ul className='flex items-center'>
              <li className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8'><a href="#"/>Resume</li>
            </ul>
          </nav>
          <div className='relative mx-auto rounded-full w-60 h-60 mt-20 overflow-hidden'>
            <Image src={cutout} style={{objectFit:'cover'}} fill/>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Amey Baviskar</h2>
            <h3 className='text-2xl py-2'>Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
            Welcome to my website! I'm so glad you're here. <br/>I'm a full stack software developer with a passion for creating innovative solutions 
            to complex problems. When I'm not busy coding, you can usually find me planning my next travel adventure, 
            diving into a good book, working on a personal project, or practicing yoga to keep my mind and body balanced. 
            <br/>Whether you're here to learn more about my professional experience, check out some of my personal projects, or just say hi!
            <br/>Please feel free to reach out if you have any questions or just want to connect!

Thank you for visiting and have a great day!
            </p>
          </div>
        </section>

        <section className='shadow-lg p-3 my-1 py-4'>          
          <div className='flex justify-between py-4'>
            <Image src={ms} style={{objectFit: 'fill'}} width={100} height={80}/>
            <div className='flex px-4 justify-between'>
              <span>Microsoft</span>
            </div>
            <div className='flex px-4 justify-between'>
              <span className>Oct 2021 - Present</span>
            </div>
          </div>
          <div className='text-blue-500 font-mono font-semibold'>
            Software Developer 2
          </div>
          <div>
            <p className='text-md py-5 text-gray-800'>
                I was part of Dynamics 365 for Customer Service team to develop features for <a className='text-blue-600 underline' href="https://dynamics.microsoft.com/en-us/customer-service/overview/" target='_blank'>Customer Service Workspace</a>.
                Customer Service Workspace is the fastest growing customer service application in CRM world. 
                <br/>As a software dev, I helped in code reviews, on-call rotations, helping with maintenance of CI/CD pipeline.
                <br/>The techstack I worked on was TypeScript, JavaScript, C#, .Net, Azure, Jest.
            </p>
          </div>
        </section>

        <section className='shadow-lg p-3 my-1 py-4'>          
          <div className='flex justify-between py-4'>
            <Image src={mf} style={{objectFit: 'contain'}} width={100} height={90}/>
            <div className='flex px-4 justify-between'>
              <span>Micro Focus</span>
            </div>
            <div className='flex px-4 justify-between'>
              <span className>Aug 2019 - Oct 2021</span>
            </div>
          </div>
          <div className='text-blue-500 font-mono font-semibold'>
            Senior Software Developer
          </div>
          <div>
            <p className='text-md py-5 text-gray-800'>
              I was working on developing a log management AI tool called <a className='text-blue-600 underline' href='https://www.microfocus.com/en-us/cyberres/secops/arcsight-recon' target='_blank'>ArcSight Recon</a>.
              <br/>As a software dev, I helped in code reviews, interviewing & mentoring candidates.
              <br/>The techstack I worked on was JavaScript, Node.js, React, Rest APIs, Vertica, JIRA, Git, Microservices.
            </p>
          </div>
        </section>

        <section className='shadow-lg p-3 my-1 py-4'>          
          <div className='flex justify-between py-4'>
            <Image src={scu} style={{objectFit: 'contain'}} width={60} height={30}/>
            <div className='flex px-4 justify-between'>
              <span>Santa Clara University</span>
            </div>
            <div className='flex px-4 justify-between'>
              <span className>Masters</span>
            </div>
          </div>
          <div>
            <div className='text-blue-500 font-mono font-semibold'>
              Masters
            </div>
            <p className='text-md py-5 text-gray-800'>
            Masters in Computer Science and Engineering
            </p>
          </div>
        </section>

        <section className='shadow-lg p-3 my-1 py-4'>          
          <div className='flex justify-between py-4'>
            <Image src={infy} style={{objectFit: 'contain'}} width={60} height={30}/>
            <div className='flex px-4 justify-between'>
              <span>Infosys Ltd</span>
            </div>
            <div className='flex px-4 justify-between'>
              <span className>Dec 2014 - June 2017</span>
            </div>
          </div>
          <div>
            <div className='text-blue-500 font-mono font-semibold'>
              Senior Systems Engineer
            </div>
            <p className='text-md py-5 text-gray-800'>
            I was working on developing Finacle for banks. <br/>In an another project, I was working on Topic Modelling. <br/>
            The techstack I worked on was C++, JavaScript, Java.
            </p>
          </div>
        </section>

        <section className='shadow-lg p-3 my-1 py-4'>          
          <div className='flex justify-between py-4'>
            <Image src={pune} style={{objectFit: 'contain'}} width={60} height={30}/>
            <div className='flex px-4 justify-between'>
              <span>University of Pune</span>
            </div>
            <div className='flex px-4 justify-between'>
              <span className>Bachelors</span>
            </div>
          </div>
          <div>
            <div className='text-blue-500 font-mono font-semibold'>
              Bachelors
            </div>
            <p className='text-md py-5 text-gray-800'>
              Bachelors in Computer Engineering. 
            </p>
          </div>
        </section>

        <section>
        <div>
            <h3 className='text-3xl flex pt-10 py-4 justify-center'>Get in touch!</h3>
          </div>
          <div className='text-3xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://twitter.com' target='_blank'><AiFillTwitterCircle/></a>
            <a href='https://www.linkedin.com/in/ameybaviskar' target='_blank'><AiFillLinkedin/></a>
            <a href='https://www.linkedin.com/in/ameybaviskar' target='_blank'><AiFillInstagram/></a>
            <a href='https://github.com/estr4ng7d' target='_blank'><AiFillGithub/></a>
          </div>
        </section>

      </main>
    </div>
    
  );
}
