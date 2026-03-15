# UMAK CCIS Week: Git & GitHub Study Jam 2026 🚀

Welcome to the Git & GitHub Study Jam activity repository! This project serves as a collaborative playground to practice your Git and GitHub skills. We'll be working together to populate this Next.js website with everyone's profile cards. Let's start committing and branching out our network!

## 🎯 The Activity 

In this activity, you will:
1. Fork this repository.
2. Create your own personal profile card from a provided template.
3. Add your card to the website.
4. Submit a Pull Request to merge your changes into the main project.

### Step-by-Step Instructions

#### 1. Fork and Clone
1. Click the **Fork** button at the top right of this repository's page on GitHub to create a copy in your own account.
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/2026-umak-git-and-github-workshop.git
   ```
3. Navigate into the project folder:
   ```bash
   cd 2026-umak-git-and-github-workshop
   ```

#### 2. Create Your Branch
Create a new branch for your work to keep things organized:
```bash
git checkout -b feature/add-your-name
```
*(Replace `your-name` with your actual name!)*

#### 3. Create Your Profile Card Component
1. Go to the `src/components/attendees/` folder.
2. You will find a file named `TemplateCard.tsx`.
3. **Make a copy** of `TemplateCard.tsx` in the same folder and rename it to your name (e.g., `JuanDelaCruz.tsx`). **Do not modify the `TemplateCard.tsx` directly!**
4. Open your new file (e.g., `JuanDelaCruz.tsx`) and update the variables inside it with your own details. Also, rename the component function inside the file to match your new filename.

#### 4. Add Yourself to the Website
1. Open the file `src/app/page.tsx` in your code editor.
2. Import your newly created component at the top of the file, alongside the other student imports:
   ```tsx
   import JuanDelaCruz from "@/components/attendees/JuanDelaCruz";
   ```
3. Find the `attendeesData` variable (around line 22). This object contains arrays for the different study groups.
4. Add your component into the array of your designated group:
   ```tsx
   "Group 1": [
     // ... other students
     <JuanDelaCruz />,
   ],
   ```

#### 5. Commit and Push Your Changes
1. Once you're happy with your changes, save your files.
2. Check your changes:
   ```bash
   git status
   ```
3. Stage the files you modified:
   ```bash
   git add src/components/attendees/JuanDelaCruz.tsx src/app/page.tsx
   ```
   *(Or just use `git add .` to stage all changes)*
4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add Juan Dela Cruz to Group 1"
   ```
5. Push your branch to your forked repository on GitHub:
   ```bash
   git push origin feature/add-your-name
   ```

#### 6. Make a Pull Request (PR)
1. Go to your forked repository on GitHub.
2. You'll see a prompt to compare and pull request your new branch. Click on **Compare & pull request**.
3. Add a brief title and description for your PR.
4. Click **Create pull request** to submit your work! 🎉

---

# Git Command Reference

A quick reference for common Git commands.

## Initial Setup

### Check your Git version
```bash
git -v
```

### Configure your Git username and email
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Initialize a new repository
```bash
git init
```

## Daily Workflow

### Check the status of your repository
```bash
git status
```

### View changes
```bash
# View all changes
git diff

# View changes in a specific file
git diff [filename]
```

### Stage changes
```bash
# Stage all changes
git add .

# Stage a specific file
git add [filename]
```

### Commit your changes
```bash
git commit -m "Your commit message"
```

## Viewing History

### View commit history
```bash
# Default log
git log

# Log with a graph
git log --graph

# Log with a graph and one-line descriptions
git log --graph --oneline
```

### Open the Git GUI
```bash
git gui
```

## Branching

### List branches
```bash
git branch
```

### Create a new branch
```bash
git branch [branch-name]
```

### Switch to a branch
```bash
git checkout [branch-name]
```

### Create and switch to a new branch
```bash
git checkout -b [branch-name]
```

### Merge branches
```bash
git merge [branch-name]
```

## Stashing Changes

### Stash your changes
```bash
git stash
```
