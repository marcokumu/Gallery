


# ART GALLERY APP 

This app provides a platform for art enthusiasts; a place where artists from different parts of the country get to post their art for public viewing. This site also enables artists to see their colleagues' work. The art pieces posted have a name, short description and their estimated value.

## AUTHOR

- ![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FMarkOkumu5)
- Github:  <a href="https://github.com/marcokumu">marcokumu </a>
- LinkedIn:  <a href="https://www.linkedin.com/in/markokumu/">marcokumu </a>
## ART GALLERY DELIVERABLES
This is an SPA (Single Page Application) that has been built with certain objectives in mind. Some of the objectives include:


  1.New users are able to signup to the site.

  2.Users are able to login to the site after signing up.

  3.Users can logout.

  4.The user has their own profile where they can see the pieces of art they own.

  5.The user is able to view art from different artists.

  6.The user can delete their own profile if/when they like.

  7.The user can add art pieces to the different galleries.

  8.The user can view each individual art piece.

  9.The user can edit the details of each art piece that they posted.

  10.The user can delete any art piece they posted if/when they like.

## TECHNOLOGIES USED

    1.RUBY ON RAILS

    2.REACTjs

    3.Postgresql

    4.CSS

    5.HEROKU



![Alt text](./client/public/Screenshot%20from%202022-10-14%2010-35-55.png "Title")
![Alt text](./client/public/Screenshot%20from%202022-10-14%2010-34-17.png "Title")
## LIVE LINK

Here is the project's live link: <br>
https://gallery-rails-app.herokuapp.com/




## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql


Clone the Github repository:

```console
$ git clone git@github.com:marcokumu/Gallery.git
```

When you're ready to start checking out project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)






## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][postgres downloads page] and install it. Launch the
  app and click "Initialize" to create a new server. You should now be able to
  run `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

- If your app failed to deploy at the build stage, make sure your local
  environment is set up correctly by following the steps at the beginning of
  this lesson. Check that you have the latest versions of Ruby and Bundler, and
  ensure that Postgresql was installed successfully.

- If you deployed successfully, but you ran into issues when you visited the
  site, make sure you migrated and seeded the database. Also, make sure that
  your application works locally and try to debug any issues on your local
  machine before re-deploying. You can also check the logs on the server by
  running `heroku logs`.

## CONTRIBUTING

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## LICENSE

<a href="https://choosealicense.com/licenses/mit/">[MIT]</a>

![APM](https://img.shields.io/apm/l/pack?style=for-the-badge)
