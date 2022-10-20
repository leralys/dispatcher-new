import { ReactNode } from 'react';

import { TitleContainer, Underline, Card, CardTitle, CardBody } from './styles';

export interface Props {
  children?: ReactNode;
  title?: string;
  justifyContent?: string;
  alignItems?: string;
}

const GraphCard = ({
  children,
  title,
  justifyContent = 'center',
  alignItems = 'center',
}: Props) => {
  return (
    <Card>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
        <Underline />
      </TitleContainer>
      <CardBody
        justifyContent={justifyContent}
        alignItems={alignItems}
        data-testid='graph-card-body'
      >
        {children}
      </CardBody>
    </Card>
  );
};

export default GraphCard;
