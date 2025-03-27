import { lazy } from 'react';
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

async function lazyAssignDefault(promiseModule: Promise<any>) {
  const module = (await promiseModule) as { [name: string]: any };
  const fallback = <>Component could not be loaded</>;
  const componentName = Object.keys(module)?.at(-1);
  if (module && componentName) {
    return { default: module?.[componentName] || fallback };
  }
  return { default: fallback };
}

const DynamicDocsDocument = lazy(() => import('@components/Docs/DynamicDocsDocument'));
const DefaultLayout = lazy(() => import('@layouts/DefaultLayout'));
const DocsLayout = lazy(() => import('@layouts/DocsLayout'));
const AboutPage = lazy(async () => await lazyAssignDefault(import('@pages/AboutPage')));
const DevPage = lazy(async () => await lazyAssignDefault(import('@pages/DevPage')));
const InstallationDocs = lazy(
  async () => await lazyAssignDefault(import('@pages/docPages/InstallationDocs'))
);
const UsageDocs = lazy(async () => await lazyAssignDefault(import('@pages/docPages/UsageDocs')));
const ErrorPage = lazy(async () => await lazyAssignDefault(import('@pages/ErrorPage')));
const HomePage = lazy(async () => await lazyAssignDefault(import('@pages/HomePage')));

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
        pathName: 'About General Purpose CSS',
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
// const isDev = import.meta.env.DEV;
const router = createBrowserRouter(routes, {
  // basename: isDev ? '/' : '/Obsidian_general_purpose_css/',
});

export function Router() {
  return <RouterProvider router={router} />;
}

export { routes, docsRoutes };
export type { ICustomRoute, ICustomDocsRoute };
