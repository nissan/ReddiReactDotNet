# ReddiReactDotNet
A new .NET Core project primer using a React front end

## Requirements:
1. [ASP.Net Core SDK](https://www.microsoft.com/net/download/) installed
2. [Node.js](https://nodejs.org/en/) and the [Create-React-App](https://github.com/facebook/create-react-app) generator
3. A code editor. For this project I used [Visual Studio Code](https://code.visualstudio.com/) but any will do

## Getting started
Once the project is cloned, run
```
dotnet restore
```
and then
```
dotnet run
```
which should start it on `https://localhost:5001` by default
## Default ASP.Net Core Web API behavior ##
Nothing has been changed from the normal template created by `dotnet new react`
## Default React app behavior and components ##
React app contained within the `ClientApp` folder was regenerated using `create-react-app` after the original folder was deleted.
### Routing via React Router ###
All routing classes should be placed in the `routes` folder. 
There are two files available for use: 
- Normal routing is handled by `<Routes>` component in the `Routes.js` and is enabled by default and the template renders a `<Page>` visual component as a template of what a rich data page could look like.
- Secure routing using a series of customized components working with Auth0 is handled by the `SecureRoutes.js` and renders a `<SecurePage>` visual component of what a rich data page requiring authentication for access could look like.
- **Exception** For the self-contained Auth0 routing, the `routes.js` file is held in the `components\Auth0` folder for simplicity.
### Other Integrated Service functions ###
All other integrated service functions should be placed in the `services` folder. Currently these include
- Logging via `Log.js` which exposes a `log` object passed as `props` to all template React components and deriving from [`structured-log`](https://github.com/structured-log/structured-log) 

### Template React components ###
All components contained within the `components` folder
- `Error.js` is the default component for a **404 Error not found** page
- `AddressBookTable.js` renders a `<AddressBookTable>` component as a table of generated fake data from props passed to it
- `Layout` folder contains layout visual template components including
  - `Page.js` - opinionated version of what a page layout should be, containing an embedded `<Header>`, `<Navibar>`, `<Section>`, `<Article>`, `<Sidebar>` and `<Footer>` components and renders data via an `<AddressBookTable>` component
  - `Header.js` - a `<Header>` component that renders a simple HTML5 `<header>`
  - `Navibar.js` - a `<Navibar>` component that renders a sample navigation menu using HTML5 `<nav>` and Bootstrap and is used to demonstrate use of `reactstrap`, `react-icons` and `react-tooltip` modules
  - `Section.js` - a `<Section>` component that renders a simple HTML5 `<section>`
  - `Article.js` - an `<Article>` component that renders an HTML5 `<article>` and embeds the `<AddressBookTable>` component within it
  - `Sidebar.js` - a `<Sidebar>` component that renders a side menu using HTML `<ul>` styling the unordered list with CSS in `Sidebar.css`
  - `Footer.js` - a `<Footer>` component that renders a simple HTML5 `<footer>`
- Secure folder containing the custom components built to work with Auth0 secured pages including
  - `Login.js` which is a `<Login>` component bound for use with Auth0
  - `Logout.js` which is a `<Logout>` component bound for use with Auth0.
  - `Navibar.js` which is an amendment of the one found in the `Layouts` folder to include the `<Login>` or `<Logout>` component based on if the `auth` prop's `isAuthenticated()` value
  - `SecurePage.js` which is an example `<SecurePage>` component of securely returned rich data.
  
## Customisations available ##
### Customise logging ###
Editing the parameters in `services\Log.js` the logger object can modify the verbosity and sinks (channels) logs are output to. Examples of parameters can be found on the [structured-log Github page](https://github.com/structured-log/structured-log).
### Enable/Disable Auth0 Vanilla Routing ###
This is to allow authentication based on the [Auth0 example from Github](https://github.com/auth0-samples/auth0-react-samples/tree/master/01-Login)
To enable/disable:
1. Open index.js and uncomment the indicated lines for Auth0 authentication, and comment out the lines for normal routing  
2. Use the template in `components\Auth0\Auth\auth0-variables.js.example` to create your custom version of `auth0-variables.js` containing the required Auth0 parameters
### Enable/Disable Auth0 Custom Routing with Custom Visual Components ###
This is to allow authentication based on the custom components derived from the original [Auth0 example from Github](https://github.com/auth0-samples/auth0-react-samples/tree/master/01-Login)
To enable/disable:
1. Open index.js and uncomment the indicated lines for Auth0 authentication, and comment out the lines for normal routing  
2. Use the template in `services\Auth\auth0-variables.js.example` to create your custom version of `auth0-variables.js` containing the required Auth0 parameters
3. In Auth0 you must install and configure the [Auth0 Authorization Extension](https://auth0.com/docs/extensions/authorization-extension/v2) in order to leverage the Policy Authorization example used in the `SampleDataController .

## History of this project (if you care to know) ##
I created a new application at my command prompt with 
```
dotnet new react
```
but I was unhappy with the default React template as several things that I felt should have been there, were not. So I removed the ClientApp folder and regenerated a new one using
```
create-react-app clientapp
```
and since nothing broke with the `dotnet` side of things I kept going...

I made my preferred boilerplate layout in one file (`App.js`) using [HTML5 semantic tags for the various layout components](https://www.w3schools.com/html/html_layout.asp) and then split it out into various React components so that I now had a reusable, working, quick-to-deploy template for future projects. 
I left the `App.js` for future mocking up, since I can simply switch the reference from `<Routes/>` back to `<App/>` in the `index.js` file and muck around with new React components I want to test out without much risk to other components.

Along the way I tried, failed, and passed several React components I found at the curated [Awesome React Components](https://github.com/brillout/awesome-react-components) project list and by trial and error came up with this template. 
Several packages that I found quite useful for quick prototyping and templating and are in this include the following:
1. [faker](https://github.com/marak/Faker.js/) for generating Fake data very quickly to make sure the look and feel was how I wanted it.
2. [reactstrap](https://reactstrap.github.io/) for Bootstrap 4 support, as the more popular (and default one in the original) [react-boostrap](https://react-bootstrap.github.io/) doesn't yet support Bootstrap 4
3. [bootstrap](https://www.npmjs.com/package/bootstrap) itself as you need the CSS for `reactstrap` to work properly
4. [react-icons](https://gorangajic.github.io/react-icons/index.html) which gives access to all the vector icons from various popular icon projects like [Font Awesome](http://fontawesome.io), [Google Material Design](http://google.github.io/material-design-icons/
), [Typicons](http://typicons.com), [Github Octicons](https://octicons.github.com/) and [Ionicons](http://ionicons.com/) (from Ionic Framework) in one.
5. [react-tooltip](https://github.com/wwayne/react-tooltip) since in using icons for my nav menus, I still wanted users to see what they linked to, so this is a nice little way to accomplish this without having to sacrifice screen placement real estate for words.
6. [react-spinkit](http://kyleamathews.github.io/react-spinkit/) a great collection of loading indicators since I componentized with Fake data with the thought that all the data is going to come from [Fetch()](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) calls at some point to the [ASP.Net Core WebAPI project](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc?view=aspnetcore-2.1), so would have some delay and would need a loading indicator as placeholder while this was happening.
7. [react-router-dom](https://reacttraining.com/react-router/) Of course this might seem obvious, but React Router is used for routing, although it does not come with this by default when using `create-react-app`.
8. [structured-log](https://github.com/structured-log/structured-log) for universal logging. I plan to implement Serilog in the .NET Core WebAPI project so this matches up well.