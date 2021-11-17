
import style from "./Component.module.css";


const TodoItem = ({id, status, title,handleToggle }) => {
   if(status === true) {
       var Style = {
           background: "green"
       }
   }
   
    return (
        <div className={style.todoss}>
        
            <span style={Style}>{`${id}-${title}- ${status}`} <button className={style.toggle} onClick={()=>handleToggle(id)} className={style.toggle}>O</button></span>
            
        </div>
    );
};

export default TodoItem