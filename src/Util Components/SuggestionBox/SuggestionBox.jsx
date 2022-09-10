import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import './SuggestionBox.css'
export default function SuggestionBox({ handleSelect = () => { }, suggestions = [], name_field }) {
    return (
        <div className="suggestions col-50 align-center">
            <p className='head'>Suggestions</p>
            {
                suggestions[0] ?
                    <div className="col-100">
                        {suggestions.map((s, i) => <div key={i} className="suggestion-card flex-row-start align-start g-0-5" onClick={() => handleSelect(s[name_field])}>
                            <div className="col-20">
                                <button><AddCircle /></button>
                            </div>
                            <div className="col-100">
                                <p>{s[name_field]}</p>
                            </div>
                        </div>)
                        }
                    </div>
                    :
                    <div className="col-100">
                        <p className='text-center w-100' >No Suggestions found</p>
                    </div>
            }
            

        </div>
    )
}