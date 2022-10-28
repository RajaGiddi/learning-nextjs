import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    //Change this to a MongoDB link
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

  }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input type='email' id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="email">Your Response</label>
          <textarea id="feedback" rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;