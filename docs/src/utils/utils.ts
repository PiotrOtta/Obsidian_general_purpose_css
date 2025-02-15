import { docsRoutes, ICustomDocsRoute, ICustomRoute } from '@/Router';

interface _IDlinksToDocs {
  [docName: string]: any[];
}

function assingLinksToDocs(
  links: Array<ICustomDocsRoute>,
  callback: (...props: any) => {}
): _IDlinksToDocs {
  const DLinksToDocs: _IDlinksToDocs = {};

  links.forEach((link, key) => {
    if (link.hide) return;
    if (!DLinksToDocs?.[link.docsName]) DLinksToDocs[link.docsName] = [];
    DLinksToDocs[link.docsName].push(callback(link, key, 0));
  });

  return DLinksToDocs;
}

function sanitizeRoutes(routes: Array<ICustomRoute>) {
  return routes.reduce((acc: Array<ICustomRoute>, route: ICustomRoute) => {
    if (route.isLayout) {
      if (route.children) {
        acc.push(...sanitizeRoutes(route.children));
      }
      return acc;
    }
    const sanitizedRoute: ICustomRoute = { ...route };

    if (sanitizedRoute.children) {
      sanitizedRoute.children = sanitizeRoutes(sanitizedRoute.children);
    }

    acc.push(sanitizedRoute);
    return acc;
  }, []);
}

function getCurrentDocsRoute(pathName: string): { route?: ICustomDocsRoute; id: number } {
  const foundRouteId = docsRoutes.findIndex((el) => el.path === pathName);
  if (~foundRouteId) return { route: docsRoutes?.[foundRouteId], id: foundRouteId };

  return { route: undefined, id: foundRouteId };
}

export { assingLinksToDocs, sanitizeRoutes, getCurrentDocsRoute };
