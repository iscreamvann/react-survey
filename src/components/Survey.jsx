import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])
  function onFormSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target);
    const formEntries = [...form.entries()]
    const spendTimeList = formEntries.filter((item)=>{return item[0] === 'spend-time'}).map((item)=>{return item[1]})
    console.log([...form.entries()])
    const formData = {
      username: event.target.username.value, 
      timeSpent: spendTimeList,
      review: event.target.review.value,
      email: event.target.email.value,
      colour: event.target.color.value
    }
    console.log("username", formData, "form submitted")
    setAnswersList([formData, ...answersList])
    event.target.reset()
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
       <AnswersList answersList={answersList} ></AnswersList>
      </section>
      <section className="survey__form">
        <form class="form" onSubmit={onFormSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
  <li>
    <input id="color-one" type="radio" name="color" value="1" /><label
      for="color-one"
      >1</label >
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2" /><label
      for="color-two"
      >2</label>
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3" /><label
      for="color-three"
      >3</label>
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4" /><label
      for="color-four"
      >4</label>
  </li>
</ul>

  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label><input
        name="spend-time"
        type="checkbox"
        value="swimming"
      />Swimming</label>
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="bathing" />Bathing</label>
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
      />Chatting</label>
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="noTime" />I don't like to
      spend time with it</label>
  </li>
</ul>
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
    ></textarea></label><label>Put your name here (if you feel like it):<input
      type="text"
      name="username"
 /></label><label>Leave us your email pretty please??<input
      type="email"
      name="email"
 /></label><input class="form__submit" type="submit" value="Submit Survey!" />
</form>

        </section>
    </main>
  );
}

export default Survey;
