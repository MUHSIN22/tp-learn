import React, { Fragment, useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet, Link, Image, Font } from '@react-pdf/renderer';
import robotoBold from '../../Assets/fonts/Roboto-Bold.ttf'
import robotoMedium from '../../Assets/fonts/Roboto-Medium.ttf'
import robotoRegular from '../../Assets/fonts/Roboto-Regular.ttf'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import moment from 'moment';
import RichText, { HTMLParser } from '../../functionUtils/HTMLParser';
import Html from 'react-pdf-html';
import ReactDomServer from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser'

export default function PdfGenerator({ bio, resumeDetails }) {
  const [newBio, setNewBio] = useState(bio)
  const [resumeInfo, setResumeInfo] = useState(resumeDetails.resume_info);

  Font.register({
    family: "Roboto",
    fonts: [
      {
        src: robotoBold,
        fontWeight: "bold"
      },
      {
        src: robotoMedium,
        fontWeight: "medium"
      },
      {
        src: robotoRegular,
        fontWeight: "normal"
      }
    ]
  })

  const styles = StyleSheet.create({
    page: { backgroundColor: 'white', fontFamily: "Roboto", padding: 30, paddingTop: 60, paddingBottom: 60 },
    addressWrapper: { display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "flex-end" },
    nameText: { marginBottom: '5', color: "#F0967D", fontWeight: "bold" },
    profileImage: { width: "80px", height: "80px" },
    small: { fontSize: 10, textAlign: 'right', marginTop: 5 },
    links: { color: '#567088', textDecoration: "none", padding: 0 },
    nameWrapper: { padding: 3, backgroundColor: '#F0967D', color: '#fff', marginTop: 10 },
    mainRow: { display: 'flex', flexDirection: 'row', width: '100%', padding: 10 },
    description1: { fontSize: 11, flex: 1, lineHeight: 1.2 },
    sectionTitle: { fontSize: 13, width: 135, textAlign: "right", textTransform: 'uppercase', fontWeight: 800, paddingRight: 30, color: '#F0967D' },
    linePrimary: { width: '100%', height: 1, backgroundColor: '#F0967D', marginTop: 10, marginBottom: 5 },
    rightSection: { flex: 1 },
    rightSectionOfSkills: { flex: 1, display: "flex", flexDirection: "row", flexWrap: 'wrap' },
    rightSectionContentWrapper: { marginBottom: 10 },
    rightSectionBlueTitle: { fontSize: 11, fontWeight: "medium", marginTop: 5, marginBottom: 5, textTransform: "uppercase", textDecoration: "underline" },
    rightSectionMainText: { fontWeight: "medium", fontSize: 11, marginTop: 3, marginBottom: 3, textTransform: 'uppercase' },
    rightSectionDate: { fontSize: 500, fontSize: 10, marginTop: 3 },
    list: { display: "flex", flexDirection: "column", marginTop: 10 },
    listItem: { display: "flex", flexDirection: "row", fontSize: 11, marginBottom: 3, lineHeight: 1.2 },
    listBullet: { paddingRight: 10 },
    projectDetailsWrapper: { marginTop: 1, marginBottom: 1, display: "flex", flexDirection: "row", width: "100%", fontSize: 11 },
    projectSkill: { width: '20%', padding: 2, paddingLeft: 0 },
    projectComplexity: { width: "20%", padding: 2, paddingLeft: 0 },
    projectOutcome: { width: "60%", padding: 2, paddingLeft: 0 }
  });

  useEffect(() => {
    setNewBio((prev) => {
      prev = prev.replace(/<[^>]*>/g, '');
      return prev;
    })
  }, [bio])

  const makePoints = (data) => {
    console.log(data, 'this is roles data');
    let splittedData = data.split("&lt;p&gt;");
    splittedData.forEach((item, index) => {
      splittedData[index] = item.replace("&lt;/p&gt;", "")
    })
    return splittedData
  }

  const commaSeparator = (string) => {
    let splittedString = string.split(",")
    let newString = "";
    splittedString.forEach(item => {
      newString += item + " | "
    })
    return newString
  }
  // https://cv-builder.globaltaxolawgy.com/profile/p1_1658447829.jpeg
  const linkToBlob = async (url) => {
    let blob = await fetch(url).then(r => r.blob());
    return blob
  }


  const rolesAndResponsiblities = (text) => {
    return ReactDomServer.renderToStaticMarkup(ReactHtmlParser(ReactHtmlParser(text)))
  }

  const OrderedList = ({ children, depth }) => {
    return <View style={styles.list}>{children}</View>;
  };

  const OrderedListItem = ({ children, index }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>
          {index + 1}. &nbsp;<Text>{children}</Text>
        </Text>
      </View>
    );
  };

  return (
    <Document>
      {
        resumeDetails &&
        <Page size="A4" style={styles.page}>
          <View style={styles.addressWrapper}>
            <View>
              <Text style={styles.nameText}>{resumeDetails.name}</Text>
              <Text style={styles.small}> <Link src={"mailto:" + resumeDetails.email} style={styles.links} >{resumeDetails.email} </Link></Text>
              <Text style={styles.small}>{resumeDetails.address}</Text>
              <Text style={styles.small}>(+91) {resumeDetails.contact}</Text>
              <Text style={styles.small}>
                {
                  resumeInfo.link_linkedin &&
                  <Link src={resumeInfo.link_linkedin} style={styles.links}>Linkedin</Link>
                }
                {
                  resumeInfo.link_facebook &&
                  <>
                    <Text> | </Text>
                    <Link src={resumeInfo.link_facebook} style={styles.links}>Facebook</Link>
                  </>
                }
                {
                  resumeInfo.link_instagram &&
                  <>
                    <Text> | </Text>
                    <Link src={resumeInfo.link_instagram} style={styles.links}>Instagram</Link>
                  </>
                }
                {
                  resumeInfo.link_twitter &&
                  <>
                    <Text> | </Text>
                    <Link src={resumeInfo.link_twitter} style={styles.links}>Twitter</Link>
                  </>
                }
              </Text>

            </View>
            {
              resumeInfo.profile_pic &&
              <Image src={resumeInfo.profile_pic} style={styles.profileImage}></Image>
            }
          </View>
          <View style={styles.nameWrapper}>
          </View>
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.description1}>
              {newBio}
            </Text>
          </View>

          {
            resumeInfo.company &&
            <View style={styles.linePrimary}></View>
          }
          {/*  */}
          {
            resumeInfo.company &&
            <View style={styles.mainRow}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <View style={styles.rightSection}>
                {
                  resumeInfo.company[0] &&
                  resumeInfo.company.map((item, index) => (
                    <>
                      {
                        item.job_role ?
                          <View style={styles.rightSectionContentWrapper} key={index}>
                            <Text style={styles.rightSectionMainText} >{item.company_name}</Text>
                            <Text style={[styles.rightSectionMainText, { fontSize: 9 }]} >{item.job_role[0].designation_name}</Text>
                            <Text style={styles.rightSectionDate}>{item.industry_name}</Text>
                            <Text style={styles.rightSectionDate}>{moment(item.job_role[0].job_start_date, 'DD-MM-YYYY').format('yyyy MMM')} - {moment(item.job_role[0].job_end_date, 'DD-MM-YYYY').format('yyyy MM')}</Text>
                            {
                              item.job_role[0].role_responsibilties &&
                              <Fragment>
                                <Text style={styles.rightSectionBlueTitle} >Roles and Responsibilities: </Text>
                                {/* <Text style={styles.rightSectionDate}>{item.job_role[0].role_responsibilties}</Text> */}
                                <Html style={styles.rightSectionDate}>{rolesAndResponsiblities(item.job_role[0].role_responsibilties)}</Html>
                              </Fragment>
                            }
                            {/* <View style={styles.list}>
                            {
                              item.job_role[0].role_responsibilties && makePoints(item.job_role[0].role_responsibilties).map((item, index) => (
                                <Fragment>
                                  {
                                    index !== 0 &&
                                    <View style={styles.listItem}>
                                      <Text style={styles.listBullet}>•</Text>
                                      <Text>
                                        {item}
                                      </Text>
                                    </View>
                                  }
                                </Fragment>
                              ))
                            }
                          </View> */}
                            {
                              item.job_role[0].project && item.job_role[0].project[0] &&
                              <Text style={styles.rightSectionBlueTitle} >Projects: </Text>
                            }
                            {
                              item.job_role[0].project && item.job_role[0].project[0] &&
                              item.job_role[0].project.map((project, index) => (
                                <Fragment key={index}>
                                  <Text style={[styles.rightSectionDate, { marginBottom: 5 }]}>Project Name: {project.project_name}</Text>
                                  <Text style={[styles.rightSectionDate, { marginBottom: 3 }]}>Client Name: {project.client_name}</Text>
                                  <View style={styles.projectDetailsWrapper}>
                                    <Text style={[styles.projectSkill, { fontWeight: "medium" }]}>Skills</Text>
                                    <Text style={[styles.projectComplexity, { fontWeight: "medium" }]}>Complexity</Text>
                                    <Text style={[styles.projectOutcome, { fontWeight: "medium" }]}>Outcome</Text>
                                  </View>
                                  {
                                    project.project_skill && project.project_skill[0] &&
                                    project.project_skill.map((skill, i) => (
                                      <View style={styles.projectDetailsWrapper}>
                                        <Text style={styles.projectSkill}>{skill.skill_name}</Text>
                                        <Text style={styles.projectComplexity}>{skill.skill_complexity}</Text>
                                        <Text style={styles.projectOutcome}>{skill.skill_desc}</Text>
                                      </View>
                                    ))
                                  }
                                </Fragment>
                              ))
                            }
                          </View>
                          : null
                      }
                      {
                        (resumeInfo.company.length - 1 !== index) &&
                        <View style={styles.linePrimary}></View>
                      }
                    </>
                  ))
                }
              </View>
            </View>
          }


          {
            resumeInfo.education &&
            <View style={styles.linePrimary}></View>
          }
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.rightSection}>
              {
                resumeInfo.education &&
                resumeInfo.education.map((item, index) => (
                  <View style={styles.rightSectionContentWrapper} key={index}>
                    <Text style={styles.rightSectionMainText} >{item.degree_name} ({moment(item.course_start_date, 'DD-MM-YYYY').format('yyyy MMM')} - {moment(item.course_start_date, 'DD-MM-YYYY').format('yyyy MMM')})</Text>
                    <Text style={styles.rightSectionDate} >{item.university_name} | {item.course_cgpa} CGPA</Text>
                    <Text style={styles.rightSectionDate} ></Text>
                    <Text style={styles.rightSectionDate} >Extra Curricular Activity: {item.course_extra_activity}</Text>
                    <Text style={styles.rightSectionDate} >Projects: {item.course_project_info}</Text>
                    {item.upload_degree && <Link src={item.upload_degree} style={styles.rightSectionDate}>Link to certificate</Link>}
                  </View>
                ))
              }
            </View>
          </View>

          {
            resumeInfo.certificate &&
            <View style={styles.linePrimary}></View>
          }

          {
            resumeInfo.certificate &&
            <View style={styles.mainRow}>
              <Text style={styles.sectionTitle}>Certification Courses</Text>
              <View style={styles.rightSection}>
                {
                  resumeInfo.certificate &&
                  resumeInfo.certificate.map((item, index) => (
                    <View style={styles.rightSectionContentWrapper} key={index}>
                      <Text style={styles.rightSectionMainText} >{item.project_name} [{item.institute_name}]</Text>
                      {item.certificate_file && <Link src={item.certificate_file} style={styles.rightSectionDate}>Link to certificate</Link>}
                    </View>
                  ))
                }
              </View>
            </View>
          }

          {
            (commaSeparator(resumeInfo.entertainment) !== "" || commaSeparator(resumeInfo.adventure) !== "" || commaSeparator(resumeInfo.leisure) !== "" || commaSeparator(resumeInfo.sports) !== "") &&
            <View style={styles.linePrimary}></View>
          }

          {
            (commaSeparator(resumeInfo.entertainment) !== "" || commaSeparator(resumeInfo.adventure) !== "" || commaSeparator(resumeInfo.leisure) !== "" || commaSeparator(resumeInfo.sports) !== "") &&
            <View style={styles.mainRow}>
              <Text style={styles.sectionTitle} >Hobbies</Text>
              <View style={styles.rightSectionOfSkills}>
                <Text style={styles.description1}>
                  {commaSeparator(resumeInfo.adventure)}{commaSeparator(resumeInfo.entertainment)}{commaSeparator(resumeInfo.leisure)}{commaSeparator(resumeInfo.sports)}
                </Text>
              </View>
            </View>
          }
        </Page>
      }
    </Document>
  );
}

