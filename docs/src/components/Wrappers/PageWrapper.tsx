import { TPaperProps } from '@utils/interfaces';
import { Paper } from '@mantine/core';

export function PageWrapper({ children, ...props }: TPaperProps) {
  return (
    <Paper bg="paper.1" shadow="md" p="xl" {...props}>
      {children}
    </Paper>
  );
}
