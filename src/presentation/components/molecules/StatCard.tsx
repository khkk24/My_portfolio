import React from 'react';
import { Card } from '../molecules/Card';
import { Text } from '../atoms/Text';

interface StatCardProps {
  value: string | number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <Card className="text-center">
      <Text variant="h2" className="text-primary mb-2">
        {value}
      </Text>
      <Text variant="small" className="text-accent uppercase tracking-wider">
        {label}
      </Text>
    </Card>
  );
};
