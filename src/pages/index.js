import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
const projects = [
  {
    title: 'Yawnch',
    description: 'An online coworking community for indie hackers, entreprenuers, and founders. Chat live with app developers, designers, and mentors. Access video courses and tutorials.',
    link: '/abc',
  },
  {
    title: 'Stockstream.tv',
    description: 'On a mission to democratize investing knowledge. My partner and I bootstrapped this company with zero funding.',
    link: '/stockstream.tv',
  },
  {
    title: 'All Turtles',
    description: 'I lead web development full time at All Turtles, an AI startup studio.',
    link: '/stockstream.tv',
  },
]
const articles = [
  {
    title: 'Reducing cognitive load by theming my tools',
    date: 'September 08, 2019',
    link: '/reducing'
  },
  {
    title: 'Code splitting & lazy loading a server side rendered React app',
    date: 'September 08, 2019',
    link: '/reducing'
  },
  {
    title: 'Easy project switching with Itermocil & command line shortcuts',
    date: 'September 08, 2019',
    link: '/reducing'
  },
]
const Article = ({ title, date, excerpt, link }) => {
  return (
    <div className="flex my-4">
      <div id="icon" className="flex-none px-3 pt-2">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7 3.29999H6.30005C4.64319 3.29999 3.30005 4.64313 3.30005 6.29999V15.7C3.30005 17.3568 4.6432 18.7 6.30005 18.7H15.7C17.3569 18.7 18.7 17.3568 18.7 15.7V6.29999C18.7 4.64313 17.3569 3.29999 15.7 3.29999Z" fill="#F7DF1E" />
          <path d="M13.6448 15.3313C13.955 15.8378 14.3586 16.2101 15.0723 16.2101C15.672 16.2101 16.055 15.9104 16.055 15.4963C16.055 15.0001 15.6614 14.8243 15.0014 14.5356L14.6397 14.3804C13.5954 13.9355 12.9017 13.3782 12.9017 12.1999C12.9017 11.1146 13.7286 10.2884 15.021 10.2884C15.9411 10.2884 16.6026 10.6086 17.0792 11.4471L15.9523 12.1706C15.7042 11.7257 15.4366 11.5505 15.021 11.5505C14.5971 11.5505 14.3285 11.8193 14.3285 12.1706C14.3285 12.6047 14.5974 12.7805 15.2183 13.0494L15.58 13.2044C16.8096 13.7316 17.5038 14.2692 17.5038 15.4777C17.5038 16.7806 16.4803 17.4944 15.1058 17.4944C13.7619 17.4944 12.8936 16.8539 12.4688 16.0145L13.6448 15.3313ZM8.53271 15.4567C8.76005 15.86 8.96685 16.201 9.46405 16.201C9.93949 16.201 10.2394 16.015 10.2394 15.2917V10.371H11.6865V15.3112C11.6865 16.8097 10.808 17.4917 9.52565 17.4917C8.36698 17.4917 7.69598 16.8921 7.35474 16.1698L8.53271 15.4567Z" fill="black" />
        </svg>

      </div>
      <div className="flex-1">
        <div className="flex flex-col prose">
          <h3 className="p-0 m-0">
            <Link to={link} className="no-underline text-gray-200 hover:text-white">{title}</Link>
          </h3>
          <p className="text-[#5E8CA7] mb-4">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, description, link, width = '' }) => {

  const colors = ['teal', 'cyan', 'sky', 'purple']
  const selected = colors[Math.floor((Math.random() * colors.length))]
  return <div className={`border-l-8 border-${selected}-900 rounded-lg ${width}  mt-4 mb-4`} style={{
    background: '#1C2C35'
  }}>
    <div className={`flex flex-col p-4 px-10  prose`}>
      <h4 className="text-white">
        {title}
      </h4>
      <p className="text-gray-400">
        {description}
      </p>
      <Link to={link} class=" no-underline mx-auto px-12 py-2 border-2 text-white font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Visit</Link>
    </div>
  </div>
}

const IndexPage = () => {
  return (
    <Layout active='/'>
      <Seo title="Home" />
      <div className='container mx-auto px-36 p-8'>
        <div className="flex items-center justify-center my-16">
          <div>
            <h1 className="text-5xl font-medium leading-tight mt-0 mb-12 text-[#B0FBBC]">
              I’m Ankit Maurya, student and software engineer.
            </h1>
            <p className="text-xl font-medium leading-relaxed mt-6 mb-4 pr-24 text-gray-200">
              I specialize in rapidly prototyping software companies and web applications. I talk about my journey on Twitter, commit code to Github, and take shots on Dribbble.
            </p>
          </div>
        </div>
        <div className="my-24">
          <div className="flex justify-between">
            <div className="flex-auto prose">

              <h1 className=" text-2xl leading-tight mt-0 mb-12 text-white">Latest Articles</h1>
            </div>
            <div className="flex-none justify-end">
              <Link to="/articles" className="text-white">All Articles <span className="text-slate-500">{">>"}</span>
              </Link>
            </div>
          </div>
          <div>
            {articles.map((article) => <Article title={article.title} date={article.date} link={article.link} />)}
          </div>
        </div>
        <div>
          <div className="prose">

            <h1 className="text-2xl leading-tight mt-0 mb-2 text-white">
              Projects
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">

            {
              projects.map((project, index) => {
                const width = projects.length % 2 !== 0 && index === 0 ? 'col-span-2' : '';
                return <Project title={project
                  .title} description={project.description} link={project.link} width={width} />
              })
            }
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#1C2C35' }} className="flex items-center justify-center">
        <div className="prose my-24 text-center">
          <h1 style={{ color: "#B0FBBC" }}>What are you working on?</h1>
          <p className="px-16" style={{ color: '#ECF8FF' }}>
            Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
