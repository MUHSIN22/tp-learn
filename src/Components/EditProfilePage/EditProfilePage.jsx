import React from 'react'
import EditSelector from '../../Util Components/EditSelector/EditSelector'
import './EditProfilePage.css'
import PersonalIcon from '../../Assets/edit icons/personal.png'
import CareerObjective from '../../Assets/edit icons/career objective.png'
import certification from '../../Assets/edit icons/certification.png'
import cognitive from '../../Assets/edit icons/cognitive.png'
import education from '../../Assets/edit icons/education.png'
import experience from '../../Assets/edit icons/experience.png'
import hobbies from '../../Assets/edit icons/hobbies.png'
import portfolio from '../../Assets/edit icons/portfolio.png'
import voluntary from '../../Assets/edit icons/voluntary.png'

let EditList = [
    {
        title: "Personal Details",
        link: "/personal-profile",
        icon: PersonalIcon
    },
    {
        title: "Career Objective",
        link: "/dashboard/edit-career-objective",
        icon: CareerObjective
    },
    {
        title: "Cognitive Skills",
        link: "/dashboard/edit-cognetive-skills",
        icon: cognitive
    },
    {
        title: "Experience",
        link: "/dashboard/experience-history",
        icon: experience
    },
    {
        title: "Education",
        link: "/education",
        icon: education
    },
    {
        title: "Portfolio",
        link: "/portfolio",
        icon: portfolio
    },
    {
        title: "Certification",
        link: "/certification",
        icon: certification
    },
    {
        title: "Voluntary Roles",
        link: "/voluntary-roles",
        icon: voluntary
    },
    {
        title: "Hobbies",
        link: "/hobbies",
        icon: hobbies
    }
]

export default function EditProfilePage() {
  return (
    <div className="edit-profile-page">
        {
            EditList.map((listItem,index) => (
                <EditSelector icon={listItem.icon} title={listItem.title} link={listItem.link} key={index}  />
            ))
        }
    </div>
  )
}
