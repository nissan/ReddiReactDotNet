# ReddiReactDotNet
A new .NET Core project primer using a React front end

Requirements:
1. [ASP.Net Core SDK](https://www.microsoft.com/net/download/) installed
2. [Node.js](https://nodejs.org/en/) and the [Create-React-App](https://github.com/facebook/create-react-app) generator
3. A code editor. For this project I used [Visual Studio Code](https://code.visualstudio.com/) but any will do

I created a new application at my command prompt with 
```
dotnet new react
```
then removed the ClientApp folder and regenerated a new one using
```
create-react-app clientapp
```

I then made my boilerplate layout in one file (`App.js`) using [HTML5 semantic tags for the various layout components](https://www.w3schools.com/html/html_layout.asp) and then split it out into various React components so that I now have a quick working template for future projects. I left the `App.js` for future mocking up, since I can simply switch the reference to `<Routes/>` to `<App/>` in the `index.js` and muck around without much risk to other components.

Along the way I added several packages that I found quite useful for quick prototyping and templating.
I curated through the [Awesome React Components](https://github.com/brillout/awesome-react-components) list and by trial and error came up with this template that uses the following:

1. [faker](https://github.com/marak/Faker.js/) for generating Fake data very quickly to make sure the look and feel was how I wanted it.
2. [reactstrap](https://reactstrap.github.io/) for Bootstrap 4 support, as the more popular (and default one in the original) [react-boostrap](https://react-bootstrap.github.io/) doesn't yet support Bootstrap 4
3. [bootstrap](https://www.npmjs.com/package/bootstrap) itself as you need the CSS for `reactstrap` to work properly
4. [react-icons](https://gorangajic.github.io/react-icons/index.html) which gives access to all the vector icons from various popular icon projects like [Font Awesome](http://fontawesome.io), [Google Material Design](http://google.github.io/material-design-icons/
), [Typicons](http://typicons.com), [Github Octicons](https://octicons.github.com/) and [Ionicons](http://ionicons.com/) (from Ionic Framework) in one.
5. [react-tooltip](https://github.com/wwayne/react-tooltip) since in using icons for my nav menus, I still wanted users to see what they linked to, so this is a nice little way to accomplish this without having to sacrifice screen placement real estate for words.
6. [react-spinkit](http://kyleamathews.github.io/react-spinkit/) a great collection of loading indicators since I componentized with Fake data with the thought that all the data is going to come from [Fetch()](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) calls at some point to the [ASP.Net Core WebAPI project](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc?view=aspnetcore-2.1), so would have some delay and would need a loading indicator as placeholder while this was happening.
7. [react-router-dom](https://reacttraining.com/react-router/) Of course this might seem obvious, but React Router is used for routing, although it does not come with this by default when using `create-react-app`.