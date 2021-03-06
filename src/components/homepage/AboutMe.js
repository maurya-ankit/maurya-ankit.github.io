import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

const useStyle = makeStyles((theme) => ({
    pink: {
        color: "#d500f9"
    },
    title: {
        marginRight: 20,
        fontWeight: "bold"
    },
    subtitle: {
        marginTop: 20
    },
    titleInput: theme.typography.h3,
    descInput: theme.typography.subtitle1,
}))
const AboutMe = (props) => {
    const classes = useStyle()
    const { about } = props


    return (
        <>
            < Typography variant="h3" color="initial" className={classes.title} >
                {about ? <>{about.title} </> : <><Skeleton animation="wave" /><Skeleton animation="wave" /><Skeleton animation="wave" width="60%" /></>}
            </Typography >
            <Typography variant="h5" color="initial" className={classes.subtitle}>
                <>
                    {about ? <>{about.subtitle}</> : <> <Skeleton animation="wave" /><Skeleton width="60%" animation="wave" /></>}
                </>
            </Typography>
        </>
    )
}

export default AboutMe
