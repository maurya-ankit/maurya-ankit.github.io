import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { motion } from 'framer-motion'
import pageTransition from '../animation/PageTransition'
import { Itemfm, Containerfm } from '../animation/ItemAppear'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios'

const useStyle = makeStyles((theme) => ({
    root: {
        borderRadius: 20,
        // backgroundColor: theme.palette.alternate.primary,
        // margin: 10,
        padding: theme.spacing(2),
    },
    uploadImg: {
        // padding:20,
        marginTop: 10,
        marginBottom: 20,
    },
    url: {
        marginTop: 10,
        borderRadius: theme.spacing(2),
        background: theme.palette.info.light,
    },
    markdown: {
        width: "100%",
        marginBottom: 10,
        "& h1": theme.typography.h1,
        "& h2": theme.typography.h2,
        "& h3": theme.typography.h3,
        "& h4": theme.typography.h4,
        "& h5": theme.typography.h5,
        "& h6": theme.typography.h6,
        "& li": {
            // listStyle: "none",
            ...theme.typography.subtitle1,
            paddingLeft: 0,
            margin: theme.spacing(2),
            fontSize: theme.spacing(2),
        },
        "& p": theme.typography.body1,
        "& code": {
            padding: 10,
            margin: 10,
            fontFamily: "Courier Prime",
        }, "& img": {
            borderRadius: theme.spacing(1),
            display: "block",
            height: "auto",
            maxWidth: "100%"
        },
        "& iframe": {
            borderRadius: theme.spacing(1),
            // display: "block",
            // height: "auto",
            maxWidth: "100%",
            [theme.breakpoints.down('sm')]: {
                height: 315
            }
        }
    },

    icon: {

    },

    listContent: {
        color: theme.palette.primary.main
    },

}))
const DetailPage = (props) => {
    const classes = useStyle()
    const { id } = useParams()
    const [content, setcontent] = useState("")
    useEffect(() => {
        axios.get(`/data/cards/${id.toString().toLowerCase()}.md`).then(res => setcontent(res.data))
    }, [id])
    return (
        <Box display="flex" flexDirection="column" alignItems="stretch" padding={0}
            component={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageTransition}
        >

            <Grid
                container
                spacing={1}
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
                className={classes.root}


            >
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    component={motion.ul}
                    variants={Containerfm}
                    initial="hidden"
                    animate="visible"
                    style={{ paddingLeft: 0, padding: 20 }}
                >
                    <Grid item xs sm component={motion.li}

                        style={{ listStyle: "none" }} variants={Itemfm}>
                        {content ? <ReactMarkdown plugins={[gfm]} className={classes.markdown} allowDangerousHtml children={content} /> : <>
                            <Typography variant="h4" color="initial">
                                <Skeleton />
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                <Skeleton width="60%" />
                            </Typography>
                            <Typography variant="h4" color="initial">
                                <Skeleton />
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                <Skeleton />
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                <Skeleton width="80%" />
                            </Typography>

                        </>}
                    </Grid>
                </Grid>

            </Grid>

        </Box>
    )
}

export default DetailPage
