import React, { useRef } from 'react'
import privacyHero from '../../../Assets/privacy and terms/privacy hero.png'
import '../FooterLinks.css'

export default function PrivacyPolicy() {
    const itemRef = useRef([])

    const handleScroll = (event, index) => {
        let activeItem = document.querySelector(".privacy-btn--active")
        itemRef.current[index - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (activeItem) {
            activeItem.classList.remove('privacy-btn--active')
            event.target.classList.add('privacy-btn--active')
        }

    }
    return (
        <main className="privacy-container">
            <div className="privacy-top-image-wrapper">
                <h1 className="privacy-title">Privacy Policy</h1>
                <img src={privacyHero} alt="" className="privacy-top-image" />
            </div>
            <div className="privacy-main-wrapper">
                <div className="privacy-btns-wrapper">
                    <button className="privacy-btn privacy-btn--active" onClick={(event) => handleScroll(event, 1)}>1. Introduction</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 2)}>2. Types of Personal</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 3)}>3. How TOSPL</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 4)}>4. Cookies and Other</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 5)}>5. The Basis/ Grounds</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 6)}>6. Information Sharing</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 7)}>7. Third Party Content:</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 8)}>8. Children</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 9)}>9. Retention of Personal</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 10)}>10. Controlling your</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 11)}>10. Confidentiality and Security</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 12)}>11. Social media</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 13)}>12. Changes to this</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 14)}>13. Disclaimer</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 15)}>14. Data Protection Officer</button>
                    <button className="privacy-btn" onClick={(event) => handleScroll(event, 15)}>15. Cookies Policy</button>
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


                    <h1 className="privacy-main-title" style={{ textAlign: 'center' }}>Cookie Policy</h1>
                    <h2 className="privacy-content-title" ref={el => itemRef.current[15] = el}>Introduction</h2>
                    <p className="privacy-content">
                        This Cookie Policy ("Policy") explains that we believe in being open and clear about how we use your information. In the spirit of transparency, this Policy provides detailed information about how and when we use cookies on our Websites. This cookie policy applies to any Talentplace.ai product or service that links to this policy or incorporates it by reference.
                    </p>

                    <h2 className="privacy-content-title" >a. Does Talentplace.ai uses cookies?</h2>
                    <p className="privacy-content">
                        Talentplace.ai uses cookies, tags and other technologies when you use any of the Talentplace.ai websites, mobile sites or mobile apps (collectively "the services"). Cookies are used to ensure everyone has their best possible experience. Cookies also help us keep your account safe. By continuing to visit or use our services, you are agreeing to the use of cookies and similar technologies for the purposes we describe in this policy. If you prefer not to receive cookies or web beacons, then you should stop using our site, or consult your browsing and third party cookie settings as described below.
                    </p>

                    <h2 className="privacy-content-title" >b. What is a cookie?</h2>
                    <p className="privacy-content">
                        Cookies are small pieces of text stored by a website you visit in your browser and subsequently sent by your web browser in every request to the website. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you. Essentially, cookies are a user’s identification card for the Talentplace.ai servers. Cookies allow Talentplace.ai to serve you better and more efficiently, and to personalize your experience on our site. Web beacons, tags and scripts may be used in the Websites or in emails to help us to deliver cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. We may analyse or perform analysis based on the use of these technologies and generate reports on an individual and aggregated basis.
                        <br /><br />
                        Cookies can be "persistent" or "session" cookies. A persistent cookie helps us recognize you as an existing user, so it’s easier to return to Talentplace.ai or interact with our services without signing in again. After you sign in, a persistent cookie stays in your browser and will be read by Talentplace.ai when you return to one of our sites or a partner site that uses our services. Session cookies only last for as long as the session (usually the current visit to a website or a browser session).
                    </p>

                    <h2 className="privacy-content-title" >c. What are cookies used for?</h2>
                    <p className="privacy-content">
                        When you visit our Websites, we may place a number of cookies in your browser. These are known as First Party Cookies and are required to enable to hold session information as you navigate from page to page within the website. For example, we use cookies on our Websites to understand visitor and user preferences, improve their experience, and track and analyse usage, navigational and other statistical information. Additionally, cookies allow us to bring you advertising both on and off the Talentplace.ai site, and bring customized features to you. You can control the use of cookies at the individual browser level. If you elect not to activate the cookie or to later disable cookies, you may still visit our Websites, but your ability to use some features or areas of the Websites may be limited. We may use any of the following categories of cookies on the Websites as detailed below. Each cookie falls within one of the four following categories:
                    </p>
                    <table className="privacy-table" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Essential Cookies</td>
                                <td>Essential cookies (First Party Cookies) are sometimes called "strictly necessary" as without them we cannot provide many services that you need on the Website. For example, essential cookies help remember your preferences as you move around the Website. Essential cookies also keep you logged in into a website. Without them the login functionality would not work.</td>
                            </tr>
                            <tr>
                                <td>Analytics Cookies</td>
                                <td>These cookies track information about visits to the Talentplace.ai and partner (recruiter websites) websites so that we can make improvements and report our performance. For example: analyse visitor and user behaviour so as to provide more relevant content or suggest certain activities. They collect information about how visitors use the Websites, which site the user came from, the number of each user’s visits and how long a user stays on the Websites. We might also use analytics cookies to test new ads, pages, or features to see how users react to them.</td>
                            </tr>
                            <tr>
                                <td>Functionality or Preference Cookies</td>
                                <td>During your visit to the Websites, cookies are used to remember information you have entered or choices you make (such as your username, language or your region) on the Websites. They also store your preferences when personalizing the Websites to optimize your use of Talentplace.ai. These preferences are remembered, through the use of the persistent cookies, and the next time you visit the Websites you will not have to set them again.</td>
                            </tr>
                            <tr>
                                <td>Targeting or Advertising Cookies</td>
                                <td>These Cookies are placed by third party advertising platforms or networks or Talentplace.ai in order to, deliver ads and track ad performance, enable advertising networks to deliver ads that may be relevant to you based upon your activities (this is sometimes called "behavioural" "tracking" or "targeted" advertising) on the Websites. They may subsequently use information about your visit to target you with advertising that you may be interested in, on Talentplace.ai websites or other websites. For example, these cookies remember which browsers have visited the websites.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="privacy-content-title" >d. When does Talentplace.ai place cookies?</h2>
                    <p className="privacy-content">
                        We use cookies on our websites, mobile sites and mobile applications. Any browser visiting these sites will receive cookies from us which helps us identify you more quickly when you return. Cookies help us to determine which pages or information you find most useful or interesting on our own websites.
                        <br /><br />
                        Talentplace.ai may also have some cookies for its own analytics i.e. analytics not part of Google Analytics. Such cookies help generate statistics and reports about visitors and their activities on the website or app.
                    </p>

                    <h2 className="privacy-content-title" >e. How cookies are used for online analytics purposes?</h2>
                    <p className="privacy-content">
                        We may use web analytics services on Talentplace.ai, such as those of Google Analytics. These services help us analyse how users use the services, including by noting the third-party website from which you arrive. The information collected by the technology will be disclosed to or collected directly by such service providers, who use the information to evaluate your use of the services. We also use Google Analytics for certain purposes related to online marketing, as described in the following sections.
                    </p>

                    <h2 className="privacy-content-title" >f. How are cookies used for advertising purposes?</h2>
                    <p className="privacy-content">
                        Cookies and other ad technology such as beacons, pixels, and tags help us serve relevant ads to you more effectively. They also help us provide aggregated auditing, research, and reporting for advertisers, understand and improve our service, and know when content has been shown to you. We work with website analytics and advertising partners, including Google Display Network, Facebook, etc. to deliver Talentplace.ai advertisements on third party publisher websites - these partners may set cookies on your computer's web browser. These cookies allow our partners to recognize your computer so that the ad server can show you Talentplace.ai advertisements elsewhere on the Internet, and so that our analytics software can measure your engagement and interactions while using Talentplace.ai services. In this way, ad servers may compile anonymous, de-identified information about where you, or others who are using your computer, saw our advertisements, whether or not you interacted with our advertisements, and actions performed on subsequent visits to Talentplace.ai websites and applications. This information allows an ad network to deliver targeted advertisements that they believe will be of most interest to you, and it allows Talentplace.ai to optimize the performance of our advertising campaigns and the usability of our website. In other words, we use analytics data in concert with data about our online ads that have been shown using the Google Display Network, Facebook for Advertisers, or other online advertising networks. By doing so, we can understand how anonymous users interacted with our website after seeing our ads.
                    </p>

                    <h2 className="privacy-content-title" >g. What third-party cookies does Talentplace.ai use?</h2>
                    <p className="privacy-content">
                        Please note that the third parties (advertising networks and providers of external services like web traffic analysis services) may also use cookies on our Services. Cookies on our sites. Also, note that the names of cookies, pixels and other technologies may change over time.
                        <br /><br />
                        We use trusted partners to help us service advertising, who may place cookies on your device. We also pull through content from social networks into our own pages, such as embedded Facebook feeds. The social networks, such as Facebook, Google, etc. may themselves also put cookies on your machine. If a user logs into Facebook, Twitter or Google+ via our website, they will leave a cookie on the users' computer. This is the same process as if the user logs into these social networks directly.
                        <br /><br />
                        We also use Google Analytics on our Services to help us analyse how our Services are used. Google Analytics uses performance cookies to track customer’s interactions. For example, by using cookies, Google can tell us which pages our users view, which are most popular, what time of day our websites are visited, whether visitors have been to our websites before, what website referred the visitor to our websites, and other similar information. All of this information is anonymized.
                        <br /><br />
                        We suggest that you should check the respective privacy policies for these external services to help you understand what data these organisations hold about you and how they process it.
                        <br /><br />
                        Facebook: <a href="https://www.facebook.com/policy.php" target="_blank">https://www.facebook.com/policy.php</a>
                        <br /><br />
                        AdSense: <a href="https://policies.google.com/technologies/ads" target="_blank">https://policies.google.com/technologies/ads</a>
                        <br /><br />
                        Google Analytics: <a href="https://www.google.com/analytics/learn/privacy.html" target="_blank">https://www.google.com/analytics/learn/privacy.html</a>
                        <br /><br />
                        Google Tag Manager:<a href="https://www.google.com/analytics/tag-manager/faq/" target="_blank">https://www.google.com/analytics/tag-manager/faq/</a>
                        <br /><br />
                        Google+: <a href="https://www.google.com/policies/privacy/" target="_blank">https://www.google.com/policies/privacy/</a>
                        <br /><br />
                        Twitter:  <a href="https://twitter.com/en/privacy" target="_blank">https://twitter.com/en/privacy</a>
                        <br /><br />
                        Google Double click: <a href="https://support.google.com/dfp_premium/answer/2839090?hl=en" target="_blank">https://support.google.com/dfp_premium/answer/2839090?hl=en</a>
                    </p>

                    <h2 className="privacy-content-title" >h. What are Web Beacons?</h2>
                    <p className="privacy-content">
                        Talentplace.ai occasionally advertises on third party websites. As part of our effort to track the success of our advertising campaigns, we may at times use a visitor identification technology such as "web beacons," or "action tags," which count visitors who have come to our site after being exposed to a Talentplace.ai banner ad on a third party site. Our partners may also use web beacons to collect data in the aggregate as provided by your browser while you are on our site or another site where Talentplace.ai is third party.
                        <br /><br />
                        By navigating on our site, you agree that we can place cookie and web beacons on your computer or device. If you prefer not to receive web beacons, then you should stop using our site, or consult your browsing settings.
                    </p>

                    <h2 className="privacy-content-title" >i. How to control cookies?</h2>
                    <p className="privacy-content">
                        Most browsers allow you to control cookies through their settings preferences. However, if you choose to turn off these cookies, you will still see advertising on the internet but it may not be tailored to your interests. It does not mean that you won't be served any advertisements whilst you are online. Whilst we have mentioned most of the third parties involved in using targeting or advertising cookies in the preceding section , the list is not exhaustive and is subject to change. Therefore, even if you choose to turn off all the third-party cookies listed in section , you may still receive some tailored advertisements and recommendations.
                        <br /><br />
                        There are a number of ways you can manage what cookies are set on your devices. Essential cookies, however, cannot be disabled. If you do not allow certain cookies to be installed, the website may not be accessible to you and/or the performance, features, or services of the website may be compromised.
                        <br /><br />
                        You can also manage this type of cookie in the privacy settings on the web browser you are using. Please note that if you use your browser settings to block all cookies you may not be able to access parts of our or others' websites. Please see below for more information.
                        <br /><br />
                        <b>Changing your Cookie Settings</b>: The browser settings for changing your cookies settings are usually found in the 'options' or 'preferences' menu of your internet browser. In order to understand these settings, the following links may be helpful. Otherwise you should use the 'Help' option in your internet browser for more details.
                    </p>

                    <ul className="privacy-list">
                        <li>
                            <a href="" target="_blank">Cookie settings in Internet Explorer</a>
                        </li>
                        <li>
                            <a href="" target="_blank">Cookie settings in Firefox</a>
                        </li>
                        <li>
                            <a href="" target="_blank">Cookie settings in Chrome</a>
                        </li>
                        <li>
                            <a href="" target="_blank">Cookie settings in Safari</a>
                        </li>
                    </ul>
                    <p className="privacy-content">
                        <b>More information:</b> To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href=" www.allaboutcookies.org" target="_blank"> www.allaboutcookies.org</a> . You can learn more about opting out of receiving interest-based ads from other companies at optout.aboutads.info and <a href="www.networkadvertising.org/choices" target="_blank">www.networkadvertising.org/choices</a>. In addition, certain third party advertising networks, like Facebook (pixels) and Google, permit users to opt out of or customize preferences associated with your internet browsing. To learn more about this feature from Google, click here. For further information about the Facebook Pixel, click here.
                    </p>

                </div>
            </div>
        </main>
    )
}
