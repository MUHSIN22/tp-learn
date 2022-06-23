import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ChevronRight } from '../../Assests/icons/chvron-right.svg';
import portfolio from '../../Assests/portfolio.png'
export default function Portfolio() {
    return (
        <div className='section_2 col-100 align-center'>
            <div className="col-90">
                <h3 className='text-left'>Portfolio </h3>
                <span className="divider"></span>
                <div className="portfolio flex-row-center">
                    <div className="col-50 g-1">
                        <div>
                            <h1>Productive Today &</h1>
                            <h1>Explore Your Hobby</h1>

                        </div>

                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.</p>
                        <Link to='portfolio-view' className='btn primary'>View Full Portfolio <ChevronRight /></Link>
                    </div>
                    <div className="col-50">
                        <img src={portfolio} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}
