import { JSX } from 'react';
import { INavigationButton } from '@components/Docs/BottomNavigation';
import { TTileProps } from '@utils/interfaces';
import { Link } from 'react-router-dom';
import { Paper, Text } from '@mantine/core';
import { ICustomDocsRoute } from '@/Router';

function TileFactory(data: INavigationButton): JSX.Element;
function TileFactory(data: ICustomDocsRoute): JSX.Element;
function TileFactory(data: ICustomDocsRoute, key: number): JSX.Element;
function TileFactory(data: INavigationButton | ICustomDocsRoute, key?: number): JSX.Element {
  if ('pathTo' in data) {
    //is INavigationButton
    return (
      <Tile to={data.pathTo || ''} p={0}>
        {/* <span className="Tile-Clickable-icon">{data.icon}</span> */}
        <Text style={{ fontWeight: 500 }} ta="center">
          {data.text}
        </Text>
      </Tile>
    );
  }
  // is ICustomDocsRoute
  return (
    <Tile to={data.path || ''} key={key}>
      <span className="Tile-Clickable-icon">{data.icon}</span>
      <Text style={{ fontWeight: 500 }} ta="center">
        {data?.title || data.pathName}
      </Text>
    </Tile>
  );
}

export { TileFactory };
export default function Tile({ children, to, ...props }: TTileProps) {
  return (
    <Paper
      to={to}
      c="var(--mantine-color-default-color)"
      component={Link}
      className="Tile-Clickable"
      p="xl"
      {...props}
    >
      {children}
    </Paper>
  );
}
