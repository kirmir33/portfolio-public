
# Simple Portfolio

Simple Portfolio is an open-source portfolio website that showcases personal projects. The website is simple, modern, and designed with a mobile-first approach. Adding new projects is as easy as editing a JSON file.

## Features

- Mobile-first design
- Easily configurable
- Projects data stored in a JSON file
- Markdown support for project descriptions
- Modern and clean design

## Getting Started

To set up a local development environment, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/kirmir33/portfolio-public.git
```

2. Navigate to the project directory:

```bash
cd portfolio-public
```

3. Install the necessary dependencies (optional, if any):

```bash
npm install
```

4. Run the local development server (if using a package like `http-server`):

```bash
npm start
```

Now you can access the website at `http://localhost:8080` (or the appropriate port number).

## Configuration

To add or modify projects, edit the `projects.json` file in the `data` folder. Each project should have the following properties:

- `name`: Project name
- `url`: Project URL
- `shortDescription`: A short description of the project
- `longDescription`: A long description of the project (supports Markdown)

## License

This project is licensed under the [MIT License](LICENSE).
