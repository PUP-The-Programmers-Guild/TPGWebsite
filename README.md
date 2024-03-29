# Front End Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Technologies](#🔧technologies) • [Getting Started](#🚀getting-started) • [Contributing](#🤝contributing) • [File Component Structure](#📁file-component-structure) • [Learn More](#📖learn-more) • <!-- [Deploy on Vercel](#deploy-on-vercel) -->

## 🔧 Technologies

![Next.js](https://img.shields.io/badge/-Next.js-555555?style=for-the-badge&logo=Next.js)&nbsp;
![React](https://img.shields.io/badge/-React-555555?style=for-the-badge&logo=react)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-555555?style=for-the-badge&logo=TailwindCSS)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-555555?style=for-the-badge&logo=typescript)&nbsp;
![Radix Ui](https://img.shields.io/badge/-RadixUI-555555?style=for-the-badge&logo=radixui)&nbsp;

## 🚀 Getting Started

1. Create a New folder where you can store the project file to be referred as the **Project Folder**

2. Open command prompt, change current directory to as the **Project Folder**

```bash
cd <PATH TO PROJECT FOLDER>
```

3. Clone the Project, add `.` on the end to extract files to current directory.

```bash
git clone https://github.com/PUP-The-Programmers-Guild/TPGWebsite.git .
```

4. Switch to Frontend team's working branch, `dev`

```bash
git checkout dev
```

5. Run `npm install` to install project dependencies

```bash
npm install
```

6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## 🤝 Contributing

### Project Setup:

1. Make a new folder your PC
2. Open that new folder directory in VS Code
3. Open Terminal in VS Code, input

```git
git init
git remote add origin git@github.com:PUP-The-Programmers-Guild/TPGWebsite.git
git checkout -b dev
git pull origin dev
```

<hr/>

### Contribution Guide:

1. Check if you are on latest of dev branch

```git
git pull origin dev
```

2. Switch to the `dev` via

```git
git checkout dev
```

3. Create a new branch based on latest dev

```git
git checkout -b <new-branch-name>
```

**Note:**

I. `<new-branch-name>` format is `[dev-name]-[branch-type]-[task-desc]`.  
II. `[dev-name]` refers to your nickname.
III. `[branch-type]` refers to the nature of your task. Which can be `feat`, `fix` `refactor`

- `feat` - a new feature
- `fix` - a bug fix
- `refactor` - a code change that neither fixes a bug nor adds a feature

IV. `[task-desc]` should be 2-3 words, connected by dash / `-` , describing your task. Example would be: `latest-news-section`

4. Make sure to know what branch you are currently working on by entering:

```git
git branch
```

5. You may start working now on your local copy by adding/editing/removing files.
6. After all changes, to save them to the Github repo, follow:

```git
git add -A
git commit -m "{Describe your proposed changes}"
git push origin <current-branch-name>
```

7. Open a new Pull Request in the [PUP-The-Programmers-Guild/TPGWebsite (github.com)](https://github.com/PUP-The-Programmers-Guild/TPGWebsite) repository under the **Pull Request** tab.
8. Make sure that the Pull Request flow is as follows: `base: dev` <- `compare:yourname-branchtype-taskdesc`.
9. Write a description about the Pull Request. **@See**: [Pull Request Format Guide](#pull-request-description-format)
10. **Notify the team about your new Pull Request via the Messenger Group Chat.** Individual Changes from different branches will be then merged into dev via Pull Request.

<hr/>

### Pull Request Description Format:

```
Changes Includes:
- Add: (What are the files added in the project + reason)
- Modify: (What are the files modified in the projected + reason)
- Remove: (What are the files deleted + reason)

Packages Installed:
[Name of library/package] - [Description why it is added]

Questions/Issues:
- Free Format & Any Order

Tasks to do (Incase that it is stil WIP upon PR):
- Free Format & Any Order
```

### Examples:

- [added the accordion reusable component by Lemon1903 · Pull Request #25 · PUP-The-Programmers-Guild/TPGWebsite (github.com)](https://github.com/PUP-The-Programmers-Guild/TPGWebsite/pull/25)
- [created latest events section by Lemon1903 · Pull Request #26 · PUP-The-Programmers-Guild/TPGWebsite (github.com)](https://github.com/PUP-The-Programmers-Guild/TPGWebsite/pull/26)

<hr>

## ⚛️ UI Components

During development, make sure to read about **Radix UI** (**@See:** [Learn More](##📖learn-more)) and use available components from the library. This is to ensure consistency and accessibility of components throughout all parts within the project.

## 📁 File Component Structure

```
TPGWebsite
└── frontend/
    ├── public/
    │   ├── fonts/
    │   └── news
    └── src/
        ├── components/
        │   ├── Devskolar
        │   ├── Home/ (Homepage route)
        │   │   ├── Hero (Hero Section)
        │   │   └── News/ (News Section)
        │   │       └── Slide (Slide component under News Section)
        │   ├── NavBar
        │   └── base
        ├── lib
        ├── mock
        ├── pages/
        │   ├── api
        │   └── news/
        │       ├── accomplishments
        │       └── events
        └── styles
```

**For context:** `src` folder should contain all of the relevant react project files. Under this folder we have `pages` and `components`.

`src/pages` serves as the routing path for the website (Concept: File-based routing in NextJS). Each file will serve as the layout for a specific page.

For example: `src/pages/index.tsx` refers to the `localhost:3000/` page.

`src/components` serves as the folder to organize all UI elements used in each page. For clarity, All child folders of `src/components` should be corresponding to page routes in `src/pages` (Referred to as **page component folder**).

- Except for `index.tsx`, which is referred as `Home` for its _page component folder_

Each child folder should contain folders corresponding to each section available within the page (Referred to as **section component folder**). Within this folder should contain all relevant files used for this section such as components/utils/hooks/context files in the form of `.ts` or `.tsx`

For example: `src/components/Home` is representing `index.tsx` as a _page component folder_, under `src/components/Home` are the page sections `Hero` and `News`. These two folders should contain all of the atomic UI components (buttons, accordions, etc.) used within that specific section as it is a _section component folder_.

## 📖Learn More

To learn more about the technologies used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - introduction to Next.js and its features.
- [Learn Next.js](https://youtu.be/NgayZAuTgwM?si=ncsmhx8goeIVn4Gu) - learn Next.js in 30 minutes.
- [React Documentation](https://react.dev/) - introduction to React and its features.
- [Learn React](https://www.youtube.com/watch?v=Rh3tobg7hEo) - learn React in 40 minutes.
- [Tailwind CSS Documentation](https://v2.tailwindcss.com/docs) - introduction to Tailwind CSS and its features.
- [Learn Tailwind CSS](https://www.youtube.com/watch?v=tS7upsfuxmo) - learn Tailwind CSS in 3 hours.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - introduction to TypeScript and its features.
- [Learn TypeScript](https://youtu.be/d56mG7DezGs?si=H6Ujk2qAM2jwknf0) - learn TypeScript in 1 hour.
- [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/overview/introduction) - introduction to Radix UI and its features.
- [Learn Radix UI](https://www.youtube.com/watch?v=qSUxpqIfBPQ) - learn Radix UI component with Next JS and Tailwind CSS in 24 minutes.

Feel free to contact the TPG Website - Frontend Team community chat for any questions/clarifications/suggestions.

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
