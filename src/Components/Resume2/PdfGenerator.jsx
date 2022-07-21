import React from 'react'
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

export default function PdfGenerator() {
  
  const styles = StyleSheet.create({
    page: { backgroundColor: 'white',  padding: 30, paddingTop: 60, paddingBottom: 60 },
    small: {fontSize: 10,textAlign: 'right'},
    links: { color: '#567088'},
    nameWrapper: { padding: 10, backgroundColor: '#567088', color: '#fff', marginTop: 10 },
    mainRow: { display: 'flex', flexDirection: 'row', width: '100%', padding: 10 },
    description1: { fontSize: 11, flex: 1 , lineHeight: 1.2 },
    sectionTitle: { fontSize: 13, width: 135, textAlign: "right", textTransform: 'uppercase', fontWeight: 800, paddingRight: 30, color: '#567088'  },
    linePrimary: { width: '100%', height: 1, backgroundColor: '#567088', marginTop: 10, marginBottom: 5 },
    rightSection: { flex: 1 },
    rightSectionOfSkills: { flex: 1,  display: "flex", flexDirection: "row", flexWrap: 'wrap' },
    rightSectionContentWrapper: { marginBottom: 10 },
    rightSectionMainText: { fontWeight: 600, fontSize: 11, marginTop: 3, marginBottom: 3, textTransform: 'uppercase' },
    rightSectionDate: { fontSize: 500, fontSize: 10, marginTop: 3 },
    list: { display: "flex", flexDirection: "column", marginTop: 10 },
    listItem: { display: "flex", flexDirection: "row", fontSize: 11, marginBottom: 3 , lineHeight: 1.2},
    listBullet: { paddingRight: 10 }
  });

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={styles.small}>B0409, Brigade Penorama</Text>
            <Text style={styles.small}>Mysore Road, Bangalore 560060</Text>
            <Text style={styles.small}>(+91) 9860486604</Text>
            <Text style={styles.small}><Link src="https://linkedin.com/in/divya-varma-5546847a" style={styles.links}>linkedin.com/in/divya-varma-5546847a</Link></Text>
            <Text style={styles.small}> <Link src="mailto:divyavarma@taxolawgy.com" style={styles.links} >divyavarma@taxolawgy.com </Link> || <Link src="mailto:divzy.v@gmail.com" style={styles.links} >divzy.v@gmail.com</Link> </Text>
          </View>
          <View style={styles.nameWrapper}>
            <Text>DIVYA VARMA</Text>
          </View>
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.description1}>
              Hardworking Entrepreneur passionate about building companies from within by
          attracting intelligent and productive professionals. Quality-driven leader focused on
          growth and experienced in fundraising, customer acquisition and executive
          management. Innovative company designer with 9 years of experience solving chronic
          deficiencies and driving growth.
            </Text>
          </View>	
          <View style={styles.linePrimary}></View>
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.rightSection}>
              <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >CO-FOUNDER, COO</Text>
                  <Text style={styles.rightSectionMainText} >TAXOLAWGY ONLINE SERVICES PVT. LTD - BANGALORE</Text>
                  <Text style={styles.rightSectionDate}>2019 -Present</Text>
                  <View style={styles.list}>
                    <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Negotiated terms of business acquisitions to increase business base, solidify market
                  presence and diversify offerings.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Reviewed individual department performance and worked with leadership to
                  improve processes, procedures and practices.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Advised on high-level hiring decisions for key leadership positions, conducted
                  senior hire interviews and nominated new board members.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Established and administered annual budget with controls to prevent overages,
                  minimize burn rate and support sustainability objectives.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Created and monitored promotional approaches to increase sales and profit levels.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Conducted target market research to scope out industry competition and identify
                  advantageous trends.	
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                              Investigated and addressed business development challenges to proactively mitigate
                  problems.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                            <Text>
                            Drove implementation of new market expansion to propel business forward and
                  adapt to market changes.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Led recruitment and development of strategic alliances to maximize utilization of
                  existing talent and capabilities.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Directed technological improvements, reducing waste and business bottlenecks.
                          </Text>
                      </View>
                  </View>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                    <Text style={styles.rightSectionMainText} >CHIEF OPRATING OFFICER</Text>
                  <Text style={styles.rightSectionMainText} >YO EDUTECH SOLUTIONS PVT LTD - NAGPUR</Text>
                  <Text style={styles.rightSectionDate}>2016-2019</Text>
                    <View style={styles.list}>
                    <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Negotiated terms of business acquisitions to increase business base, solidify market
                  presence and diversify offerings.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Reviewed individual department performance and worked with leadership to
                  improve processes, procedures and practices.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Advised on high-level hiring decisions for key leadership positions, conducted
                  senior hire interviews and nominated new board members.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Established and administered annual budget with controls to prevent overages,
                  minimize burn rate and support sustainability objectives.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Created and monitored promotional approaches to increase sales and profit levels.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Conducted target market research to scope out industry competition and identify
                  advantageous trends.	
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                              Investigated and addressed business development challenges to proactively mitigate
                  problems.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                            <Text>
                            Drove implementation of new market expansion to propel business forward and
                  adapt to market changes.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Led recruitment and development of strategic alliances to maximize utilization of
                  existing talent and capabilities.
                          </Text>
                      </View>
                      <View style={styles.listItem}>
                        <Text style={styles.listBullet}>•</Text>
                          <Text>
                            Directed technological improvements, reducing waste and business bottlenecks.
                          </Text>
                      </View>
                  </View>
                </View>
            </View>
          </View>
          
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.rightSection}>
              <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >CA-IPCC (2014)</Text>
                  <Text style={styles.rightSectionDate} >THE INSTITUTE OF CHARTERED ACCOUNTENT OF INDIA</Text>
                  <Text style={styles.rightSectionDate}>Editor Entertainment Law Journal</Text>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >BACHELOR OF COMMERCE WITH COMPUTER APPLICATION (2013)</Text>
                  <Text style={styles.rightSectionDate} >Dr. Ambedkar Institute of Management Studies and Research, Nagpur</Text>
                  <Text style={styles.rightSectionDate}>FIrst Class</Text>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >ALL INDIA SENIOR SECONDARY EDUCATION (CBSE) - 2010</Text>
                  <Text style={styles.rightSectionDate} >Kendriya Vidyalaya , SM Lines, Kamptee</Text>
                  <Text style={styles.rightSectionDate}>83.6%</Text>
                </View>
            </View>
          </View>
          
          <View style={styles.mainRow}> 
            <Text style={styles.sectionTitle}>Certification Courses</Text>
            <View style={styles.rightSection}>
              <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >LinkedIn Sales Navigator [LinkedIn Learning]</Text>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >Presentation tips for pitching to investors [LinkedIn learning]</Text>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >Complete SEO Training [Udemy]</Text>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >WordPress [Udemy]</Text>
                </View>
                <View style={styles.rightSectionContentWrapper}>
                  <Text style={styles.rightSectionMainText} >The ultimate public relation masterclass [Udemy]</Text>
                </View>
            </View>
          </View>
          
          <View style={styles.mainRow}>
            <Text style={styles.sectionTitle}>Skills & Interests</Text>
            <View style={styles.rightSectionOfSkills}>
              <Text style={styles.description1}>
                  Operations management | Budgeting | Business administration |
            Strategic planning | Staff Management | Business Development | End to
            End Start-up Management
                </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
}


