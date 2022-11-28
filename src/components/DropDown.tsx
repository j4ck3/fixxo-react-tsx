import React, {useState} from 'react'


interface Props {
    selected: any;
    setSelected: any;
}

const Dropdown:React.FC<Props> = ({selected, setSelected}) => {

const [isActive, setIsActive] = useState(false)
const Options = ['White', 'Red', 'Red & White'  ]
const toggleDropDown = () => {
    setIsActive(!isActive);
}
  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={toggleDropDown}>{selected}</div>
        {isActive && (
        <div className='dropdown-content'>
            {Options.map((Option) => (
                <div onClick={(e) => {
                    setSelected(Option)
                    setIsActive(false)
                }} className='dropdown-item'>
                    {Option}
                </div>
            )
            )}
        </div>
        )}
    </div>
  )
}

export default Dropdown