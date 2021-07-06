## Testing Dynamic Pages
#### Notes
- this app was bootstrapped by following [this tutorial](https://www.youtube.com/watch?v=RVNC61rkFxw)
- and updated to use the new gatsby route api according to [this post](https://www.gatsbyjs.com/blog/fs-route-api/)

### Basics
- We can add `/app/` router that can route to dynamic React components:
  #### **`/pages/app[...].js`**  
  ```js
    const Router = () => {
      return (
        <MyRouter>
          <RandomPerson path="/app/random-person/" />
          <RandomPerson path="/app/random-person/:results" />
        </MyRouter>
      )
    }
  ```
- This means we can combine a create-react-app style dynamic app with our Gatsby SSR content 

