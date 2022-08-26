import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import privacyHero from '../../../Assets/privacy and terms/t and c hero.png'

export default function TermsAndConditions() {
  const itemRef = useRef([]);

  const handleScroll = (index) => {

  }
  return (
    <main className="privacy-container">
      <div className="privacy-top-image-wrapper">
        <h1 className="privacy-title">Privacy Policy</h1>
        <img src={privacyHero} alt="" className="privacy-top-image" />
      </div>
      <div className="privacy-main-wrapper">
        <div className="privacy-btns-wrapper">
          <button className="privacy-btn privacy-btn--active" onClick={() => handleScroll(1)}>1. Introduction</button>
          <button className="privacy-btn" onClick={() => handleScroll(2)}>2. Types of Personal</button>
          <button className="privacy-btn" onClick={() => handleScroll(3)}>3. How TOSPL</button>
          <button className="privacy-btn" onClick={() => handleScroll(4)}>4. Cookies and Other</button>
          <button className="privacy-btn" onClick={() => handleScroll(5)}>5. The Basis/ Grounds</button>
          <button className="privacy-btn" onClick={() => handleScroll(6)}>6. Information Sharing</button>
          <button className="privacy-btn" onClick={() => handleScroll(7)}>7. Third Party Content:</button>
          <button className="privacy-btn" onClick={() => handleScroll(8)}>8. Children</button>
          <button className="privacy-btn" onClick={() => handleScroll(9)}>9. Retention of Personal</button>
          <button className="privacy-btn" onClick={() => handleScroll(10)}>10. Controlling your</button>
          <button className="privacy-btn" onClick={() => handleScroll(11)}>10. Confidentiality and Security</button>
          <button className="privacy-btn" onClick={() => handleScroll(12)}>11. Social media</button>
          <button className="privacy-btn" onClick={() => handleScroll(13)}>12. Changes to this</button>
          <button className="privacy-btn" onClick={() => handleScroll(14)}>13. Disclaimer</button>
          <button className="privacy-btn" onClick={() => handleScroll(15)}>14. Data Protection Officer</button>
        </div>
        <div className="privacy-content-wrapper">
          <h2 className="privacy-content-title" ref={el => itemRef.current[0] = el}>Purpose</h2>
          <p className="privacy-content">
            Talentplace.ai is intended only to serve as a preliminary medium of contact and exchange of information for its users / members / visitors who have a bona fide intention to contact and/or be contacted for the purposes related to genuine existing job vacancies and for other career enhancement services.
          </p>

          <h2 className="privacy-content-title" ref={el => itemRef.current[0] = el}>USE TO BE IN CONFORMITY WITH THE PURPOSE</h2>
          <p className="privacy-content">
            Talentplace.ai (and related products) or service or product that is subscribe to or used (whether the same is paid for by you or not) is meant for the Purpose  and only the exclusive use of the subscriber/registered user. Copying or downloading or recreating or sharing passwords or sublicensing or sharing in any manner which is not in accordance with these terms, is a misuse of the platform or service or product and TOSPL reserves its rights to act in such manner as to protect its loss of revenue or reputation or claim damages including stopping your service or access and reporting to relevant authorities. In the event you are found to be copying or misusing or transmitting or crawling any data or photographs or graphics or any information available on Talentplace.ai for any purpose other than that being a bonafide Purpose, we reserve the right to take such action that we deem fit including stopping access and claiming damages
            <br /><br />
            The site is a public site with free access and Taxolawgy Online Services Pvt Ltd. assumes no liability for the quality and genuineness of responses. Taxolawgy Online Services Pvt Ltd. cannot monitor the responses that a person may receive in response to information he/she has displayed on the site. The individual/company would have to conduct its own background checks on the bonafide nature of all response(s).
            <br /><br />
            You give us permission to use the information about actions that you have taken on Talentplace.ai in connection with ads, offers and other content (whether sponsored or not) that we display across our services, without any compensation to you. We use data and information about you to make relevant suggestions and recommendation to you and others.
            <br /><br />
            The platform may contain links to third party websites, these links are provided solely as convenience to You and the presence of these links should not under any circumstances be considered as an endorsement of the contents of the same, if You chose to access these websites you do so at your own risk.
            <br /><br />
            Whilst using this platform an obligation is cast upon you to only provide true and correct information and in the case of creating a profile you undertake to at all times keep the information up to date. Taxolawgy Online Services Pvt Ltd. will not be liable on account of any inaccuracy of information on this web site. It is the responsibility of the visitor to further research the information on the site. Any breach of privacy or of the information provided by the consumer to Taxolawgy Online Services Pvt Ltd. to be placed on the website by technical or any other means is not the responsibility of Taxolawgy Online Services Pvt Ltd. Taxolawgy Online Services Pvt Ltd. does not guarantee confidentiality of information provided to it by any person acquiring/using all/any information displayed on the talentplace.ai website or any of its other websites / domains owned and operated by Taxolawgy Online Services Pvt Ltd.
            <br /><br />
            Taxolawgy Online Services Pvt Ltd. does not share personally identifiable data of any individual with other companies / entities without obtaining permission except with those acting as our agents.. Taxolawgy Online Services Pvt Ltd. shall share all such information that it has in its possession in response to legal process, such as a court order or subpoena. The user shall not utilize the services offered by talentplace.ai/TOSPL in any manner so as to impair the interests and functioning of talentplace.ai/TOSPL. The user undertakes not to duplicate, download publish, modify and distribute material on talentplace.ai unless specifically authorized by TOSPL in this regard.
            <br /><br />
            The user undertakes to use talentplace.ai for his/her own purposes. Using content from talentplace.ai for derivative works with a commercial motive without prior written consent from TOSPL is strictly prohibited.
            <br /><br />
            Users undertake that the services offered by talentplace.ai/ TOSPL shall not be utilized to upload, post, email, transmit or otherwise make available either directly or indirectly, any unsolicited bulk e-mail or unsolicited commercial e-mail. TOSPL reserves the right to filter and monitor and block the emails sent by you/user using the servers maintained by TOSPL to relay emails. All attempts shall be made by TOSPL and the user to abide by International Best Practices in containing and eliminating Spam.
            <br /><br />
            Users shall not spam the platform maintained by talentplace.ai / TOSPL or indiscriminately and repeatedly post jobs/forward mail indiscriminately etc. Any conduct of the user in violation of this clause shall entitle TOSPL to forthwith terminate all services to the user without notice and to forfeit any amounts paid by him.
            <br /><br />
            The user shall not upload, post, transmit, publish, or distribute any material or information that is unlawful, or which may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libellous, vulgar, obscene, or racially, ethnically, or otherwise objectionable.
            <br /><br />
            The user expressly states that the resume/insertion or information/ data being fed into the network of Taxolawgy Online Services Pvt Ltd. by the user is correct and complete in all respects and does not contain any false, distorted, manipulated, fraudulent or misleading facts or averments. Taxolawgy Online Services Pvt Ltd. expressly disclaims any liability arising out of the said resume insertion/information/ data so fed into the network of Taxolawgy Online Services Pvt Ltd. by the user. Further, the user agrees to indemnify Taxolawgy Online Services Pvt Ltd. for all losses incurred by Taxolawgy Online Services Pvt Ltd. due to any false, distorted, manipulated, defamatory, libellous, vulgar, obscene, fraudulent or misleading facts or otherwise objectionable averments made by the user on the network of Taxolawgy Online Services Pvt Ltd..
            <br /><br />
            The User is solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and Taxolawgy Online Services Pvt Ltd. assumes no responsibility or liability for their improper use of information relating to such usage of credit cards / debit cards used by the subscriber online / off-line.
            <br /><br />
            The User/Subscriber/Visitor to Talentplace.ai and/or its affiliated websites does hereby specifically agree that he/she shall, at all times, comply with the requirements of the Information Technology Act, 2000 as also rules, regulations, guidelines, bye laws and notifications made thereunder, while assessing or feeding any resume/ insertion or information/data into the computers, computer systems or computer network of Taxolawgy Online Services Pvt Ltd.. The said User/ subscriber/ visitor to Talentplace.ai and/or its affiliated websites does further unequivocally declare that in case he violates any provisions of the Information Technology Act, 2000 and/or rules, regulations, guidelines, byelaws and notifications made thereunder, he shall alone be responsible for all his acts, deeds and things and that he alone shall be liable for civil and criminal liability there under or under any other law for the time being in force.
            <br /><br />
            The User is solely responsible for obtaining, at his own cost, all licenses, permits, consents, approvals and intellectual property or other rights as may be required by the user for using the Service.
            <br /><br /><br />
            THE USER REPRESENTS, WARRANTS AND COVENANTS THAT ITS USE OF TALENTPLACE.AI SHALL NOT BE DONE IN A MANNER SO AS TO:
          </p>

          <ol className='privacy-list' type='a'>
            <li>Violate any applicable local, provincial, state, national or international law, statute, ordinance, rule or regulation;</li>
            <li>Interfere with or disrupt computer networks connected to Talentplace.ai;</li>
            <li>Impersonate any other person or entity, or make any misrepresentation as to your employment by or affiliation with any other person or entity;</li>
            <li>Forge headers or in any manner manipulate identifiers in order to disguise the origin of any user information;</li>
            <li>Interfere with or disrupt the use of Talentplace.ai by any other user, nor "stalk", threaten, or in any manner harass another user;</li>
            <li>Use Talentplace.ai in such a manner as to gain unauthorized entry or access to the computer systems of others;</li>
            <li>Reproduce, copy, modify, sell, store, distribute or otherwise exploit for any commercial purposes Talentplace.ai, or any component thereof (including, but not limited to any materials or information accessible through Talentplace.ai);</li>
            <li>Use content from the Site to derivative works with a commercial motive without prior written consent of the TOSPL.</li>
            <li>Use any device, software or routine to interfere or attempt to interfere with the proper working of Talentplace.ai; or</li>
            <li>Impose an unreasonable or disproportionately large load on Talentplace.ai infrastructure.</li>
            <li>Spam Talentplace.ai/TOSPL by indiscriminately and repeatedly posting content or forwarding mail that may be considered spam etc.</li>
            <li> Access data not intended for you or log into server or account that you are not authorized to access;</li>
            <li>Constitute an act of reverse engineering, decompiling, disassembling, deciphering or otherwise attempting to derive the source code for the Site or any related technology or any part thereof</li>
            <li>Engage in "framing," "mirroring," or otherwise simulating the appearance or function of the Site</li>
            <li>Attempt to probe, scan or test the vulnerability of a system or network;</li>
            <li>Use automated means to crawl and/or scrape content from Talentplace.ai and to manually scrape content from Talentplace.ai;</li>
            <li>The Site uses technological means to exclude Robots etc. from crawling it and scraping content. You undertake not to circumvent these methods.</li>
            <li>Access the Site except through the interfaces expressly provided by TOSPL;</li>
            <li> Attempt or breach security or authentication measures without proper authorization;</li>
            <li>Providing deeplinks into Talentplace.ai without prior permission of TOSPL is prohibited. Extracting data from Talentplace.ai using any automated process such as spiders, crawlers etc. or through any manual process for a purpose which has not been authorised in writing.</li>
            <li>Upload, post, email, transmit or otherwise make available either directly or indirectly, any unsolicited bulk e-mail or unsolicited commercial e-mail.</li>
            <li>Subscribers shall under no circumstance sublicense, assign, or transfer the License, and any attempt at such sublicense, assignment or transfer is void.</li>
            <li>Constitute hosting, modifying, uploading, posting, transmitting, publishing, or distributing any material or information
              <ol className='privacy-list' type='a'>
                <li>For which you do not have all necessary rights and licenses;</li>
                <li>Which infringes, violates, breaches or otherwise contravenes the rights of any third party, including any copyright, trademark, patent, rights of privacy or publicity or any other proprietary right;</li>
                <li>Which contains a computer virus, or other code, files or programs intending in any manner to disrupt or interfere with the functioning of Talentplace.ai, or that of other computer systems;</li>
                <li>That is grossly harmful, harassing, invasive of another's privacy, hateful, disparaging, relating to money laundering or unlawful, or which may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libellous/blasphemous, vulgar, obscene, or racially, ethnically, or otherwise unlawful in any manner whatsoever;</li>
                <li>Which constitutes or encourages conduct that would constitute a criminal offence, give rise to other liability, or otherwise violate applicable law;</li>
                <li>That deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
                <li>That belongs to another person and to which the user does not have any right to;</li>
                <li>That harm minors in any way;</li>
                <li>That threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation.</li>
              </ol>
            </li>
          </ol>

          <p className="privacy-content">
            The user shall not infringe on any intellectual property rights of any person / entity or retain information / download any information from any computer system or otherwise with an intention to do so.
            <br /><br />
            Taxolawgy Online Services Pvt Ltd. will make best efforts to do so but does not warrant that any of the web sites or any affiliate site(s) or network system linked to it is free of any operational errors nor does it warrant that it will be free of any virus, computer contaminant, worm, or other harmful components. The subscription of a user shall be subject to Quotas as applicable and as advised. E-Mails provided as part of contact details are expected to be genuine and access to such email accounts is available to authorised personnel only.
            <br /><br />
            Taxolawgy Online Services Pvt Ltd. shall not be liable for any loss or damage sustained by reason of any disclosure (inadvertent or otherwise) of any information concerning the user's account and / or information relating to or regarding online transactions using credit cards / debit cards and / or their verification process and particulars nor for any error, omission or inaccuracy with respect to any information so disclosed and used whether or not in pursuance of a legal process or otherwise.
            <br /><br />
            Payments for the services offered by Talentplace.ai shall be on a 100% advance basis. Refund if any will be at the sole discretion of Taxolawgy Online Services Pvt Ltd. TOSPL offers no guarantees whatsoever for the accuracy or timeliness of the refunds reaching the Customers card/bank accounts. TOSPL gives no guarantees of server uptime or applications working properly. All is on a best effort basis and liability is limited to refund of amount only. TOSPL undertakes no liability for free services. TOSPL reserves its right to amend / alter or change all or any disclaimers or terms of agreements at any time without any prior notice. All terms / disclaimers whether specifically mentioned or not shall be deemed to be included if any reference is made to them.
            <br /><br />
            Unless otherwise specified and notwithstanding anything contained in any other agreement or arrangement, by whatever name called, the performance obligation of TOSPL (service provider) is to provide access of its on-line portal to the customer for the duration of the subscription period & reference to any usage, by whatever name called or any other performance obligation, if any, is to provide the upper limit for consumption, which by itself, does not create any additional performance obligation upon TOSPL
            <br /><br />
            Subscriber/user acknowledges and agrees that TOSPL/Talentplace.ai, at its sole discretion and without prejudice to other rights and remedies that it may have under the applicable laws, shall be entitled to set off the amount paid or payable by a subscriber/user against any amount(s) payable by Subscriber/user to TOSPL under any other agreement or commercial relationship towards other products/services.
            <br /><br />
            Taxolawgy Online Services Pvt Ltd. further reserves its right to post the data on the website talentplace.ai or on such other affiliated sites and publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper at no extra cost to the subscriber / user.
            <br /><br />
            The subscription / agreement between TOSPL and the subscriber / user is not a "non-poach agreement" nor can the same be termed or used as an alternative to "non-poach agreement" in as much as TOSPL / talentplace.ai is a public site and all information posted by TOSPL goes to the public domain except information / data which is specifically assigned a non-public / private character.
            <br /><br />
            Any agreement for a subscription / usage entered into by TOSPL does not confer exclusivity of service on any subscriber / user.
            <br /><br />
            Taxolawgy Online Services Pvt Ltd. (India) Ltd will not be party to any legal proceedings between a user (e.g. a subscriber) and a party contracted through the site. In case Taxolawgy Online Services Pvt Ltd. is implicated in any legal proceedings, costs will be recovered from the party that names Taxolawgy Online Services Pvt Ltd. Taxolawgy Online Services Pvt Ltd. however will abide with any court order served on it through due process. TOSPL controls and operates this Platform from its headquarters in Nagpur, India and makes no representation that the materials on Talentplace.ai are appropriate or available for use in other locations. If you use this Website from other locations, you are responsible for compliance with applicable local laws including but not limited to the export and import regulations of other countries.
            <br /><br />
            In case a person using the world wide web/internet receives a spam or virus which includes a link to talentplace.ai or to any other site maintained, operated or owned by TOSPL, it should not be held responsible for the same. TOSPL assumes no responsibility for such mails.
            <br /><br />
            The services provided by the websites maintained, operated or owned by TOSPL do not extend to acting as an agent (express or implied) on behalf of any subscriber or user.
            <br /><br />
            TOSPL has no agents and does not operate through any agents save for those specifically mentioned on the home page of the website.
            <br /><br />
            The Terms and conditions mentioned above regulate the usage of talentplace.ai. Any person using talentplace.ai in violation of the stipulations contained in the Terms and Conditions of talentplace.ai shall render himself/herself liable to appropriate action in a court of law both civil and criminal.
            <br /><br />
            BY ACCEPTING THESE TERMS AND CONDITIONS, YOU AGREE TO INDEMNIFY AND OTHERWISE HOLD HARMLESS TOSPL, ITS DIRECTORS, OFFICERS, EMPLOYERS, AGENTS, SUBSIDIARIES, AFFILIATES AND OTHER PARTNERS FROM ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES ARISING OUT OF, RELATING TO, OR RESULTING FROM YOUR USE OF THE SERVICES OBTAINED THROUGH TALENTPLACE.AI INCLUDING BUT NOT LIMITED TO INFORMATION PROVIDED BY YOU OR ANY OTHER MATTER RELATING TO TALENTPLACE.AI. ANY REFERENCE TO DUTIES AND TAXES ETC IN THESE TERMS OF USE SHALL INCLUDE GOODS AND SERVICES TAX (HEREIN REFERRED AS GST) FROM THE DATE GST LAW IS IMPLEMENTED IN INDIA. ANY ADDITIONAL TAX LIABILITY ARISING ON ACCOUNT OF INTRODUCTION OF GST (WHETHER ON ACCOUNT OF INCREASE IN RATE OR ANY CHANGE BROUGHT IN BY THE NEW TAX REGIME) WOULD BE RECOVERED OVER AND ABOVE THE AGREED CONTRACT PRICE / SERVICE FEE.
            <br /><br />
            If any dispute arises between a user/users and TOSPL arising out of use of Talentplace.ai or thereafter, in connection with the validity, interpretation, implementation or alleged breach of any provision of these Terms and Conditions, the dispute shall be referred to a sole arbitrator who shall be an independent and neutral third party identified by the Company. Decision of the arbitrator shall be final and binding on both the parties to the dispute. The place of arbitration shall be Nagpur, India. The Arbitration & Conciliation Act, 1996 as amended, shall govern the arbitration proceedings.
            <br /><br />
            These Terms and Conditions shall be governed by the laws of Republic of India. The exclusive forum for any disputes arising out of or relating to these Terms of Use shall be a court of law located in Nagpur, India.
            <br /><br />
            Taxolawgy Online Services Pvt Ltd., Taxolawgy, and TOSPL and are used interchangeably and are synonymous.
            <br /><br />
            The user of talentplace.ai is subject to the  <Link to="/privacy-policy">Privacy Policy</Link>  available through this link.
            <br /><br />
            In case of non-compliance of these Terms and Conditions or Privacy Policy TOSPL may terminate usage rights and take down any offending information that might have been uploaded by such subscriber/user
            <br /><br /><br />
            <b>ADDITIONALLY, BASIS SERVICES CHOSEN, CERTAIN PRODUCT/SERVICE SPECIFIC CONDITIONS MAY APPLY.</b>
          </p>
          <br />
          <b>Job Seekers</b>
          <br />
          <ol className='privacy-list'>
            <li>TalentPlace Resume Builder / Submission of Resume / Resume Upload / Resume Manager</li>
            <li>Resume Display</li>
            <li>RecruiterConnection</li>
            <li>Resume Writing</li>
            <li>Jobs4U, Priority Applicant</li>
            <li>Interview Pro</li>
            <li>Applications by Non Registered Users</li>
          </ol>
          <br />
          <b>Recruiters</b>
          <br />
          <ol className='privacy-list'>
            <li>Classified Job listing (single)</li>
            <li>Classified Subscriptions for various period</li>
            <li>Hot Vacancies (single)</li>
            <li>Hot Vacancies Subscriptions</li>
            <li>Job Gallery</li>
            <li>Best Places to Work</li>
            <li>Manual Shortlisting</li>
            <li>Display of Banners</li>
            <li>e-Apps</li>
            <li>Resdex</li>
            <li>Insta Hire</li>
            <li>TalentPlaceRecruiter</li>
          </ol>
          <br /><br />

          <ol className='privacy-list'>
            <li>
              TalentPlace Resume Builder / Submission of Resume / Resume Upload / Resume Manager by registering your resume on talentplace.ai, you agree to the following terms
              <ol className='privacy-list'>
                <li>The resume/ insertion or information/data fed by the user can be updated by the user alone.</li>
                <li>The payment for service once subscribed to by the subscriber is not refundable and any amount paid shall stand appropriated.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the resume/ insertion or information/data is fed by the user.</li>
                <li>Taxolawgy Online Services Pvt Ltd. neither guarantees nor offers any warranty about the credentials bonafides, status or otherwise of the prospective employer/organization which downloads the resume/ insertion or information/data and uses it to contact the user.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for loss of any data technical or otherwise, or of the resume/ insertion or information/data or particulars supplied by user due to acts of god as well as reasons beyond its control like corruption of data or delay or failure to perform as a result of any cause(s) or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strikes, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, distributed denial of service attacks, virus attacks, war and natural calamities.</li>
                <li>It shall be sole prerogative and responsibility of the user to check the authenticity of all or any response received pursuant to the resume/ insertion or information/data being fed into the network system of Taxolawgy Online Services Pvt Ltd. by the user, for going out of station or in station for any job or interview. Taxolawgy Online Services Pvt Ltd. assumes no responsibility in respect thereof and expressly disclaims any liability for any act, deed or thing which the user may so do, pursuant to the receipt of the response, if any, to the resume/ insertion or information/ date being fed into the network system of Taxolawgy Online Services Pvt Ltd..</li>
                <li>Uploading of multiple resumes beyond a reasonable limit by the same individual, using the same or different accounts shall entitle Taxolawgy Online Services Pvt Ltd. to remove the Resumes without notice to the subscriber. </li>
                <li>This service is only meant for candidates looking for suitable jobs. Any usage with commercial intent is prohibited.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject and delete any resume/ insertion or information/data fed in by the user without assigning any reason.</li>
                <li>This service entitles the user alone i.e the same person, to add modify or change the data/information fed in by him but does not entitle him to use the service to feed fresh insertion or information/data /resume of another person in place of the insertion or information/data already fed in by such user.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of resume in order to fit resume in its database.</li>
                <li>The subscriber shall be assigned a password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through talentplace.ai, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber. When you indicate your interest in a Job Listing on talentplace.ai, you are sending your CV and application information including relevant documents to talentplace.ai, and you are requesting and authorizing talentplace.ai to make available such application information to the applicable Employer(s) for such Job Listing(s).</li>
                <li>In addition, by using talentplace.ai, you agree that talentplace.ai is not responsible for the content of the Employer's application form, messages, screener questions, testing assessments; required documents, or their format or method of delivery.</li>
                <li>You consent to your application, documents and any responses sent to you by the Employer or vice versa through talentplace.ai being processed and analysed by talentplace.ai according to these terms of use and talentplace.ai's Privacy Policy. Talentplace.ai shall store and process such information regardless of whether a job vacancy has been filled. Talentplace.ai may use your application materials (including public CVs and responses to employer's questions) to determine whether you may be interested in a Job Listing, and talentplace.ai may reach out to you about such Job Listing.</li>
                <li>Information you post in public areas of Talentplace sites or applications or make visible in the resume and profile database may be accessed, used, and stored by others around the world, including those in countries that might not have legislation that guarantees adequate protection of personal information as defined by your country of residence. While Talentplace.ai takes measures to safeguard your information from unauthorized access or inappropriate use, Talentplace.ai does not control these third parties and we are not responsible for their use of information you give to us. Accordingly, you should not post sensitive information or any other information you would not want made public, to any portion of Talentplace.ai or application or to a public website.</li>
                <li>In order to use Talentplace.ai, you may sign in using your Facebook/Google login. If you do so, you authorize us to access and use certain Facebook/Google account information, including but not limited to your public Facebook profile and posts. For more details regarding the information we collect from you and how we use it, please visit our Privacy Policy.</li>
                <li>It shall be the sole responsibility of the user to ensure that it uses the privacy setting options as it deems fit to debar / refuse access of the data fed by it, to such corporate entities individuals or consultants. Taxolawgy Online Services Pvt Ltd. shall not be responsible for such insertions / data being accessed by its subscribers or users whose access has not been specifically blocked /debarred by the user while using the privacy settings.</li>
                <li>Even though you may have marked your profile as unsearchable, on viewing a profile when you are logged into your Talentplace.ai account, a snapshot of your profile maybe made visible to the recruiter.</li>
                <li>Although Taxolawgy Online Services Pvt Ltd. will make all possible efforts to adhere to these privacy settings, it will not be responsible for a resume being seen by a blocked user for any reason. For best privacy settings it is recommended that you do not allow your resume to be searched at all.</li>
                <li>The user represents that he/she is not a minor and is not under any legal or other disability which limits his/her ability to comply with these Terms or to install and use the services subscribed and purchased with minimal risk of harm to you or others. You further represent that you are not purchasing the products/services for resale to others and will not do so without Taxolawgy Online Services Pvt Ltd. (India) Limited's prior written consent.</li>
                <li>All changes / modifications made by the user to the data / information shall be effected and will come into operation only after 24-48 hours of such changes / modifications being made.</li>
                <li>On registration you agree to: a) Making your resume searchable to clients of TOSPL who subscribe to RDA (Resume Database Access). You may be contacted by subscribers of RDA via email, telephone (even though you may have registered with NDNC) and/or post. If you wish to modify this setting and make yourself non-searchable, you may reset this in the Privacy Setting section of your resume. We recommend that you read the privacy settings carefully and TOSPL will not be held responsible for contacts/mails received by you. b) Receive job alerts (mails detailing jobs that match your profile as entered on talentplace.ai) via email. You may remove yourself from the job alert email database by resetting this option in the Privacy Setting section of your resume c) Receive promotional mailers/ special offers. You may remove yourself from the promotional mailer email database by resetting this option on the Privacy Setting section of your resume.</li>
                <li>The user agreement between a user/subscriber and TOSPL will be treated as having been terminated in the following events: (i) On completion of the term for which the user/subscriber engages the services of the website; or (ii) In case the user/subscriber violates any of the conditions of this agreement or any other agreement entered into by him with TOSPL, however, such termination will be at the option and discretion of TOSPL; or (iii)On writing and on such terms as agreed to by the parties mutually.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website.</li>
              </ol>
            </li>

            <li>
              Resume Display
              <ol className='privacy-list'>
                <li>In case necessary inputs required by us for commencing the services are not received by us within 30 days of the payment, the order shall stand cancelled and the any amounts paid shall be appropriated.</li>
                <li>The payment for service once subscribed to by the subscriber is not refundable and any amount paid shall stand appropriated.</li>
                <li>The amount paid entitles the subscriber alone to the service by Taxolawgy Online Services Pvt Ltd. for a period of subscription opted for from the date of up-linking of the resume on the website Talentplace.ai or such other mirror or parallel site(s) as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such web host shall be without any extra cost to the subscriber / user.</li>
                <li>The resume displayed can be updated by the subscriber alone free of cost.</li>
                <li>Notwithstanding anything contained herein, through Resume Display service your resume is made available from the home page of Talentplace.ai and can be by freely accessed by anyone.</li>
                <li>Additionally, through this service your resume is also made a part of Talentplace.ai's proprietary database, accessed only by companies/recruiter registered with us. Please log into your account and set the visibility of the resume as desired by you, here you can selectively block a company/recruiter from accessing your resume. (Please note that the confidentiality settings of the resume which has been made part of the exclusive database is independent of the confidentiality settings of the resume made part of the free search service)</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers neither guarantee nor warranties that there would be a satisfactory response or any response at all once the resume is put on display.</li>
                <li>Taxolawgy Online Services Pvt Ltd. neither guarantees nor offers any warranty about the credentials of the prospective employer/organization which down loads the information and uses it to contact the prospective employee / visitor / user / subscriber.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for loss of any data technical or otherwise, and particulars supplied by subscribers due to reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strikes, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>It shall be the sole prerogative and responsibility of the individual to check the authenticity of all or any response received pursuant to the resume being displayed by Taxolawgy Online Services Pvt Ltd. for going out of station or in station for any job / interview and Taxolawgy Online Services Pvt Ltd. assumes no responsibility in respect thereof.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, refund if any shall be on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from subscriber or from a third party on behalf of the subscriber.</li>
                <li>This subscription is not transferable i.e. it is for the same person throughout the period of subscription.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of resume in order to fit the resume in its database.</li>
                <li>The liability, if any, of Taxolawgy Online Services Pvt Ltd. is limited to the extent of the amount paid by the subscriber.</li>
                <li>The subscriber shall be assigned password(s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through its site Talentplace.ai, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft or data/corruption or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber</li>
                <li>The subscriber undertakes that the data/information provided by him is true and correct in all respects.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website </li>
                <li> (With Resume writing - 4 working days after you approve final resume) & (Without Resume writing - 4 working days after receiving your updated Resume)</li>
                <li>Service will be deemed approved if a user fail to review the profile for 7 days. Users are advised to add or remove any information on profile which are not relevant to user.</li>
              </ol>
            </li>

            <li>
              Recruiter Connection
              <ol className='privacy-list'>
                <li>The payment for service once subscribed to by the subscriber is not refundable and any amount paid shall stand appropriated.</li>
                <li>Through RecruiterConnection, the subscriber can buy credits to send messages to the recruiter of his/her choice.</li>
                <li>If the recruiter does not view the message sent to him/her within 15 days, the period being subject to change without prior notice, then the credit would be returned to the jobseeker. Credits will be returned only once.</li>
                <li>All the credits are valid for one year from the date of purchase.</li>
                <li>After contacting a recruiter, the jobseeker cannot send a message to the same recruiter for 30 days, the period being subject to change without prior notice.</li>
                <li>Using the service, the jobseeker would be able to send a message of maximum 500 characters along with a subject line of maximum 200 characters.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers neither guarantee nor warranties that there would be a satisfactory response or any response at all once the message is sent to the recruiter.</li>
                <li>Taxolawgy Online Services Pvt Ltd. neither guarantees nor offers any warranty about the credentials of the prospective recruiter/organization which sees the message and down loads the information and uses it to contact the prospective employee / visitor / user / subscriber.</li>
                <li>It shall be the sole prerogative and responsibility of the individual to check the authenticity of all or any response received pursuant to the connect message for going out of station or in station for any job / interview and Taxolawgy Online Services Pvt Ltd. assumes no responsibility in respect thereof.</li>
                <li>This subscription is not transferable i.e. it is for the same person throughout the period of subscription.</li>
                <li>The subscriber undertakes that the data/information provided by him is true and correct in all respects.</li>
                <li>This service shall not be utilized by the user for uploading/transmitting content which is illegal or objectionable in any manner.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website.</li>
              </ol>
            </li>

            <li>
              Resume Writing
              <ol className='privacy-list'>
                <li>In case necessary inputs required by us for commencing the services are not received by us within 30 days of the payment, the order shall stand cancelled and the any amounts paid shall be appropriated.</li>
                <li>The subscriber shall certify that the information/data supplied by it to Taxolawgy Online Services Pvt Ltd. is accurate and correct.</li>
                <li>The subscriber shall give reasonable time to Taxolawgy Online Services Pvt Ltd. for writing of resumes.</li>
                <li>The subscriber must respond to the queries raised (sent by email) by Taxolawgy Online Services Pvt Ltd. within 7 days of such a query being raised failing which, Taxolawgy Online Services Pvt Ltd. shall stand absolved of all its obligation, if any.</li>
                <li>The subscription amount once paid for by the subscribers is not refundable and all amount(s) paid on behalf of the subscriber shall stand appropriated.</li>
                <li>The liability, if any, of Taxolawgy Online Services Pvt Ltd. is limited to the extent of the amount paid by the subscriber.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the resume is written and used by the subscriber to apply for jobs.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall not be held liable for loss of any data technical or otherwise, information, particulars supplied by subscriber due to reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strikes, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason, but in such an eventuality, any amount so paid for, shall be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from subscriber or from a third party on behalf of the subscriber.</li>
                <li>This subscription is not transferable i.e. it is for the same person throughout the period of subscription.</li>
                <li>The subscriber shall be assigned password(s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through Talentplace.ai, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website.</li>
                <li>Content and Images( Visuals) in visual resume are provided by Subscriber.</li>
                <li>Taxolawgy Online Services Pvt Ltd. India Limited disclaims all warranties against infringement.</li>
              </ol>
            </li>

            <li>
              Jobs on the Move (Jobs4U) & Priority Applicant
              <ol className='privacy-list'>
                <li>The payment for service once subscribed to by the subscriber is not refundable and any amount paid shall stand appropriated.</li>
                <li>The amount paid entitles the subscriber alone to the service by Taxolawgy Online Services Pvt Ltd. for a period of subscription opted for from the date of sending the first job SMS.</li>
                <li>Taxolawgy Online Services Pvt Ltd. uses an automated algorithm to match jobs against the keywords/attributes present in the profile submitted by the user, and hence offers no guarantee nor warranties that the jobs sent in the job SMS will be relevant to the profile.</li>
                <li>Taxolawgy Online Services Pvt Ltd. neither guarantees nor offers any warranty about the credentials of the prospective employer/organization whose details are sent in the Job SMS.</li>
                <li>By opting for this service you are agreeing to receive details of Jobs from Talentplace.ai, on your mobile, till the tenure of the service.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will try its utmost best to try and deliver all SMS sent, however, it does not take any responsibility for SMSs not delivered (which may be on account of phones being out of order, operator network problems, SIM not being used anymore etcetera). It does take the responsibility of the SMSs leaving its vendor SMS gateway.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will not be responsible in any way for failure of any backend technology of SMS applications at the Operators end and resultant inability of a user to receive SMS.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves the right to regulate number of SMSs sent out to a particular user in a single day.</li>
                <li>The service will be delivered on the mobile number provided at the time of purchase of the service, and will continue on the new number if changed by the user.</li>
                <li>If there are no jobs found matching the user's profile, an intimation SMS & email is sent to the user, on the 7th day and the user is asked for changing/editing his profile.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for loss of any data technical or otherwise, and particulars supplied by subscribers due to reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strikes, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>It shall be the sole prerogative and responsibility of the individual to check the authenticity of all or any response received pursuant to the resume being displayed by Taxolawgy Online Services Pvt Ltd. for going out of station or in station for any job / interview and Taxolawgy Online Services Pvt Ltd. assumes no responsibility in respect thereof.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, refund if any shall be on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from subscriber or from a third party on behalf of the subscriber.</li>
                <li>This subscription is not transferable i.e. it is for the same person throughout the period of subscription.</li>
                <li>The liability, if any, of Taxolawgy Online Services Pvt Ltd. is limited to the extent of the amount paid by the subscriber.</li>
                <li>The subscriber shall be assigned password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through its site Talentplace.ai, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft or data/corruption or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The subscriber undertakes that the data/information provided by him is true and correct in all respects.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website.</li>
                <li>If you would like to stop the service before the due date, please write an email to contact@talentplace.ai</li>
                <li>The J4U service will be processed within 4 working days after we receive your updated resume. In case we do not receive the same within 7 days, we will use your last updated resume on TalentPlace for processing your service</li>
                <li>You will receive 1 call from TalentPlace Expert within 4 working days after you purchase Jobs4U service.</li>
                <li>We will initiate 3 calling attempts to connect with you. In case No-response from your end post 3rd attempt, we will initiate the activation of J4U service & take it as deemed approved.</li>
              </ol>
            </li>

            <li>
              Interview Pro
              <ol className="privacy-list">
                <li>The payment for service once subscribed to by the subscriber is not refundable and any amount paid shall stand appropriated.</li>
                <li>
                  The user understands that:
                  <ol className='privacy-list' type='a'>
                    <li>Services once subscribed can only be activated post the subscriber having uploaded his/her updated profile.</li>
                    <li>The Industry expert who conducts the interview can only do so once, service has been activated and the resume of the user/subscriber has been shared by the user/subscriber</li>
                    <li>The user understands that this is a time based product to be utilized within a specified period of time. Once subscribed therefore the Interview Pro product must be activated and utilized by him/her within a reasonable period of time of the same being subscribed.</li>
                  </ol>
                </li>
                <ol>
                  <li>Taxolawgy Online Services Pvt Ltd. does not share personally identifiable data of any individual with other companies/entities without obtaining permission. Taxolawgy Online Services Pvt Ltd. may share all such information that it has in its possession for its own purposes including sending promotional mailers etc and in response to legal process, such as a court order or subpoena.</li>
                  <li>The user undertakes that he/she will not disseminate false/objectionable/offensive material using these services.</li>
                  <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for loss of any data technical or otherwise, and particulars supplied by subscribers due to reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strikes, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities. Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from subscriber or from a third party on behalf of the subscriber.</li>
                  <li>This subscription is not transferable i.e. it is for the same person throughout the period of subscription.</li>
                  <li>The liability, if any, of Taxolawgy Online Services Pvt Ltd. is limited to the extent of the amount paid by the subscriber.</li>
                  <li>The subscriber shall be assigned password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through its site Talentplace.ai, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft or data/corruption or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                  <li>The subscriber undertakes that the data/information provided by him is true and correct in all respects.</li>
                </ol>
              </ol>
            </li>

            <li>
              Applications by Non Registered Users
              <ol className='privacy-list'>
                <li>The user undertakes that the data/information being provided by him/her in the resume is true and correct in all respects..</li>
                <li>Taxolawgy Online Services Pvt Ltd. does not share personally identifiable data of any individual with other companies/entities without obtaining permission. Taxolawgy Online Services Pvt Ltd. may share all such information that it has in its possession for its own purposes including sending promotional mailers etc and in response to legal process, such as a court order or subpoena.</li>
                <li>The user undertakes that he/she will not disseminate false/objectionable/offensive material using these services.</li>
                <li>This interface shall be exclusively for the purposes of bona fide job applications; usage of the interface in any other fashion is strictly prohibited.</li>
                <li>Taxolawgy Online Services Pvt Ltd. neither guarantees nor offers any warranty about the credentials bonafides, status or otherwise of the prospective employer/organization which downloads the resume/ insertion or information/data and uses it to contact the user.</li>
                <li>The user shall not infringe on any intellectual property rights of any person/entity or retain information/download any information from any computer system or otherwise with an intention to do so.</li>
                <li>The User/subscriber/visitor to talentplace.ai or affiliated site(s) is prohibited from introducing/posting or transmitting information or software, which contains a computer virus, or a contaminant, worm or other harmful components on the internet or on talentplace.ai site or sub-domains or on any affiliate sites or any other network system</li>
                <li>Taxolawgy Online Services Pvt Ltd. will not be party to any legal proceedings between a user (e.g. a subscriber) and a party contracted through the site. In case Taxolawgy Online Services Pvt Ltd. is implicated in any legal proceedings, costs will be recovered from the party that names Taxolawgy Online Services Pvt Ltd. Taxolawgy Online Services Pvt Ltd. however will abide with any court order served on it through due process.</li>
                <li>When you indicate your interest in a Job Listing on talentplace.ai, you are sending your CV and application information including relevant documents to talentplace.ai, and you are requesting and authorizing talentplace.ai to make available such application information to the applicable Employer(s) for such Job Listing(s).</li>
                <li>In addition, by using talentplace.ai, you agree that talentplace.ai is not responsible for the content of the Employer's application form, messages, screener questions, testing assessments; required documents, or their format or method of delivery.</li>
                <li>You consent to your application, documents and any responses sent to you by the Employer or vice versa through talentplace.ai being processed and analysed by talentplace.ai according to these terms of use and talentplace.ai's Privacy Policy. Talentplace.ai shall store and process such information regardless of whether a job vacancy has been filled. Talentplace.ai may use your application materials (including public CVs and responses to employer's questions) to determine whether you may be interested in a Job Listing, and talentplace.ai may reach out to you about such Job Listing.</li>
                <li>Information you post in public areas of TalentPlace sites or applications or make visible in the resume and profile database may be accessed, used, and stored by others around the world, including those in countries that might not have legislation that guarantees adequate protection of personal information as defined by your country of residence. While Talentplace.ai takes measures to safeguard your information from unauthorized access or inappropriate use, Talentplace.ai does not control these third parties and we are not responsible for their use of information you give to us. Accordingly, you should not post sensitive information or any other information you would not want made public, to any portion of Talentplace.ai or application or to a public website.</li>
              </ol>
            </li>
          </ol>

          <h2 className="privacy-content-title" ref={el => itemRef.current[0] = el}>Recruiter</h2>
          <p className="privacy-content">
            Additional Terms applicable to Recruiters "You" accessing any portion of the website Talentplace.ai:
          </p>

          <ol className='privacy-list'>
            <li>You will comply with all applicable data protection laws in relation to the processing of personal data; and not process personal data in an unlawful manner and excessive with regard to agreed purposes as defined in the privacy policy and this terms and conditions</li>
            <li>You shall implement adequate technical and organizational controls to protect the shared personal data obtained from the Company against unauthorised or unlawful processing and against accidental loss, destruction, damage, alteration or disclosure</li>
            <li>You agree to provide reasonable assistance as is necessary to facilitate the handling of any Data Security Breach (as relevant under privacy laws applicable) in an expeditious and compliant manner</li>
            <li>You agree that the responsibility for complying with a data subject /data principal request lies with the Party which holds/processes the Personal Data collected/shared</li>
            <li>You warrant and represent that the institution shall not disclose or transfer Personal Data obtained from the Company to any sub-processors without ensuring that adequate and equivalent safeguards to the Personal Data.</li>
            <li>You shall retain or process shared Personal Data for no longer than is necessary to carry out the agreed purposes.</li>
            <li>You shall act as an independent Data Controller in respect of shared personal data obtained from the Company once the data is collected by You and You shall be responsible for its secure use at all times.</li>
          </ol>
          <br /><br />
          <ol className="privacy-list">
            <li>
              Classified Job listing (single)
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. shall place the information relating to vacancies in the Hot Vacancies & such other Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such additional web hosting shall be without any extra cost to the subscriber / user.</li>
                <li>The insertion so displayed in the classified section of talentplace.ai shall be for a fixed period (currently 30 days), which period is subject to change without notice. Every instance of refreshing and existing listing entitles you to and additional fixed period (currently 30 days) starting from the date on which the listing is refreshed and shall be counted as fresh posting.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>By posting/uploading a job posting on the website you confirm that you have obtained all licenses/permits as are necessary for recruitment and to indemnify TOSPL against all claims, damages arising out of actions/claims that may be made in relation to the same.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of the vacancy details in order to fit its database.</li>
                <li>The Subscriber/Recruiter will provide up to a maximum of 2 email id's for vacancies posted on talentplace.ai in the Classified section to receive email notifications of applications, if any. The contact information given by the subscriber for all listing should be the same and the subscriber cannot give multiple contact information/data for the purpose of listing.</li>
                <li>All information intimated by the subscriber / recruiter and displayed by Taxolawgy Online Services Pvt Ltd. on talentplace.ai becomes public knowledge and Taxolawgy Online Services Pvt Ltd. may at its sole discretion include the vacancy intimated by a subscriber for display on talentplace.ai in any other media including the print media at no extra costs to the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be held liable for usage/publicity of such information.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any at all response once the job is put on display.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data, technical or otherwise, information, particulars supplied by the subscriber, due the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber.</li>
                <li>The subscriber/Recruiter shall be deemed to give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the classified section of talentplace.ai are in existence, are genuine and that the subscriber / recruiter has the authority to advertise for such jobs.</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on the classified section of talentplace.ai for processing of applications / responses from such person.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of the classified section of Talentplace.ai at any time without assigning any reason and without giving any notice.</li>
                <li>The subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual. Usage from third party premises/networks without prior written permission of TOSPL is not permitted.</li>
                <li>The subscriber shall be assigned password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to post vacancies on the site in agreed upon section(s), but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website</li>
              </ol>
            </li>

            <li>
              Classified Subscriptions for various period
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. shall place the information relating to vacancies in the Hot Vacancies & such other Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such additional web hosting shall be without any extra cost to the subscriber / user.</li>
                <li>Each insertion so displayed in the classified section of Talentplace.ai shall be for a fixed period (currently 30 days), which period is subject to change without notice. Every instance of refreshing and existing listing entitles you to and additional fixed period (currently 30 days) starting from the date on which the listing is refreshed and shall be counted as a fresh posting.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>By posting/uploading a job posting on the website you confirm that you have obtained all licenses/permits as are necessary for recruitment and to indemnify TOSPL against all claims, damages arising out of actions/claims that may be made in relation to the same.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of the vacancy details in order to fit its database.</li>
                <li>The Subscriber/Recruiter will provide up to a maximum of 2 email id's for vacancies posted on talentplace.ai in the Classified section to receive email notifications of applications, if any. The contact information given by the subscriber for all listing should be the same and the subscriber cannot give multiple contact information/data for the purpose of listing.</li>
                <li>All information intimated by the client and displayed by Taxolawgy Online Services Pvt Ltd. on talentplace.ai becomes public knowledge and Taxolawgy Online Services Pvt Ltd. may at its sole discretion include the vacancy intimated by a client for display on talentplace.ai in any other media including the print media at no extra costs to the client and Taxolawgy Online Services Pvt Ltd. cannot be held liable for usage/publicity of such information.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee or warranties that there would be a satisfactory response or any response at all once the job is put on display.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for loss of any data whether of technical nature or otherwise or all or any , information or particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber.</li>
                <li>The subscriber/Recruiter shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the classified section of Talentplace.ai are in existence, are genuine and that the subscriber has the authority to advertise the jobs</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on the classified section of Talentplace.ai for processing of such person</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of the classified section of Talentplace.ai at any time without assigning any reason and without giving any notice</li>
                <li>The subscriber to this service shall be entitled to such number of listings during the period of subscription as may be agreed upon</li>
                <li>The subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual</li>
                <li>Only one office of one corporate entity / firm will be entitled to use this service and in case other offices of the same company/ associated companies, want to use the said service, then, they shall have to pay additional subscription charges for the service</li>
                <li>The subscriber shall be assigned password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to post vacancies on the site in agreed upon section(s), but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data or corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber</li>
                <li>Only insertions with contact information registered with Taxolawgy Online Services Pvt Ltd. will be displayed on the site</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website.</li>
                <li>All disputes arising out of the transactions between a user and Taxolawgy Online Services Pvt Ltd. will be resolved in accordance with the laws of India as applicable.</li>
              </ol>
            </li>

            <li>
              Hot Vacancies (single)
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. shall place the information relating to vacancies in the Hot Vacancies & such other Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such additional web hosting shall be without any extra cost to the subscriber / user.</li>
                <li>Each insertion so displayed in the classified and hot vacancies and section of Talentplace.ai shall be for a fixed period (currently 30 days), which period is subject to change without notice. Every instance of refreshing and existing listing entitles you to and additional fixed period (currently 30 days) starting from the date on which the listing is refreshed and shall be counted as fresh posting.</li>
                <li>The Subscriber / Recruiter can select up to a maximum of 2 email ids per job, out of unlimited email ids configured for the account, to receive email notifications of applications.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>By posting/uploading a job posting on the website you confirm that you have obtained all licenses/permits as are necessary for recruitment and to indemnify TOSPL against all claims, damages arising out of actions/claims that may be made in relation to the same.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of the vacancy details in order to fit its database.</li>
                <li>All information intimated by the subscriber and displayed by Taxolawgy Online Services Pvt Ltd. on talentplace.ai becomes public knowledge and Taxolawgy Online Services Pvt Ltd. may at its sole discretion include the vacancy intimated by a client for display on talentplace.ai in any other media including the print media at no extra costs to the client and Taxolawgy Online Services Pvt Ltd. shall not be held liable for usage/publicity of such information / data.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the job vacancy is put on display.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data whether technical or otherwise or for loss of information or particulars supplied by the subscriber due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>The subscriber/Recruiter shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the 'Hot Vacancies' and 'Classified' sections of talentplace.ai are in existence, genuine and the subscriber has the authority to advertise the said jobs vacancies.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber.</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs / vacancies advertised on the 'Hot Vacancy' and 'Classified' sections of Talentplace.ai for processing of such person.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of the `Hot Vacancies' and `Classified' sections of Talentplace.ai at any time without assigning any reason and without giving any prior notice.</li>
                <li>The subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual. Usage from third party premises/networks without prior written permission of TOSPL is not permitted.</li>
                <li>The subscriber shall be assigned password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to post vacancies on talentplace.ai site in agreed upon section(s), but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website</li>
              </ol>
            </li>

            <li>
              Hot Vacancies Subscriptions
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. shall place the information relating to vacancies in the Hot Vacancies & such other Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such additional web hosting shall be without any extra cost to the subscriber / user.</li>
                <li>Each insertion so displayed in the hot vacancies and classified vacancy section of the site talentplace.ai shall be for a fixed period (currently 30 days), which period is subject to change without prior notice.</li>
                <li>The Subscriber / Recruiter can select up to a maximum of 2 email ids per job, out of unlimited email ids configured for the account, to receive email notifications of applications.</li>
                <li>By posting/uploading a job posting on the website you confirm that you have obtained all licenses/permits as are necessary for recruitment and to indemnify TOSPL against all claims, damages arising out of actions/claims that may be made in relation to the same.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of the vacancy details in order to fit its database.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>All information intimated by the client and displayed by Taxolawgy Online Services Pvt Ltd. on talentplace.ai becomes public knowledge and Taxolawgy Online Services Pvt Ltd. may at its sole discretion include the vacancy intimated by a client for display on talentplace.ai in any other media including the print media at no extra costs to the client and Taxolawgy Online Services Pvt Ltd. cannot be held liable for usage/publicity of such information.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the job vacancy is put on display.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>The subscriber/Recruiter shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the `Hot Vacancies' and `Classified' sections of talentplace.ai are in existence, genuine and the subscriber has the authority to advertise the jobs.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing the services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber.</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on the 'Hot Vacancy' and 'Classified' sections of Talentplace.ai for processing of such person.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of the classified and/or Hot Vacancies section of Talentplace.ai at any time without assigning any reason and without giving any notice.</li>
                <li>The subscriber to this service shall be entitled to such number of listings during the period of subscription as may be agreed upon.</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual.</li>
                <li>The subscriber shall be assigned a password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to post vacancies on the site in agreed upon section(s), but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website</li>
              </ol>
            </li>

            <li>
              Job Gallery
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. shall place the information relating to vacancies in the Hot Vacancies & such other Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such additional web hosting shall be without any extra cost to the subscriber / user.</li>
                <li>Each insertion so displayed in the classified and hot vacancies section of talentplace.ai shall be for a fixed period (currently 30 days), which period is subject to change without notice.</li>
                <li>The Subscriber/Recruiter will provide up to a maximum of 2 email id's for vacancies posted on talentplace.ai either in the classified and hot vacancies section to collect response(s) if any. In the case of Hot Vacancies, these 2 email id's can be selected from out of the unlimited email id's that may be configured for the account. However in the case of a classified listing, the contact information given by the subscriber for all listing should be the same and the subscriber cannot give multiple contact information/data for the purpose of listing.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>By posting/uploading a job posting on the website you confirm that you have obtained all licenses/permits as are necessary for recruitment and to indemnify TOSPL against all claims, damages arising out of actions/claims that may be made in relation to the same.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of the vacancy details in order to fit its database</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the job vacancy is put on display.</li>
                <li>All information intimated by the client and displayed by Taxolawgy Online Services Pvt Ltd. on talentplace.ai becomes public knowledge and Taxolawgy Online Services Pvt Ltd. may at its sole discretion include the vacancy intimated by a client for display on talentplace.ai in any other media including the print media at no extra costs to the client and Taxolawgy Online Services Pvt Ltd. cannot be held liable for usage/publicity of such information.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>The subscriber/Recruiter shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the 'Job Gallery' `Hot Vacancies' and `Classified' sections of talentplace.ai are in existence, genuine and the subscriber has the authority to advertise the jobs.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing the services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber.</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on the 'Job Gallery' 'Hot Vacancy' and 'Classified' sections of Talentplace.ai for processing of such person.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of any section of Talentplace.ai at any time without assigning any reason and without giving any notice.</li>
                <li>The subscriber to this service shall be entitled to such number of listings during the period of subscription as may be agreed upon.</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual.</li>
                <li>This service entitles one company/entity alone to put up a Micro site within the domain of Talentplace.ai having a maximum size of 10 K during the validity period of subscription.</li>
                <li>The subscriber shall be assigned a password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to post vacancies on the site in agreed upon section(s), but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website</li>
              </ol>
            </li>

            <li>
              Best Places to Work
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. shall place the information relating to vacancies in the Hot Vacancies & such other Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as Taxolawgy Online Services Pvt Ltd. may deem fit and proper but such additional web hosting shall be without any extra cost to the subscriber / user.</li>
                <li>Each insertion so displayed in the classified hot vacancies and other section(s) of Talentplace.ai shall be for a fixed period (currently 30 days), which period is subject to change without notice</li>
                <li>The Subscriber/Recruiter will provide up to a maximum of 2 email id's for vacancies posted on talentplace.ai either in the classified and hot vacancies section to collect response(s) if any. In the case of Hot Vacancies, these 2 email id's can be selected from out of the unlimited email id's that may be configured for the account. However in the case of a classified listing, the contact information given by the subscriber for all listing should be the same and the subscriber cannot give multiple contact information/data for the purpose of listing.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason either before uploading or after uploading the vacancy details, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd.</li>
                <li>By posting/uploading a job posting on the website you confirm that you have obtained all licenses/permits as are necessary for recruitment and to indemnify TOSPL against all claims, damages arising out of actions/claims that may be made in relation to the same.</li>
                <li>Taxolawgy Online Services Pvt Ltd. has the right to make all such modifications/editing of the vacancy details in order to fit its database</li>
                <li> Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the job vacancy is put on display</li>
                <li>All information intimated by the client and displayed by Taxolawgy Online Services Pvt Ltd. on talentplace.ai becomes public knowledge and Taxolawgy Online Services Pvt Ltd. may at its sole discretion include the vacancy intimated by a client for display on talentplace.ai in any other media including the print media at no extra costs to the client and Taxolawgy Online Services Pvt Ltd. cannot be held liable for usage/publicity of such information</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense</li>
                <li>The subscriber may also be offered other services, including use of the e-Apps, access to Resdex (Resume Database) for the period of subscription and banners on a "run of the website" basis as agreed with Taxolawgy Online Services Pvt Ltd.</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber</li>
                <li>The subscriber/Recruiter shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the 'Best Places to Work' `Hot Vacancies' and `Classified' sections of talentplace.ai are in existence, genuine and the subscriber has the authority to advertise the jobs.</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on the 'Best Places to Work' 'Hot Vacancy' and 'Classified' sections of Talentplace.ai for processing of such person</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of any section of Talentplace.ai at any time without assigning any reason and without giving any notice</li>
                <li>The subscriber to this service shall be entitled to such number of listings during the period of subscription as may be agreed upon</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual</li>
                <li>This service entitles one company/entity alone to put up a Micro site within the domain of Talentplace.ai having a maximum size of 50 K during the validity period of subscription</li>
                <li> The subscriber shall be assigned a password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to post vacancies on the site in agreed upon section(s), but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her or on his behalf on the website</li>
              </ol>
            </li>

            <li>
              Manual Shortlisting
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. agrees to provide the service to the subscriber only for the duration and the number of vacancies contracted for, to the best of its ability and Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will make best efforts to use the parameters provided by the subscriber to short list, but takes no responsibility for the accuracy of the short listing based on the parameters for selection as specified by the subscriber</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber. The payment for service once subscribed to by the subscriber is not refundable and any amount paid shall stand appropriated.</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website</li>
                <li>It is the responsibility of Job Seekers to verify the correctness and authenticity of the claims made by recruiters. We merely act as facilitators and do not as agents for any recruiter.</li>
                <li>Payments to recruiters are not advised and shall be at your own risk.</li>
              </ol>
            </li>

            <li>
              Display of Banners
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. agrees to provide the service to the subscriber only for the duration or the number of impressions contracted for, to the best of its ability.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will display the banners on all the relevant/specified sections of the site on a rotation basis</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to reject any insertion or information/data provided by the subscriber without assigning any reason, but in such an eventuality, any amount so paid for, may be refunded to the subscriber on a pro-rata basis at the sole discretion of Taxolawgy Online Services Pvt Ltd.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the banners are put on display</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual</li>
                <li>The subscriber/Recruiter/Advertiser must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on talentplace.ai for processing of applications / responses from such person</li>
                <li>The User of these services does not claim any copyright, Trade Mark or other Intellectual Property Right over the data uploaded by him/her on the website. The Banners displayed on TalentPlace shall be prepared as per the instructions received from the users, Taxolawgy Online Services Pvt Ltd. shall not be responsible for the users misappropriation of the Trade Mark/ Copyright or any other Intellectual Property Right sought to be passed of as that of the user.</li>
              </ol>
            </li>

            <li>
              e-Apps
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. agrees to provide the service to the subscriber only for the duration contracted for to the best of its ability.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to suspend/terminate the services contracted for by the subscriber either prior to or during the contracted period without assigning any reason. In such an eventuality, any amount so paid for by the subscriber for this service, may be refunded by Taxolawgy Online Services Pvt Ltd. to the subscriber at the discretion of Taxolawgy Online Services Pvt Ltd..</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all subscriber for applications received using the e-Apps software</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber</li>
                <li>The subscriber/Recruiter shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be advertised on the talentplace.ai are in existence, genuine and the subscriber has the authority to recruit /advertise for such vacancies</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of any section of Talentplace.ai at any time without assigning any reason and without giving any notice</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who responds to jobs advertised on talentplace.ai for processing of such person</li>
                <li>Applications against jobs listed on Talentplace.ai (Hot Vacancy / Classified) Jobs will be available for a period of 90 days post the date on which an application in response to the job listing was received. Application shall be deleted post this period and Taxolawgy Online Services Pvt Ltd. shall not be liable for restoring the said data. This period may be extended in case the Subscriber opts for appropriate higher variants.</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual</li>
                <li>The subscriber shall be assigned a password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through the software, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him/her on the website</li>
              </ol>
            </li>

            <li>
              Resdex
              <ol className='privacy-list'>
                <li>Taxolawgy Online Services Pvt Ltd. agrees to provide the service to the subscriber only for the duration contracted for to the best of its ability</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to suspend/terminate the services contracted for by the subscriber either prior to or during the contracted period without assigning any reason. In such an eventuality, any amount so paid for by the subscriber for this service, may be refunded by Taxolawgy Online Services Pvt Ltd. at a prorata basis to the subscriber at its discretion. 2A. The subscriber shall be entitled to 1 user name / password to access the resdex service alone and additional user names / passwords may be provided by Taxolawgy Online Services Pvt Ltd. on such terms and conditions as may be mutually agreed upon.</li>
                <li>Taxolawgy Online Services Pvt Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all subscriber for applications received using the RESDEX software.</li>
                <li>Taxolawgy Online Services Pvt Ltd. shall in no way be held liable for any information received by the subscriber and it shall be the sole responsibility of the subscriber to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>Any actions taken by an employer/recruiter on the basis of the background check report or otherwise, is the emplyer's/recruiter's responsibility alone and Taxolawgy Online Services Pvt Ltd. will not be liable in any manner for the consequences of such action taken by the user</li>
                <li>Taxolawgy Online Services Pvt Ltd. would not be held liable for any loss of data technical or otherwise, information, particulars supplied by the customers due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Taxolawgy Online Services Pvt Ltd.'s reasonable control including but not limited to strike, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.</li>
                <li>Only the activities performed in last 365 days on a profile mapped to a Resdex Requirement will be retained. The older activities shall be automatically deleted. For the purposes of this clause, Resdex Requirements includes, but is not limited to activities including profile viewed, called, emailed, and added to folder.</li>
                <li>Taxolawgy Online Services Pvt Ltd. will commence providing services only upon receipt of amount/charges upfront either from the subscriber or from a third party on behalf of the subscriber.</li>
                <li>
                  The subscriber/Recruiter
                  <ol className='privacy-list' type='i'>
                    <li>shall give an undertaking to Taxolawgy Online Services Pvt Ltd. that the jobs sought to be filled through talentplace.ai are in existence, genuine and the subscriber has the authority to recruit /advertise for such vacancies. Also the subscriber undertakes that the database will be used to contact candidates for jobs only</li>
                    <li>shall ensure compliance with all applicable laws for the protection of the personal details of the users whose profiles are accessed by them through Talentplace.ai including but not limited to compliance the Telecom Commercial Communications Customer Preference Regulations, 2010 as also rules, regulations, guidelines, bye laws and notifications made there under, while accessing or feeding any resume/ insertion or information/data into the computers, computer systems or computer networks of Taxolawgy Online Services Pvt Ltd..</li>
                  </ol>
                </li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves its right to change the look, feel, design, prominence, depiction, classification of any section of Talentplace.ai at any time without assigning any reason and without giving any notice.</li>
                <li>The subscriber/Recruiter must give an undertaking to Taxolawgy Online Services Pvt Ltd. that there will be no fee charged from any person who is contacted through RESDEX for processing of such person.</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual concern</li>
                <li>The subscriber shall be assigned a password (s) by Taxolawgy Online Services Pvt Ltd. to enable the subscriber to access all the information received through the software, but the sole responsibility of the safe custody of the password shall be that of the subscriber and Taxolawgy Online Services Pvt Ltd. shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. Taxolawgy Online Services Pvt Ltd. undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password granted to the subscriber.</li>
                <li>The information on Taxolawgy Online Services Pvt Ltd. is for use by its subscribers alone and does not authorize the subscriber to download and use the data for commercial purposes. In case any one is found to be in violation of this then Taxolawgy Online Services Pvt Ltd. at its discretion may suspend its service/subscription and also may take such action as it may be advised</li>
                <li>The subscriber shall not use / circulate / forward a person's resume hosted on the TalentPlace Network / Resumes to his / her current employer as mentioned by the person in his / her resume</li>
                <li>The User of these services does not claim any copyright or other Intellectual Property Right over the data uploaded by him or on his behalf on the website or supplied to TOSPL.</li>
                <li>
                  Resdex Quota/CV access policy is as mentioned below:-
                  <ol className="privacy-list" type='i'>
                    <li>Single CV Access (1 CV quota) will get utilized for the following actions -</li>
                    <ol className="privacy-list">
                      <li>Viewing a CV</li>
                      <li>Clicking on "View Phone Number"</li>
                      <li>Forwarding a profile</li>
                      <li>Messaging a candidate</li>
                      <li>Exporting a CV to eApps/RMS**</li>
                    </ol>
                    <li>Double CV Access (2 CV quota) will get utilized for the following actions -</li>
                    <ol className="privacy-list" type='1'>
                      <li>Downloading a CV in Excel Format**</li>
                    </ol>
                  </ol>
                </li>

                <li>Repeated access (view/download/Click2View) of a CV, however, will not be counted again within a period of 90 days from the date of first access of a particular CV.</li>
                <li>CV Access quota is debited at account level. i.e. a CV accessed by two or more sub-users under the same account will be counted only once.</li>
                <li>This also includes different profiles under one resume, i.e. if different profiles under the same user name is accessed, it will still be counted a 1 access (for 90 days from the date of first access).</li>
                <li>Export to eApps/RMS will consume 1 CV Access Quota and profiles downloaded in excel format in Resdex or taken out from RMS in bulk will consume 2 CV Access quota. Single CV Download from CV detail page will not consume any additional download quota.**</li>
                <li>In case, 1 CV Access quota has been utilized for a CV (due to CV View / Click2View), then only 1 additional CV Access quota will be utilized if the user downloads CV within a period of 90 days from the date of first access of a particular CV.</li>
                <li>In case, 1 CV Access quota has been utilized for a CV (due to CV View / Click2View), no additional CV Quota will be utilized if the CV is exported to eApps/ RMS within a period of 90 days from the date of first access of a particular CV.</li>
                <li>Transfer of CVs from Resdex to e-Apps / RMS is supported for e-Apps Pro, RMS Consultant lite, RMS Consultant, RMS Consultant Plus, RMS Pro, RMS Pro Plus, RMS Enterprise only.</li>
                <li>Using the send email feature, a subscriber/recruiter can send a job intimation to the jobseekers by consuming email quota.</li>
              </ol>
            </li>
            <h2 className="privacy-content-title" ref={el => itemRef.current[0] = el}>ANTI SPAM POLICY</h2>
            <p className="privacy-content">
              The use and access to RESDEX database is subject to this policy. The services provided to you are aimed at providing recruitment solutions and should be restricted to contacting suitable candidates for genuine jobs in existence.
              <br /><br />
              Mailing practices such as transmitting marketing and promotional mailers/ Offensive messages/ messages with misleading subject lines in order to intentionally obfuscate the original message, are strictly prohibited.
              <br /><br />
              We reserve the right to terminate services, without prior notice, to the originator of Spam. No refund shall be admissible under such circumstances.
              <br /><br />
              Following is an illustrative (not exhaustive) list of the kinds of messages which can be classified as spam:
            </p>
            <ol className='privacy-list'>
              <li>Unsolicited Bulk Messages/Unsolicited Commercial Communications.</li>
              <li>Voice Calls/SMS to telephone numbers registered on the National Consumer Preference Register.</li>
              <li>Non Job related mails.</li>
              <li>Messages with misleading subject lines.</li>
              <li>Blank Messages.</li>
              <li>Extra ordinary High Number of mails.</li>
              <li>Mails soliciting payments.</li>
              <li>Misleading/Fraudulent mails.</li>
            </ol>
            <li>
              Insta Hire
              <ol className='privacy-list'>
                <li>SMS packs once bought will have minimum validity for a period of 3 months but cannot be refunded or exchanged for any other talentplace.ai products.</li>
                <li>SMS packs will not be clubbed with any other talentplace.ai products.</li>
                <li>Insta recruit (from resdex*) can only be used as long as recruiter has a live subscription to the resdex. Incase subscription to resdex* has expired then recruiter will not be able to send SMS until resdex is renewed (even if the recruiter has balance smses).</li>
                <li>However smses not used will remain with the recruiter and the recruiter can use the same once he renews the resdex*.</li>
                <li>In Insta recruit, recruiters can sms only those candidates on that search page that show up post conducting search.</li>
                <li>A minimum of 1000 sms need to be purchased in one go and therafter in multiples threreof.</li>
                <li>Recruiters at all times should try and ensure that smses are being sent to relevant candidates to get maximum response.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves the right to scan all content being sent out on SMS and block SMSs if necessary if content of the SMS is deemed as spam or any non-recruitment content whatsoever.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves the right to regulate number of SMSs sent out to a particular profile on a particular day (this is to safeguard consumer interests in case consumer is getting spammed by some recruiter)</li>
                <li>While Taxolawgy Online Services Pvt Ltd. will try its utmost best to try and deliver all SMS sent out, it does not take any responsibility for SMSs not delivered (which may be on account of phones being out of order, operator network problems, sims not being used anymore, etc.). It does take the responsibility of the SMSs leaving its vendor SMS gateway.</li>
                <li>Taxolawgy Online Services Pvt Ltd. reserves the right to change, withdraw, terminate the scope and scale of service at any point of time, without any reason whatsoever.</li>
                <li>SMSs being sent out after 7 in the night will cue up in the Taxolawgy Online Services Pvt Ltd. system and will be delivered to candidates after 8 in the morning (this is in keeping with telecom regulations)</li>
                <li>The service is available across all operators in India only.</li>
                <li>This subscription is neither re-saleable nor transferable by the subscriber to any other person, corporate body, firm or individual concern. Usage from third party premises/networks without prior written permission of TOSPL is not permitted.</li>
                <li>* For candidates who will reply to these smses, VAS rates as levied by their respective operator would be applicable. For further details please contact your respective mobile operator.</li>
              </ol>
            </li>

            <li>
              TalentPlace Recruiter
              <ol className='privacy-list'>
                <li>The TalentPlaceRecruiter profile may be updated/edited etc. by the user alone. The user shall not upload, post, transmit, publish, or distribute any material or information that is unlawful, or which may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libellous, vulgar, obscene, or racially, ethnically, or otherwise objectionable.</li>
                <li>Uploading of multiple profiles by the same recruiter using the same or different accounts shall entitle Taxolawgy Online Services Pvt Ltd. to remove the profiles without notice to the subscriber.</li>
                <li>TOSPL reserves its right to reject and delete any profile or information/data fed in by the user without assigning any reason.</li>
                <li>The sole responsibility of the safe custody of the log in details shall be that of the user and TOSPL shall not be responsible for data loss/theft of data/corruption of data or the wrong usage/misuse of the password and any damage or leak of information and its consequential usage by a third party. TOSPL undertakes to take all reasonable precautions at its end to ensure that there is no leakage/misuse of the password created by the user/recruiter.</li>
                <li>TOSPL shall in no way be held liable for any information received by the user and it shall be the sole responsibility of the user to check, authenticate and verify the information/response received at its own cost and expense.</li>
                <li>The user represents that he/she is not a minor and is not under any legal or other disability which limits his/her ability to comply with these Terms or to install and use the services subscribed and purchased with minimal risk of harm to you or others.</li>
                <li>All changes / modifications made by the user to the data / information shall be effected and will come into operation only after 24-48 hours of such changes / modifications being made.</li>
                <li>On registration you agree:</li>
                <ol className='privacy-list' type='a'>
                  <li>to make your profile available for display in the public domain.</li>
                  <li>and understand that when you post a job on Talentplace.ai or trigger an email to a job seeker through RESDEX, a snapshot of your public profile on TalentPlaceRecruiter may automatically get inserted into the posting/mail (existing or new job listing on Talentplace.ai).</li>
                  <li> that you have the requisite authority to upload the job listings that are posted through the profile created by you in this section of Talentplace.ai i.e. TalentPlaceRrecruiter.</li>
                  <li>and understand that TOSPL may place the information relating to vacancies posted by me through my TalentPlaceRecruiter account in the any of Classified sections on the website talentplace.ai or such other mirror or parallel site(s) or in allied publications as TOSPL may deem fit and proper.</li>
                </ol>
              </ol>
            </li>
          </ol>
          <p className="privacy-content">
            <strong>Note:</strong> The terms in this agreement may be changed by Taxolawgy Online Services Pvt Ltd. at any time. Taxolawgy Online Services Pvt Ltd. is free to offer its services to any client/prospective client without restriction.
          </p>
          
        </div>
      </div>
    </main>
  )
}
