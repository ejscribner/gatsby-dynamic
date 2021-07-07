## Testing Dynamic Pages
#### Notes
- this app was bootstrapped by following [this tutorial](https://www.youtube.com/watch?v=RVNC61rkFxw)
- and updated to use the new gatsby route api according to [this post](https://www.gatsbyjs.com/blog/fs-route-api/)
- more info can be found in [these docs](https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#handling-client-only-routes-with-gatsby)

### Basics
- We can add `/app/` router that can route to dynamic React components:
  #### **`/src/pages/app/[...].js`**  
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
- This allows for fetching of data from external API services, as shown in this app w/ the random person API

### Further Information on Data Storage
- Gatsby offers a variety of plugins that can connect to data sources (MongoDB being one of them)
- These plugins enable graphQL querying of various data sources
  - More info on how MongoDB connection works can be found [here](https://developer.mongodb.com/how-to/gatsby-modern-blog/#connecting-mongodb-and-gatsbyjs)
- We could probably build a Couchbase plugin for Gatsby fairly easily, to enable this same functionality for Couchbase

### Hydration and Hybrid Apps
- Hydration in gatsby allows for a hybrid approach between Client Side Rendering and Server Side Rendering
- The SSR app loads in and then hands off control to the browser, which picks up where the server left off in the `/public` folder
- It can then render the site in browser just like any other react app  
- The following links detail hydration further:
  - https://www.gatsbyjs.com/docs/glossary/hydration/
  - https://www.gatsbyjs.com/docs/conceptual/react-hydration/
  
