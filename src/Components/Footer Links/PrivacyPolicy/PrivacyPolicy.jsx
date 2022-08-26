import React, { useRef } from 'react'
import privacyHero from '../../../Assets/privacy and terms/privacy hero.png'
import '../FooterLinks.css'

export default function PrivacyPolicy() {
    const itemRef = useRef([])
    
    const handleScroll = (index) => {
        itemRef.current[index-1].scrollIntoView({behavior: 'smooth', block: 'start'});
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
                    <h2 className="privacy-content-title" ref={el => itemRef.current[0] = el}>1. Introduction</h2>
                    <p className="privacy-content">
                        We, at Taxolawgy Online Services Pvt Ltd and our affiliated companies worldwide (hereinafter collectively referred to as "TOSPL"), are committed to respecting your online privacy and recognize the need for appropriate protection and management of any personally identifiable information you share with us. This Privacy Policy ("Policy") describes how TOSPL collects, uses, discloses and transfers personal information of users through its websites and applications, including through www.talentplace.ai, mobile applications and online services (collectively, the "Platform"). This policy applies to those who visit the Platform, or whose information TOSPL otherwise receives in connection with its services (such as contact information of individuals associated with TOSPL including partners) (hereinafter collectively referred to as "Users"). For the purposes of the Privacy Policy, "You" or "Your" shall mean the person who is accessing the Platform.
                    </p>
                    <h2 className="privacy-content-title" ref={el => itemRef.current[1] = el}>2. Types of Personal Information collected by TOSPL</h2>
                    <p className="privacy-content">
                        "Personal information" (PI) - means any information relating to an identified or identifiable natural person including common identifiers such as a name, an identification number, location data, an online identifier or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person and any other information that is so categorized by applicable laws. We collect information about you and/or your usage to provide better services and offerings. The Personal Information that we collect, and how we collect it, depends upon how you interact with us. We collect the following categories of Personal Information in the following ways:
                    </p>
                    <ul className="privacy-list">
                        <li>name, email address, password, country, city, contact number and company/organization that you are associated with, when the you sign up for alerts on the Platform;</li>
                        <li>information that one would usually include in a resume, including name, contact details including e-mail address and mobile number, photograph, video CV, work experience, educational qualifications, data relating to your current and past remuneration or salary, a copy of your resume, etc. when you register on the Platform;</li>
                        <li>information about the services that you use and how you use them, including log information and location information, when you are a user of the services through the Platform;</li>
                        <li>we may collect your Personal Information such as name, age, contact details, preferences, etc. through surveys and forms, when you choose to participate in these surveys etc.;</li>
                        <li>we may also collect information relating to your caste and information about whether you are eligible for any affirmative action programmes or policies, if you opt to provide such information;</li>
                        <li>when you communicate with TOSPL or use the Platform to communicate with other Users (such as partners), we collect information about your communication and any information you choose to provide;</li>
                        <li>when you visit the Platform, we use cookies to automatically collect, store and use technical information about your system and interaction with our Platform;</li>
                        <li>when you use a device to access the Platform, TOSPL may collect technical or other related information from the device as well as the device location;</li>
                        <li>To the extent permitted by law, TOSPL may record and monitor your communications with us to ensure compliance with our legal and regulatory obligations and our internal policies. This may include the recording of telephone or video based conversations;</li>
                        <li>If you choose to sign in with your social media account to access the Platform, or otherwise connect your social media account with the services of the Platform, you consent to our collection, storage, and use, in accordance with this Privacy Policy, of the information that you make available to us through the social media interface. Please see your social media provider's privacy policy and help centre for more information about how they share information when you choose to connect your account.</li>
                    </ul>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[2] = el}>3. How TOSPL may use your Personal Information</h2>
                    <p className="privacy-content">
                        We will only use your personal data in a fair and reasonable manner, and where we have a lawful reason to do so.
                        <br /><br />
                        Our use of your personal data depends on the purpose for which you interact with us. We may process your Personal Information for the following purposes:
                    </p>
                    <ul className="privacy-list">
                        <li>Providing our services and products to you including to send you job alerts, calendar alerts, relevant search results, recommended jobs and/or candidates (as the case maybe), and other social media communication facilities;</li>
                        <li>Protecting our Users and providing you with customer support;</li>
                        <li>We use information collected from cookies and other technologies, to improve your user experience and the overall quality of our services (for more information please refer to paragraph 4 below). When showing you tailored ads, we will not associate an identifier from cookies or similar technologies with sensitive categories, such as those based on race, religion, sexual orientation or health.</li>
                        <li>Improving the Platform and its content to provide better features and services.</li>
                        <li>Conducting market research and surveys with the aim of improving our products and services.</li>
                        <li>Sending you information about our products and services for marketing purposes and promotions;</li>
                        <li>Preventing, detecting, investigating and taking action against crimes (including but not limited to fraud and other financial crimes), any other illegal activities, suspected fraud, or violations of TOSPL’s Terms of Use in any jurisdiction</li>
                        <li>To the extent required for identity verification, government sanctions screening and due diligence checks.</li>
                        <li>Establishing, exercising or defending legal rights in connection with legal proceedings (including any prospective legal proceedings) and seeking professional or legal advice in relation to such legal proceedings.</li>
                    </ul>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[3] = el}>4. Cookies and Other Tracking Technologies</h2>
                    <p className="privacy-content">
                        Some of our web pages utilize "cookies" and other tracking technologies. A "cookie" is a small text file that may be used, for example, to collect information about web-site activity. Some cookies and other technologies may serve to recall Personal Information previously indicated by a user. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them.
                        <br /><br />
                        You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser, but please note that if you choose to erase or block your cookies, you will need to re-enter your original user ID and password to gain access to certain parts of the Platform.
                        <br /><br />
                        Tracking technologies may record information such as Internet domain and host names; Internet protocol (IP) addresses; browser software and operating system types; clickstream patterns; and dates and times that our site is accessed. Our use of cookies and other tracking technologies allows us to improve our Platform and the overall website experience. We may also analyse information that does not contain Personal Information for trends and statistics.
                        <br /><br />
                        For more information about our use of cookies please refer to our <a href="" target="_blank">Cookie Policy</a>.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[4] = el}>5. The Basis/ Grounds which we rely on for collection and processing of your Personal Information:</h2>
                    <p className="privacy-content">
                        Your Personal Information is collected and processed by TOSPL based on the following legal grounds depending upon the nature of Personal Information and the purposes for which it is processed.
                    </p>
                    <ul className="privacy-list">
                        <li>
                            <span className="privacy-list-header">Consent:</span>
                            <span>TOSPL relies on your consent in order to process your Personal Information in certain situations. If TOSPL requires your consent to collect and process certain Personal Information, as per the requirements under the applicable data protection laws, your consent is sought at the time of collection of your Personal Information and such processing will only be performed where consent is secured.</span>
                        </li>
                        <li>
                            <span className="privacy-list-header">Compliance with a legal obligation:</span>
                            <span>Your Personal Information may be processed by TOSPL, to the extent that such processing is necessary to allow TOSPL to comply with a legal obligation. An example of this would be if TOSPL is required to disclose your Personal Information to respond to a court order or if TOSPL is required to retain specific records for a fixed period to comply with requirements under any applicable law.</span>
                        </li>
                    </ul>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[5] = el}>6. Information Sharing and Disclosure</h2>
                    <p className="privacy-content">
                        We restrict access to your Personal Information to employees who we believe reasonably need to know/or that information to fulfil their jobs to provide, operate, develop, or improve our products or services.
                        <br /><br />
                        TOSPL does not disclose, transfer or share your Personal Information with others except with:
                    </p>
                    <ul className="privacy-list">
                        <li>Our affiliates and group companies to the extent required for our internal business and/or administrative purposes and/or general corporate operations and for provision of services aimed at helping you in your career enhancement;</li>
                        <li>Potential recruiters if we determine that your resume matches a particular job description/ vacancy available with such recruiters. By registering on the Platform and consenting to the terms of this Privacy Policy, you agree that TOSPL may contact you or forward your resume to potential recruiters;</li>
                        <li>Third parties including enforcement, regulatory and judicial authorities, if we determine that disclosure of your Personal Information is required to a) respond to subpoenas, court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims; or b) investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of TOSPL’s Terms of Use or as otherwise required by law;</li>
                        <li>In the event of a merger, acquisition, financing, or sale of assets or any other situation involving the transfer of some or all of TOSPL’s business assets we may disclose Personal Information to those involved in the negotiation or transfer.</li>
                        <li>Third party service providers and marketing partners that TOSPL engages to a) provide services over the Platform on TOSPL’s behalf; b) maintain the Platform and mailing lists; or c) communicate with you on TOSPL’s behalf about offers relating to its products and/or services. TOSPL will take reasonable steps to ensure that these third-party service providers are obligated to protect your Personal Information and are also subject to appropriate confidentiality / non-disclosure obligations.</li>
                        <li>hird party advertisers to display advertisements to you when you visit the Platform. The third-party advertisers include financial service providers (such as banks, insurance agents, stock brokers and mortgage lenders) and non-financial companies (such as stores, airlines, and software companies). These companies may use information about you and your visits to this Platform and other web sites to provide advertisements on this Platform.</li>
                    </ul>
                    <br />
                    <p className="privacy-content">
                        The Company does not provide any Personal Information to the advertiser when you interact with or view a targeted advertisement. However, if you interact with or view an advertisement, the advertiser may make certain assumptions and, in the process, learn certain Personal Information about you. For instance, if you view and click an advertisement that is targeted towards women in the age group 18- 24 from a specific geographic area, the advertiser may assume that you meet the relevant criteria.
                        <br /><br />
                        TOSPL does not intend to transfer Personal Information without your consent to third parties who are not bound to act on TOSPL's behalf unless such transfer is legally required.
                        <br /><br />
                        If your Personal Information is transferred outside India, we take the necessary steps to protect your Personal Information in accordance with applicable data protection laws.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[6] = el}>7. Third Party Content:</h2>
                    <p className="privacy-content">
                        Please be aware that the Platform sometimes contains links to other sites that are not governed by this Privacy Policy. Users may be directed to third-party sites for more information, such as advertisers, blogs, content sponsorships, vendor services, social networks, etc.
                        <br /><br />
                        TOSPL makes no representations or warranties regarding how your information is stored or used on third-party servers. We recommend that you review the applicable privacy statements and policies of each third-party site linked from the Platform to determine their use of your personal information.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[7] = el}>8. Children</h2>
                    <p className="privacy-content">
                        To use the Platform, you agree that you must be the minimum age (described in this paragraph below) or older.
                        <br /><br />
                        The minimum age for these purposes shall be eighteen (18), however if local laws require that you must be older for TOSPL to be able to lawfully provide the services over the Platform to you then that older age shall apply as the applicable minimum age.
                        <br /><br />
                        If you are under the age of 18 or the age of majority in your jurisdiction, you must use the Platform under the supervision of your parent, legal guardian or responsible adult.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[8] = el}>9. Retention of Personal Information</h2>
                    <p className="privacy-content">
                        Your Personal Information will not be retained by TOSPL any longer than it is necessary for the purposes for which the Personal Information is processed and/or in accordance with legal, regulatory, contractual or statutory obligations as applicable.
                        <br /><br />
                        At the expiry of such periods, your Personal Information will be deleted or archived in compliance with applicable laws
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[9] = el}>10. Controlling your personal information</h2>
                    <p className="privacy-content">
                        You have the right to invoke your rights which are available to data principals or data subjects (as per applicable laws and regulations) in relation to your Personal Information which is being processed by TOSPL.
                        <br /><br />
                        TOSPL provides you the ability to keep your Personal Information accurate and up-to-date. If at any time you would like to a) rectify, update or correct your Personal Information; b) obtain confirmation on whether or not your Personal Information is processed by it; c) access your Personal Information or exercise your right to data portability; or d) exercise your right to restrict the continuing disclosure of your Personal Information to any third party by TOSPL in certain circumstances, you are requested to contact us using the contact details mentions in paragraph 14 below. We will require you to provide a valid proof of your identity, in order to ensure that your rights are respected.
                        <br /><br />
                        For the exercise of certain rights, you may be required to approach the relevant authority / designated officer as per the provisions of the applicable data protection laws/ TOSPL may in accordance with the provisions of applicable data protection laws, charge a fee for fulfilling your request, in particular in case of excessive or manifestly unfounded request. Further you acknowledge that the above mentioned rights are not absolute and are subject to limitations as per the applicable data protection laws.
                        <br /><br />
                        At any time, if you wish to delete your account on talentplace.ai, you may do so by using the settings available in your account.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[10] = el}>10. Confidentiality and Security</h2>
                    <ul className="privacy-list">
                        <li>The security and confidentiality of your Personal Information is important to us and TOSPL has invested significant resources to protect the safekeeping and confidentiality of your personal data. When using external service providers acting as processors, we require that they adhere to the same standards as TOSPL does. Regardless of where your Personal Information is transferred or stored, we take all steps reasonably necessary to ensure that personal data is kept secure.</li>
                        <li>We seek to ensure compliance with the requirements of the Information Technology Act, 2000 and Rules made there under to ensure the protection and preservation of your privacy. We have physical, electronic, and procedural safeguards that comply with the laws prevalent in India to protect your Personal Information. By accepting the terms of this Privacy Policy, you agree that the standards and practices being implemented by us, are reasonable and sufficient for the protection of your Personal Information.</li>
                    </ul>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[11] = el}>11. Social media</h2>
                    <p className="privacy-content">
                        TOSPL operates channels, pages and accounts on some social media sites to inform, assist and engage with customers. TOSPL monitors and records comments and posts made on these channels about itself in order to improve its products and services.
                        <br /><br />
                        Please note that you must not communicate the following information to TOSPL through such social media sites:
                        <br /><br />
                        - sensitive personal data including (i) special categories of personal data meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation and (ii) other sensitive personal data such as criminal convictions and offences and national identification number ; - Excessive, inappropriate, offensive or defamatory content. TOSPL is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. TOSPL is only responsible for its own use of the Personal Information received through such sites.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[12] = el}>12. Changes to this Privacy Policy</h2>
                    <p className="privacy-content">
                        TOSPL reserves the right to update, change or modify this Privacy Policy at any time. The Privacy Policy shall come to effect from the date of publication of such update, change or modification.
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[13] = el}>13. Disclaimer</h2>
                    <p className="privacy-content">
                        TOSPL does not store any account related information or any credit / debit card details. TOSPL shall not be liable for any loss or damage sustained by Users as a result of any disclosure (inadvertent or otherwise) of any information concerning the User's account, credit cards or debit cards in the course of any online transactions or payments made for any products and/or services offered through the Platform.
                        <br /><br />
                        In case any Personal Information is shared by you with TOSPL, which is not requested by TOSPL during registration, (whether mandatorily or optionally), TOSPL will not be liable for any information security breach or disclosure in relation to such information.
                        <br /><br />
                        If you have any questions regarding this Privacy Policy or the protection of your Personal Information, please contact TOSPL’s Data Protection Officer/ Grievance Officer at the following:
                    </p>

                    <h2 className="privacy-content-title" ref={el => itemRef.current[14] = el}>14. Data Protection Officer/ Grievance Officer</h2>
                    <p className="privacy-content">
                        In case you have any complaints and/or grievances in relation to the processing of your Personal Information you can send your complaints via e-mail to our grievance officer:
                        <br /><br />
                        Grievance Officer <br />
                        Taxolawgy Online Services Pvt Ltd <br />
                        Nagpur<br />
                        Email: <a href="mailto:privacy@talentplace.ai">privacy@talentplace.ai</a>
                    </p>

                </div>
            </div>
        </main>
    )
}
