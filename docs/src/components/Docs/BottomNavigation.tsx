import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { getCurrentDocsRoute } from '@utils/utils';
import { Link, useLocation } from 'react-router-dom';
import { Badge, Button, Group } from '@mantine/core';
import { docsRoutes, ICustomDocsRoute } from '@/Router';

const initBtnValues = {
  text: '',
  docsName: '',
  description: '',
  pathTo: '/',
};
type INavigationButton = typeof initBtnValues;

export type { INavigationButton };

export default function BottomNavigation({
  currRouteInject,
}: {
  currRouteInject?: Dispatch<SetStateAction<ICustomDocsRoute | undefined>>;
}) {
  function btnReducer(
    state: INavigationButton,
    action: {
      type: 'setAll' | 'setDisabled' | 'setText' | 'setPath';
      data?: Partial<INavigationButton>;
    }
  ): INavigationButton {
    switch (action.type) {
      case 'setAll':
        return {
          ...state,
          text: action?.data?.text || '',
          docsName: action?.data?.docsName || '',
          description: action?.data?.description || '',
          pathTo: action?.data?.pathTo ?? '/',
        };
      case 'setText':
        return {
          ...state,
          text: action?.data?.text || '',
        };
      case 'setPath':
        return {
          ...state,
          pathTo: action?.data?.pathTo ?? '/',
        };
      default:
        return state;
    }
  }

  const [isMounted, setIsMounted] = useState(false);
  const [leftState, leftDispatch] = useReducer(btnReducer, initBtnValues);
  const [rightState, rightDispatch] = useReducer(btnReducer, initBtnValues);
  const location = useLocation();

  useEffect(() => {
    const { route: currentRoute, id: foundId } = getCurrentDocsRoute(location.pathname);

    if (currentRoute && currRouteInject) currRouteInject?.(currentRoute);

    window.scrollTo(0, 0);

    const prevRoute = docsRoutes?.[foundId - 1] ?? initBtnValues;
    const nextRoute = docsRoutes?.[foundId + 1] ?? initBtnValues;

    if (prevRoute) {
      leftDispatch({
        type: 'setAll',
        data: {
          pathTo: prevRoute.path,
          text: prevRoute?.title || prevRoute.pathName,
          description: prevRoute.description,
          docsName: prevRoute.docsName,
        },
      });
    }
    if (nextRoute) {
      rightDispatch({
        type: 'setAll',
        data: {
          pathTo: nextRoute.path,
          text: nextRoute?.title || nextRoute.pathName,
          description: nextRoute.description,
          docsName: nextRoute.docsName,
        },
      });
    }

    setIsMounted(true);
  }, [location]);

  function renderBadge(data: INavigationButton, stylePosition: 'left' | 'right' = 'left') {
    return (
      data.docsName && (
        <Badge
          className={`BottomNav-badge BottomNav-badge-${stylePosition}`}
          variant="outline"
          radius="sm"
          color="paper.7"
        >
          {data.docsName}
        </Badge>
      )
    );
  }

  return (
    <>
      {isMounted && (
        <Group className="BottomNav" justify="center" w="100%" mt={30}>
          {leftState.text && (
            <Button
              component={Link}
              to={leftState.pathTo}
              leftSection={<IconArrowLeft />}
              variant="default"
              size="lg"
            >
              {leftState.text}
              {renderBadge(leftState, 'left')}
            </Button>
          )}
          {rightState.text && (
            <Button
              component={Link}
              to={rightState.pathTo}
              rightSection={<IconArrowRight />}
              variant="default"
              size="lg"
            >
              {renderBadge(rightState, 'right')}
              {rightState.text}
            </Button>
          )}
        </Group>
      )}
    </>
  );
}
