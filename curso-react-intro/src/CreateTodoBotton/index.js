import './CreateTodoBotton.css'

function CreateTodoBotton({setOpenModal}){
    return(
            <button className="Btn" onClick={()=>{setOpenModal(true)}}>
            
                <div className="sign">+</div>
            
                <div className="text">Create</div>
            </button>
    )
  }

  export{ CreateTodoBotton };