interface Props {
    N: String
}



const Rating: React.FC<Props> = ({N}) => {

   let RatingToNumber = Number(N)
  
    const stars = Array.from({length: RatingToNumber}, (e, id) => {
      
      return (
        <i className="stars fa-sharp fa-solid fa-star" key={id}></i>
      )
      
    })
    return (
      <>{stars}</>
    )
  }
  
  export default Rating