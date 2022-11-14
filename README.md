# IOT project set to HEROKU

deploy for heroku

### 0. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands _carefully_ to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune
# Switch to the `main` branch
$ git checkout main
# Reset the local `main` branch to match the `upstream` repository's `main` branch
$ git reset --hard upstream/main
# Push changes to your forked `Random-Joke-Generator` repo
$ git push origin main
```

### 1. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Good First Issue` Issues and creating [pull requests](https://github.com/VG-1/PlaylistAdda/pulls).

### How to add your playlist to the website?

Follow this steps do add your playlist to the website:

```sh
#Step-1 Go to index.html
#Step-2 Write your playlist name in the code
#Step-3 Embed your playlist.
#Step-4 Write a sweet message.
#Step-5 You are done go aheaed and make your pull request.
```

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `main` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with the name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to another
$ git checkout branchname
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add.
```

Type in a message relevant to the code reviewer using

```sh
# This message gets associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

`Shout-out to @VG-1 for the reference`
