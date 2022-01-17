import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/seo'
const articles = [
    {
        title: 'Reducing cognitive load by theming my tools',
        date: 'September 08, 2019',
        link: 'reducing',
        short: 'Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
    },
    {
        title: 'Code splitting & lazy loading a server side rendered React app',
        date: 'September 08, 2019',
        link: 'reducing',
        short: 'Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
    },
    {
        title: 'Easy project switching with Itermocil & command line shortcuts',
        date: 'September 08, 2019',
        link: 'reducing',
        short: 'Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
    },
]
const ArticleElement = ({ title, date, short, link }) => {
    return (
        <div className='flex flex-col my-12'>
            <p className='text-[#7AB6D9]'>{date}</p>
            <h1 className='text-[#ECF8FF] mb-1'>{title}</h1>
            <p className='text-[#ECF8FF]'>{short}</p>
            <Link to={link} className='text-[#7AB6D9] no-underline'>
                Read more...
            </Link>
        </div>
    )
}

export default function Article() {
    return (
        <Layout active='/articles'>
            <Seo title='articles' />
            <div className='container mx-auto px-36 p-8'>
                <div className='prose'>

                    <h1 className='text-white'>
                        Articles
                    </h1>
                    {
                        articles.map((article) => <ArticleElement
                            title={article.title} date={article.date} short={article.short} link={article.link}
                        />)
                    }
                </div>
            </div>
        </Layout>
    )
}