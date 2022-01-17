import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from "../../components/seo";

export default function About() {
    return (
        <Layout active="/about">
            <Seo title='about' />
            <div className='container mx-auto px-36 p-8 my-24'>
                <div className='prose'>
                    <h1 className='text-[#ECF8FF] mb-12'>About</h1>
                    <p className='text-[#d7eaf5] mb-24'>
                        I specialize in rapidly building software companies and web applications. I use an entrepreneurial mindset to inform my design and engineering output.
                        <br />
                        <br />
                        I prioritize communication while building. I am an excellent communicator, both written and verbal. I use screen casts, video calls, and written words to lead teams built on trust and transparency.
                        <br />
                        <br />
                        I am an expert in JavaScript, working primarily in React and Firebase, but I have experience working in a wide range of technologies including Node & Express, MongoDB, PostgreSQL, React Native, Gatsby, REST API design, CircleCI, 3rd party APIs (Stripe, Discord, Slack, Amplitude, Google Auth, etc.), AWS (S3, CloudFront, Cognito, Build Pipeline, Route53, ACM), and many more.
                        <br />
                        <br />
                        Additionally, I am an experienced interface and user experience designer. I use Figma to communicate ideas through low and high fidelity mockups, design systems, and clickable prototypes.
                    </p>
                    <h2 className='text-[#ECF8FF] mb-8'>
                        Personal
                    </h2>
                    <p className='text-[#d7eaf5]'>
                        I’ve been a gamer my entire life. I play StarCraft, Fortnite, and Nintendo 64.
                        <br />
                        <br />
                        I ran Division 3 track (400m) at Rochester Institute of Technology, and still hold school records to this day.
                        <br />
                        <br />
                        I play guitar and bass, and I’m learning to record my own songs.
                        <br />
                        <br />
                        I collect video games and action figures, and love SciFi.
                    </p>
                </div>
            </div>
        </Layout>
    )
}