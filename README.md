# React Resume

This project is a React-based, open-source resume template designed to be easily customizable for personal use. It uses Vite, Tailwind and GitHub Actions, and it serves as a simple portfolio website. The project includes sections for your personal information, education, work experience, skills, and additional information such as languages and certifications. The design is clean and minimal, making it easy to read and navigate. The template can be easily customized to fit your personal brand and style.

## Live Demo

A live demo of the project can be found at https://portfolio.ozxk.dev/
![portfolio](https://user-images.githubusercontent.com/47363718/214532494-9220d02b-dd39-4d27-9bbd-2c4910fd8803.png)

## Running the project locally

1. Clone the repository

```
git clone https://github.com/yourusername/react-resume.git
```

2. Install the dependencies

```
npm install
```

3. Run the project in development mode

```
npm run dev
```

The project will run on http://localhost:5173/

## Customizing the project

1. Fork the repository
2. Edit the `public/resume.json` file to include your own information and skills.
3. Customize the look and feel of the project by editing the `src/styles/tailwind.config.js` file.

- You can use different components like Radial Progress Bars, or carousel in the components folder.
- If you want to change `resume.json` file structure, you should also change the `Resume` interface in `types.d.ts` file, too. Data Context is using that interface for type checking.

## Contributing to the project

If you would like to contribute to the project, please submit a pull request and I will review it as soon as possible.

## Deploying

In the root project directory of your server:

```
npm install && npm run build
```

## CI/CD

I used Github Actions for that. If you fork it properly it will triggered after every push. Builded website will be available at the `gh-pages` branch.
Also you can set a web hook for builds.

## PDF Printing

This page is also responsive for printing. You just need to row spacing after you make changes. You can download a pdf copy of your site with that. If you put your pdf in the `public` directory. It will be downloadable via `Download Resume` button at the sidebar. You should add your pdf file name to `resume.json` file. With the `ResumeFileName` property.

## Contact

If you have any questions or would like to get in touch, please reach out to me at oguzhankandakoglu@gmail.com
