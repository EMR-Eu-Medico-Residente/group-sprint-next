'use client';
import { DeveloperCard } from '@/app/DeveloperCard';
import { Box } from 'design-system-medclub';
import { DevelopersListProps } from './types';

export function DevelopersList({ developers }: DevelopersListProps) {
  // await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <Box>
      <>
        {developers.map((developer, index) => (
          <DeveloperCard key={index} {...developer} />
        ))}
      </>
    </Box>
  );
}
