import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton'
import './DesignationSummary.css'

export default function DesignationSummaryPage() {
    return (
        <div className="designation-summary-page">
            <h2 className="form-title">Designation History</h2>
            <table className="designation-summary-table" cellPadding={0} cellSpacing={0}>
                <thead>
                    <th>SI No.</th>
                    <th>Designation</th>
                    <th>Time Period</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Software Engineer</td>
                        <td>2012-2015</td>
                        <td>
                            <MdEdit className='des-summary-icons' />
                            <MdDelete className='des-summary-icons' />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Software Engineer</td>
                        <td>2012-2015</td>
                        <td>
                            <MdEdit className='des-summary-icons' />
                            <MdDelete className='des-summary-icons' />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Software Engineer</td>
                        <td>2012-2015</td>
                        <td>
                            <MdEdit className='des-summary-icons' />
                            <MdDelete className='des-summary-icons' />
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Software Engineer</td>
                        <td>2012-2015</td>
                        <td>
                            <MdEdit className='des-summary-icons' />
                            <MdDelete className='des-summary-icons' />
                        </td>
                    </tr>
                </tbody>
            </table>
            <EditFormAddButton title="Add another designation" />
        </div>
    )
}
