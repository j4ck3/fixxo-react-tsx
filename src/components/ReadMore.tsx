import React, {useState} from 'react'

interface Props {
    children: any
}

const ReadMore:React.FC<Props> = ({ children }) => {
    


const [readMore, setReadMore] = useState<boolean>(false)

const toggleText = () => {
    setReadMore(!readMore);
}



  return (
    <p>
        {readMore ? children : children.substr(0, 294) }  
        (<button onClick={toggleText} className="readmore-btn">{ readMore ? 'Read Less' : 'Read More'}</button>)
    </p>
  )
}

export default ReadMore