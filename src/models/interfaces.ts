export interface BreadcrumbItemProps {
  bc: string | BusinessUnit | SubBusinessUnit | null;
  onClick?: () => void;
  isActive: boolean;
  backBtn?: boolean;
}

export interface DisplayCardsProps {
  items: BusinessUnit | SubBusinessUnit;
  onClick: () => void;
  isSelected: boolean;
}

export interface BusinessUnit {
  id: number;
  name: string;
  img: string;
  subBusinessUnits?: SubBusinessUnit[];
}

export interface SubBusinessUnit extends BusinessUnit {
  type?: string;
  mobile?: string;
  address?: string;
}
