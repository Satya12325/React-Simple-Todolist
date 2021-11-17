import style from "./Component.module.css";
const Button = ({title,onClick}) => {
    return (
        
            <button className={style.button} onClick={onClick}>{title}</button>
        
    );
};

export default Button;
