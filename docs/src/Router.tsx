import DynamicDocsDocument from '@components/Docs/DynamicDocsDocument';
import DefaultLayout from '@layouts/DefaultLayout';
import DocsLayout from '@layouts/DocsLayout';
import { AboutPage } from '@pages/AboutPage';
import { DevPage } from '@pages/DevPage';
import { InstallationDocs } from '@pages/docPages/InstallationDocs';
import { UsageDocs } from '@pages/docPages/UsageDocs';
import { ErrorPage } from '@pages/ErrorPage';
import { HomePage } from '@pages/HomePage';
import {
  IconCode,
  IconHome,
  IconInfoCircle,
  IconLetterCase,
  IconPhotoScan,
  IconQuote,
  IconSettings,
} from '@tabler/icons-react';
import {
  createBrowserRouter,
  NonIndexRouteObject,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { ErrorDocs } from './pages/ErrorDocs';

interface ICustomRoute extends NonIndexRouteObject {
  hide?: boolean;
  docsName?: string;
  path?: string;
  pathName?: string;
  title?: string;
  element: React.ReactElement;
  description?: string;
  icon?: React.ReactElement;
  children?: Array<ICustomRoute>;
  isLayout?: boolean;
}
/**
 * @param {string} docsName Name of the document
 */
interface ICustomDocsRoute extends ICustomRoute {
  docsName: string;
}

const docsRoutes: Array<ICustomDocsRoute> = [
  {
    docsName: 'Guides',
    path: `/docs/installation`,
    pathName: 'Installation',
    description: 'Step by step installation guide.',
    element: <InstallationDocs />,
  },
  {
    docsName: 'Guides',
    path: `/docs/usage`,
    pathName: 'Usage',
    description: 'Learn how to use those classes.',
    element: <UsageDocs />,
  },
  {
    docsName: 'Styling documentation',
    path: `/docs/image`,
    pathName: 'Image',
    element: <DynamicDocsDocument />,
    icon: <IconPhotoScan />,
  },
  {
    docsName: 'Styling documentation',
    path: `/docs/blockquote`,
    pathName: 'Blockquote',
    element: <DynamicDocsDocument />,
    icon: <IconQuote />,
  },
  {
    docsName: 'Styling documentation',
    path: `/docs/codeblock`,
    pathName: 'Codeblock',
    element: <DynamicDocsDocument />,
    icon: <IconCode />,
  },
  {
    docsName: 'Styling documentation',
    path: `/docs/text`,
    pathName: 'Text',
    title: 'Text and Titles',
    element: <DynamicDocsDocument />,
    icon: <IconLetterCase />,
  },
  // {
  //   docsName: 'Styling documentation',
  //   path: `/docs/tasklist`,
  //   pathName: 'Tasklist',
  //   title: 'Tasklist (WIP)',
  //   element: <DynamicDocsDocument />,
  //   icon: <IconListCheck />,
  // },
  // {
  //   docsName: 'Styling documentation',
  //   path: `/docs/combinations`,
  //   pathName: 'Combinations',
  //   element: <DynamicDocsDocument />,
  //   icon: <IconBlendMode />,
  // },
  // {
  //   docsName: 'Styling documentation',
  //   path: `/docs/misc`,
  //   pathName: 'misc',
  //   title: 'Miscellaneous',
  //   element: <DynamicDocsDocument />,
  // },
];

const routes: Array<ICustomRoute & RouteObject> = [
  {
    isLayout: true,
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        pathName: 'Home',
        element: <HomePage />,
        description: 'General introduction',
        icon: <IconHome />,
      },
      {
        path: '/about',
        pathName: 'About General Purpouse CSS',
        element: <AboutPage />,
        icon: <IconInfoCircle />,
      },
      {
        path: '/developer',
        pathName: 'Contribution',
        element: <DevPage />,
        description: 'See how you can contribute!',
        icon: <IconSettings />,
      },
      {
        hide: true,
        path: '*',
        pathName: 'Error Page',
        element: <ErrorPage />,
      },
      {
        isLayout: true,
        path: '/docs',
        element: <DocsLayout />,
        children: [
          ...docsRoutes,
          {
            docsName: '',
            hide: true,
            path: '/docs/*',
            pathName: 'Error Page',
            element: <ErrorDocs />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function Router() {
  return <RouterProvider router={router} />;
}

export { routes, docsRoutes };
export type { ICustomRoute, ICustomDocsRoute };
