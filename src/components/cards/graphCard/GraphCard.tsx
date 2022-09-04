import {
  TitleContainer,
  Underline,
  CardSecondaryStyled,
  CardSecondaryTitle,
  CardSecondaryBody,
} from './graphCard.styles';

export interface GraphCardProps {
  children?: React.ReactNode;
  title?: string;
  justifyContent: string;
  alignItems: string;
}

const GraphCard = ({
  children,
  title,
  justifyContent = 'center',
  alignItems = 'center',
}: GraphCardProps) => {
  return (
    <CardSecondaryStyled>
      <TitleContainer>
        <CardSecondaryTitle>{title}</CardSecondaryTitle>
        <Underline />
      </TitleContainer>
      <CardSecondaryBody
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {children}
      </CardSecondaryBody>
    </CardSecondaryStyled>
  );
};

export default GraphCard;
