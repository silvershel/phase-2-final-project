import App from './App';
import ProjectPage from './components/ProjectPage';
import NewProjectForm from './components/NewProjectForm';
import About from "./components/About"

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
    ]
  }
];

export default routes;
  