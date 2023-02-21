import classes from "./InputForm.module.css";
import { useRef, useState } from "react";

const InputForm = () => {

   const optionRef = useRef();
   const nameRef = useRef();
   const commentRef = useRef();

   const [content, setContent] = useState("");



   const submitHandler = (event) => {
      event.preventDefault();

      const nameRefValue = nameRef.current.value;


      if (nameRefValue.trim().length <= 2) {
         setContent(<p className={classes.content}>Must be Greater than 2</p>)
      }
      else if (nameRefValue.trim().length >= 15) {
         setContent(<p className={classes.content}>Must be Smaller than 15</p>)
      }
      else {
         alert(`current status is: (${"author: " + nameRef.current.value} , ${"rating: " + optionRef.current.value} ,
         ${"comment:" + commentRef.current.value})`)
      }
   }

   const onClickHandler = () => {
         setContent("");   
   }





   return (<div className={classes.main}>
      <div>
         <h1>Submit Comment</h1>
      </div>
      <div className={classes.control}>
         <form onSubmit={submitHandler}>
            <label htmlFor="select">Rating</label>
            <select id="select" ref={optionRef}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
            </select>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} onClick={onClickHandler} />
            {content}
            <div className={classes.comment}>
               <label htmlFor="comment">Comment</label>
               <textarea rows="4" cols="50" type="text" id="comment" required ref={commentRef} />
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>
   </div>)
}

export default InputForm;