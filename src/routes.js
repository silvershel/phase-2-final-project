import App from './App';
import ProjectPage from './components/ProjectPage';
import NewProjectForm from './components/NewProjectForm';
import About from "./components/About"
import ProjectCard from './components/ProjectCard';

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProjectPage />
      },
      {
        path: "/new-project",
        element: <NewProjectForm />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/project/:id",
        element: <ProjectCard />
      }
    ]
  }
];

export default routes;
  