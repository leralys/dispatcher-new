import {
  TitleContainer,
  Underline,
  Card,
  CardTitle,
  CardBody,
} from './graphCard.styles';

export interface GraphCardProps {
  children?: React.ReactNode;
  title?: string;
  justifyContent?: string;
  alignItems?: string;
}

const GraphCard = ({
  children,
  title,
  justifyContent = 'center',
  alignItems = 'center',
}: GraphCardProps) => {
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
