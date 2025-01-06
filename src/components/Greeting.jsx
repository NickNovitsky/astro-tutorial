import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomIndex = () => Math.floor(Math.random() * messages.length);

  let currentIndex = randomIndex();

  const nextGreeting = function() {
    let newIndex;
    do {
      newIndex = randomIndex();
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
    setGreeting(messages[currentIndex]);
  }  

  const [greeting, setGreeting] = useState(messages[currentIndex]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => nextGreeting()}>
        New Greeting
      </button>
    </div>
  );
}