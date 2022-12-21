import React, {useState} from 'react'

interface Props {
    children: any
    max: number
}

const ReadMore:React.FC<Props> = ({ children, max }) => {
    


const [readMore, setReadMore] = useState<boolean>(false)

const toggleText = () => {
    setReadMore(!readMore);
}



  return (
    <p>
        {readMore ? children : children.substr(0, max) }
        (<button type='button' onClick={toggleText} className="readmore-btn">{ readMore ? 'Read Less' : 'Read More'}</button>)
    </p>
  )
}

export default ReadMore