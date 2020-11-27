# Fast movies

## Notes

- The app is deployed [here](https://fast-movies.netlify.app) using Netlify.

- I used `material-ui` as a style library, as I didn't want to waste
  time recreating basic components (button, checkbox, dialog) from scratch, especially if I
  wanted to do a good job of it (especially accessibility wise).

## Now for some questions

### What work took the up majority of your time? Most difficult parts?

- figuring out where the state of the application should live
- figuring out the checkout process, should it be a pop up? a
  different page?
- Tinkering with the styling & layout of the app until it looks good

### Did you learn anything new while completing this assignment?

- Yes! how to run some code as a hook on component update after the initial
  mount (so like `componentDidUpdate`). That's by using a `ref` that's
  initially null, and then updating it after the first time the hook
  runs.

  ```js
  const App = props => {
  const didMountRef = useRef(null)
  useEffect(() => {
    if (didMountRef.current) {
      doStuff()
    } else didMountRef.current = true
  }
  }

  ```

### What did you not have time to add? How could you improve the app further with more time?

- reflect the search query in the URL, you should be able to use load
  some search results right away by landing at the right URL.

- Keep the API key as an environment variable, not in the code.

- Use a proper state management approach as the app grows. Even React
  Context would do (didn't find it justifiable in a small app)

- Make the app more delightful to use. More animations and colors
  (need a designer's help for that).

- Add Server side rendering. This is a good use case for it, as the
  content of the page is not user-dependent (the movie results are
  the same for everyone, so we can just load them on the server).

- Make the search experience smoother by running the search
  automatically on input
  change instead of when the user clicks "search". With debouncing to
  avoid making it jittery.

- Tests. Especially for the checkout functionality. I'd add some
  Cypress tests for that.
