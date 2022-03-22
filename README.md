# Complaints System 311

## Description

Non-emergency issues reporting system allowing City residents to submit complaints about potholes, broken sidewalks and issues of this nature handled by public agencies in NYC.

## Built With

- [React.js](https://reactjs.org) 
- [Ruby on Rails](https://rubyonrails.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git your-project-name
$ cd your-project-name
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc — since you're importing an existing repository, creating any of those files
on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli


Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

## Gemfile
Enable CORS (Cross Origin Resource Sharing) from the Gemfile (located in the root of the project directory). 

## Create Database Migration Tables
Via the rails g resource command, create a ```User```, ```Category```, and ```Complaint``` tables with the following attributes: 
```console
$ rails g resource User username email --no-test-framework 
```

```console
$ rails g resource Category category --no-test-framework 
```

```console
$ rails g resource Complaint description date_observed:date address user:belongs_to --no-test-framework 
```

## Associations
Establish associations:

A ```User``` has many ```Complaints``` and ```Categories```.

```Complaints``` belongs to ```User```.

## Routes
Set up routes with endpoints to forward frontend requests to the appropriate controller actions.

## Actions
Set up controller actions with CRUD to obtain the requested data from the models ```(category, complaint, user, etc.)```


## Validations 
Set up validation macros to ensure only valid data is saved into the database:

```User:``` validate username, email, and password.

```Category:``` validate category.

```Complaint:``` validate title, desc, and date_onbserved.

## Authentication and Authorization
Set up authentication to verify user credentials.

Set up authorization to give users access to specific pages within the application.  

## Test for Functionality 
Run the server with ```rails``` and open [Postman](https://www.postman.com/product/workspaces/) to test the API functionality.

## FrontEnd
Create React application with frontend components, CRUD, and implement React router.



