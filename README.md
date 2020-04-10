# pull up a chajr, get to work 🪑

chajr (pronounced chair) is a simple bash script for getting **C**ss, **H**tml, **A**nd **J**avascript **R**eady. Stop worrying about creating directories, start building.

---

## What chajr does 🛠

When unmodified by options, chajr creates a directory in the working directory using the name passed into it as an argument. Inside this directory, it creates 3 directories - `css` containing an empty `main.css` file, `js` containing a `main.js` file with some basic boilerplate, and an empty `images` directory.  An `index.html` file with some basic HTML 5 boilerplate and links to `css/main.css` and `js/main.js` is also created, along with a `[README.md](http://readme.md)` file.

    You, in your terminal:
    
    chajr MyFancyNewProject
    
    This script:
    
    📂<-- Current Working Directory
     \
      📁MyFancyNewProject (NEW!)
        \
        |
        |---📄index.html (NEW!) 
        |     (Includes HTML boilerplate and links to main.css and main.js)
        |
        |---📄README.md (NEW!)
        |     (Includes the name of your project as a header and the 
        |      current date as a h4 subhead.)
        |
        |---📁css (NEW!)
        |    \
        |     📄main.css (NEW!)(Empty)
        |
        |---📁js (NEW!)
        |    \
        |     📄main.js (NEW!)
        |       (Includes a light touch of js boilerplate)
        |
        |---📁images (NEW!)

### chajr now supports Node/Express/MongoDB app creation! [Learn more here.](https://github.com/DavidStinson/chajr/wiki/Node-Express-MongoDB)!

---

## Installing 📲

Easy installation of chajr relies on [Homebrew.](https://brew.sh/) Once Homebrew is installed, 2 commands will install chajr.

1. In the terminal, run the below command:

        brew tap davidstinson/chajr

2. In the terminal, run the below command:

        brew install chajr

3. Wow, you're done!

While Homebrew installation is highly recommended, [manual installation is possible](https://github.com/DavidStinson/chajr/wiki/Advanced-Installation).

---

## Running 🏃‍♀️🏃‍♂️

To run chajr, use the below command in the terminal

    chajr DirectoryName

***The directory name you give to chajr should never contain any spaces.*** Once installed, running chajr is this simple!

---

## chajr Options 🎨

chajr can automate more than just directory creation. Want to set up a local git repository in the new directory you're making then push it to a remote repository all in the same command? chajr can do that. Want to open your new directory in VS Code immediately after you have created your new files? chajr can do that too. It can even do both of those things at once!

### Example:

    chajr -er https://github.com/user/MyFancyNewProject.git MyFancyNewProject

This command makes the `MyFancyNewProject` directory with all the standard chajr files inside of it, creates and commits to a local repository, then pushes to the remote repository `https://github.com/user/MyFancyNewProject.git`. After completing that, it opens the `MyFancyNewProject` directory in VS Code. 

Like many bash programs, multiple options can be combined after a single dash when they don't require arguments separating them (so they appear as one string of characters like `-er`). They can also be split, like this example where each option has a `-` before it:

    chajr -e -l MyFancyNewProject

### For a full list of options, visit the [documentation page](https://github.com/DavidStinson/chajr/wiki/Documentation), or run just run the `chajr -h` command in your terminal.

---

## chajr Templates 📃

chajr builds your new project files from plain text template files that you can customize to make chajr work better for your needs. In a typical homebrew installation, these template files are located in the `/usr/local/etc/chajr/` directory if they are not in that location, check out the [troubleshooting page](https://github.com/DavidStinson/chajr/wiki/Troubleshooting). These files aren't modified during updates, so any changes you make to them are preserved and usable in all future versions. Learn more about the templates [here](https://github.com/DavidStinson/chajr/wiki/File-Templates-and-Configuration).

---

## Updating 🎁

Updates may be released periodically for chajr. To retrieve these updates, run the below commands in the terminal.

    brew update

    ==> Updated formulae
    davidstinson/chajr/chajr

If the above is among the output, there is an update available for chajr. You can install it using this command:

    brew upgrade chajr
    # Alternatively, to install all new updates to homebrew and formulas in one step 
    # run this command:
    brew update && brew upgrade

---

## Credits 🙌

- Thanks to Ryan Chadwick for his [Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/), without which this script would be broken and bad. You can get started creating Bash scripts with the help his tutorial!
- chajr -n would not have been possible to build without the foundation provided by [Express Generator](https://github.com/expressjs/generator). While chajr is hyper-focused on enhancing Node/Express/MongoDB workflows, Express Generator is an excellent substitution for many other projects, be sure to check it out.

---

## Stuff to add or change 🚀

- Add an unobtrusive way for the user to choose an editor other than VS Code. Not sure how to accomplish this without adding a bunch of options or getting in the users' way. Unfortunately, this is probably best accomplished on the script level for now, even if the changes don't persist across updates.
- If the user doesn't provide a remote repository when using the -r option, weird things start to happen. Temporarily solved this issue, but the solution cannot scale. Need to investigate other options.
- Add an -i option to add repository level .gitignore from a template.
- README.md receives the project name and date from the chajr script, which may be undesirable behavior in certain circumstances, and currently requires modifying the script to change. Need to investigate other options (perhaps an option that would silence this behavior?)
- Add Heroku support.