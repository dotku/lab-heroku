# Lab Heroku

Heroku provides one free sandbox with [some limitation](https://devcenter.heroku.com/articles/limits).
Basically, it is pretty developer friendly web hosting support multiple
programming languages and CI process, including Node, PHP, Java and ect. There
are several similar services, eg. Metero, Firebase, Travis, and ect.

\*\* There is no free plan for Metero right now.

## Developers' Note

If you start your own project without based on the sample project, you might
face some challeges. I want to share my learning on Heroku usages.

1. Start from packages.json

    Heroku use start script to run the program, so make sure you use your server
    script on start section.

2. Change the app name

    I use `heroku create` server times, it would create several apps for your.
    For free plan, you can only create 5 apps, so please manage your app well.
    You can update your app/heroku repo by follow cli.

3. app.json vs package.json

    You can just config some setting in `package.json`, the most important the
    `engines` and `heroku-prebuild` settings.

    ```json
    {
      "scripts": {
        "build": "webpack --mode production",
      },
      "engines": {
        "node" : "10.16.0"
      },
    }
    ```

4. Deploy by push

    Use `git push heroku master` you can deploye your app with heroku report,
    which is pretty handy.

5. Don't use fixed port

    Heroku will generate the port for you by `progress.env.port`, please use it
    as primary port value and fall back to whatever you want.

    ```js
    // file: index.js
    ...
    const PORT = process.env.PORT || 5000
    ...
    ```
