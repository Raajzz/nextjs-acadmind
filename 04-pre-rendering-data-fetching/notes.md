# Problem with traditional react applications
- In react, the server only gives a blank HTML page and a div with a "root" id, it is then the browser which inserts stuff into the dom.
- This is bad because,
  1. Users might see a delay
  2. Web crawlers cannot really perform SEO
- Next.js comes to rescue with Data Fetching through its feature of blending server side and client side code.

# Page Pre-Rendering
- Next.js just completes the final page (The nodes in the dom part and the data fetching part) and sends the finished page directly with data and dom inserted nodes.
- Good for SEO.
- Also send back all necessary JS code which'll take over the pre-rendered page (Hydration).
- Pre-rendering only affects the initial 
- Two forms
  - Static Generation
    - Pages are pre-generated during deployment
  - Server-side rendering
    - Pages are created JIT when a request reaches the server

# Static Generation
- Pages are created using build time
- Cached by the server/CDN serving the app
- `getStaticProps(context){...}` is used for this, used to execute server-side code (Like, you can't use window object).
- Code inside `getStaticProps` is never given to the client, therefore it hit home close to the idea of a backend server.

- Next.js pre-renders by default if you have a static page with no dynamic content.

- The build folder (This is building and deploying the page to the server) will have different types of HTML files, one with just static content, one with static + JSON (dynamic) content (SSG) and one which should be server side rendered.

- Incremental Static Generation
  - Pre-generate page
  - Re-generate it on every request, at most X seconds
    - Server the old page if it's less than X seconds
    - Serves the new page, it'll be cached and the users will see the re-generated new page.