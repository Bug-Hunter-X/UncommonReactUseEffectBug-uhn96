```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: sets count to 10 only on initial render
    setCount(10);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}
```