import React from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import {  Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    '&:hover': {
      textDecoration: "underline",
      color: "blueviolet"
    }
  },
  download: {
    color: "#3f51b5",
    transform: "translate(0,5px)"
  }
})

export default function AdmissionForms() {
  const classes = createStyles()
  const reportingDetails = 'ReportingDetails_IIITT_2019-20.pdf'
  const admissionCancellation = 'CancellationForm.docx'
	return (
		<>
      <Navbar />
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10} className={classes.container}>
          <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
            <Box component="span" fontWeight={380}>
              Admission Forms
            </Box>
          </Typography>
          <section>
            <Typography variant="h5" className={classes.themeText}>
              Reporting Details
            </Typography>
            <a href={require(`../../docs/${reportingDetails}`)} download={`${reportingDetails}`} className={classes.link}>
              {reportingDetails}&nbsp;&nbsp;&nbsp;
              <GetAppRoundedIcon className={classes.download}/>
            </a>
          </section>
          <br />
          <section>
            <Typography variant="h5" className={classes.themeText}>
              Reporting Details
            </Typography>
            <a href={require(`../../docs/${admissionCancellation}`)} download={`${admissionCancellation}`} className={classes.link}>
              {admissionCancellation}&nbsp;&nbsp;&nbsp;
              <GetAppRoundedIcon className={classes.download}/>
            </a>
          </section>
        </Grid>
      </Grid>
      <Footer />
    </>
    )
}
