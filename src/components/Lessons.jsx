import {Link, useParams} from 'react-router-dom'
import { CheckCircle,Lock} from 'phosphor-react'


export  function Lessons(props) {

const {slug} = useParams();



  return (
    <div>
    <div className=" mt-3 pt-5  text-center ">
        <div className="row">
            <div className="col-md-8 mx-auto  ">

            <div className="card mx-auto col-sm-6 " style={{width: "16rem"}}>
  <div className="card-body bg-dark ">
  <Link style={{textDecoration:"none" , color:"white", }} to={`/event/lesson/${props.slug}`} className="mx-auto "> 
          
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">  {props.description}.</p>
    </Link>
          
  </div>
  
</div>

              
           
            </div>
        
    </div>
    </div>
        


    </div>
  )
}
