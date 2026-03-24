const posts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React including components, props, and state.',
    content: 'React is a JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular frontend tools. At its core, React is about building reusable components. Each component manages its own state and renders UI based on that state. Props allow you to pass data between components, making your app dynamic and interactive. Once you understand the component model, everything else in React starts to click.',
    date: 'March 10, 2025',
    category: 'React'
  },
  {
    id: 2,
    title: 'Understanding useState',
    excerpt: 'A deep dive into the useState hook and how it manages component state.',
    content: 'useState is the most fundamental React hook. It lets you add state to functional components. You call it with an initial value and it returns an array with two items — the current state and a function to update it. Every time you call the setter, React re-renders the component with the new value. One common mistake is mutating state directly instead of using the setter. Always treat state as immutable and return a new value instead of modifying the existing one.',
    date: 'March 15, 2025',
    category: 'React'
  },
  {
    id: 3,
    title: 'CSS Tips for Beginners',
    excerpt: 'Simple but powerful CSS techniques every beginner should know.',
    content: 'CSS can feel overwhelming at first but a few core concepts go a long way. Flexbox is your best friend for layouts — use it for centering, spacing, and aligning elements. Box sizing border-box makes sizing predictable. Keep your selectors simple and avoid over-nesting. Use consistent spacing values like 8, 16, 24, 32px to keep your UI feeling balanced. And always start with a reset to remove default browser styles before building your own.',
    date: 'March 18, 2025',
    category: 'CSS'
  },
  {
    id: 4,
    title: 'React Router Basics',
    excerpt: 'How to set up client side routing in your React app.',
    content: 'React Router lets you build multi-page apps without a full page reload. You wrap your app in BrowserRouter, define routes with the Routes and Route components, and use Link or NavLink for navigation. useNavigate lets you redirect programmatically. useParams lets you read dynamic segments from the URL like an id. This makes it easy to build pages like post detail views or user profiles that load different data based on what is in the URL.',
    date: 'March 20, 2025',
    category: 'React'
  },
  {
    id: 5,
    title: 'JavaScript Array Methods',
    excerpt: 'map, filter, and reduce explained with simple examples.',
    content: 'Array methods are essential for working with data in JavaScript. map transforms every item in an array and returns a new array. filter returns only the items that pass a condition. reduce accumulates all items into a single value — useful for totals and summaries. These three methods cover most data manipulation you will do in React. The key rule is that none of them mutate the original array — they always return a new one, which fits perfectly with how React expects you to handle state.',
    date: 'March 22, 2025',
    category: 'JavaScript'
  },
  {
    id: 6,
    title: 'Building Forms in React',
    excerpt: 'Controlled inputs, validation, and form submission in React.',
    content: 'Forms in React work differently than plain HTML forms. You use controlled inputs — where the input value is tied to state and every keystroke updates that state via onChange. This gives you full control over the form data at all times. For validation, check the values before submitting and store errors in a separate state object. Show error messages below each field. On successful submit, clear the form by resetting state back to empty strings. This pattern works for any form regardless of how many fields it has.',
    date: 'March 24, 2025',
    category: 'React'
  },
]

export default posts