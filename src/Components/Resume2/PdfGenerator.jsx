import React, { Fragment, useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

export default function PdfGenerator({ bio, resumeDetails }) {
  const [newBio, setNewBio] = useState(bio)
  const [resumeInfo, setResumeInfo] = useState(resumeDetails.resume_info);

  const styles = StyleSheet.create({
    page: { backgroundColor: 'white', padding: 30, paddingTop: 60, paddingBottom: 60 },
    small: { fontSize: 10, textAlign: 'right' },
    links: { color: '#567088' },
    nameWrapper: { padding: 10, backgroundColor: '#567088', color: '#fff', marginTop: 10 },
    mainRow: { display: 'flex', flexDirection: 'row', width: '100%', padding: 10 },
    description1: { fontSize: 11, flex: 1, lineHeight: 1.2 },
    sectionTitle: { fontSize: 13, width: 135, textAlign: "right", textTransform: 'uppercase', fontWeight: 800, paddingRight: 30, color: '#567088' },
    linePrimary: { width: '100%', height: 1, backgroundColor: '#567088', marginTop: 10, marginBottom: 5 },
    rightSection: { flex: 1 },
    rightSectionOfSkills: { flex: 1, display: "flex", flexDirection: "row", flexWrap: 'wrap' },
    rightSectionContentWrapper: { marginBottom: 10 },
    rightSectionBlueTitle: { fontSize: 11, color: "#567088", marginTop: 5, marginBottom: 5, textTransform: "uppercase", textDecoration: "underline" },
    rightSectionMainText: { fontWeight: 600, fontSize: 11, marginTop: 3, marginBottom: 3, textTransform: 'uppercase' },
    rightSectionDate: { fontSize: 500, fontSize: 10, marginTop: 3 },
    list: { display: "flex", flexDirection: "column", marginTop: 10 },
    listItem: { display: "flex", flexDirection: "row", fontSize: 11, marginBottom: 3, lineHeight: 1.2 },
    listBullet: { paddingRight: 10 },
    projectDetailsWrapper: { marginTop: 1, marginBottom: 1, display: "flex", flexDirection: "row", width: "100%", fontSize: 11 },
    projectSkill: { width: '20%', padding: 2 },
    projectComplexity: { width: "20%", padding: 2 },
    projectOutcome: { width: "60%", padding: 2 }
  });

  useEffect(() => {
    setNewBio((prev) => {
      prev = prev.replace(/<[^>]*>/g, '');
      return prev;
    })
  }, [bio])

  const makePoints = (data) => {
    let splittedData = data.split("&lt;p&gt;");
    splittedData.forEach((item, index) => {
      splittedData[index] = item.replace("&lt;/p&gt;", "")
    })
    return splittedData
  }

  const commaSeparator = (string) => {
    let splittedString =  string.split(",")
    let newString = "";
    splittedString.forEach(item => {
      newString+=item+" | "
    })
    return newString
  }
  return (
    <Document>
      {
        resumeDetails &&
        <Page size="A4" style={styles.page}>
          <View>
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
            <Text style={styles.small}> <Link src="mailto:divyavarma@taxolawgy.com" style={styles.links} >divyavarma@taxolawgy.com </Link> || <Link src="mailto:divzy.v@gmail.com" style={styles.links} >divzy.v@gmail.com</Link> </Text>
          </View>
          <View style={styles.nameWrapper}>
            <Text>{resumeDetails.name}</Text>
          </View>
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.description1}>
              {newBio}
            </Text>
          </View>
          <View style={styles.linePrimary}></View>
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.rightSection}>
              {
                resumeInfo.company &&
                resumeInfo.company.map((item, index) => (
                  <View style={styles.rightSectionContentWrapper} key={index}>
                    <Text style={styles.rightSectionMainText} >{item.job_role[0].designation_name}</Text>
                    <Text style={styles.rightSectionMainText} >{item.company_name}</Text>
                    <Text style={styles.rightSectionDate}>{item.industry_name}</Text>
                    <Text style={styles.rightSectionDate}>{item.job_role[0].job_start_date} - {item.job_role[0].job_end_date}</Text>
                    <View style={styles.list}>
                      {
                        makePoints(item.job_role[0].role_responsibilties).map((item, index) => (
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
                    </View>
                    {
                      item.job_role[0].project[0] &&
                      <Text style={styles.rightSectionBlueTitle} >Projects: </Text>
                    }
                    {
                      item.job_role[0].project[0] &&
                      item.job_role[0].project.map((project, index) => (
                        <Fragment key={index}>
                          <Text style={[styles.rightSectionDate, { marginBottom: 5 }]}>{project.project_name}</Text>
                          <Text style={styles.rightSectionDate}>Client Name: {project.client_name}</Text>
                          <View style={styles.projectDetailsWrapper}>
                            <Text style={styles.projectSkill}>Skills</Text>
                            <Text style={styles.projectComplexity}>Complexity</Text>
                            <Text style={styles.projectOutcome}>Outcome</Text>
                          </View>
                          {
                            project.project_skill[0] &&
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
                ))
              }
            </View>
          </View>

          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.rightSection}>
              {
                resumeInfo.education &&
                resumeInfo.education.map((item, index) => (
                  <View style={styles.rightSectionContentWrapper} key={index}>
                    <Text style={styles.rightSectionMainText} >{item.degree_name} ({item.course_end_date} - {item.course_start_date})</Text>
                    <Text style={styles.rightSectionDate} >{item.university_name}</Text>
                    <Text style={styles.rightSectionDate} >{item.course_cgpa}</Text>
                    <Text style={styles.rightSectionDate} >{item.course_extra_activity}</Text>
                    <Link src={item.upload_degree} style={styles.rightSectionDate}>Link to certificate</Link>
                  </View>
                ))
              }
            </View>
          </View>

          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Certification Courses</Text>
            <View style={styles.rightSection}>
              {
                resumeInfo.certificate &&
                resumeInfo.certificate.map((item, index) => (
                  <View style={styles.rightSectionContentWrapper} key={index}>
                    <Text style={styles.rightSectionMainText} >{item.project_name} [{item.institute_name}]</Text>
                    <Link src={item.certificate_file} style={styles.rightSectionDate}>Link to certificate</Link>
                  </View>
                ))
              }
            </View>
          </View>

          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Hobbies</Text>
            <View style={styles.rightSectionOfSkills}>
              <Text style={styles.description1}>
                {commaSeparator(resumeInfo.adventure)}{commaSeparator(resumeInfo.entertainment)}{commaSeparator(resumeInfo.leisure)}{commaSeparator(resumeInfo.sports)}
              </Text>
            </View>
          </View>
        </Page>
      }
    </Document>
  );
}


