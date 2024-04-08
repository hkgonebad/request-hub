export interface BreadcrumbItemProps {
  bc: BusinessUnit | SubBusinessUnit;
  onClick?: () => void;
  isActive: boolean;
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
