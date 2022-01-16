import React from 'react'
import { Helmet } from 'react-helmet'
import './src/styles/global.css'

export const Global = ({ element, props }) => {
    return <React.Fragment>
        <Helmet>
            <title>Ankit Maurya</title>
            <meta name="description" content="Home page" />
            <meta charset="UTF-8" />
            <meta name="google-site-verification" content="MysWIXF-YqnH7cUNS1vp5z5Jxot0Ho0CS7NMFhg7s3Q" />
        </Helmet>
        {element}
    </React.Fragment>
}