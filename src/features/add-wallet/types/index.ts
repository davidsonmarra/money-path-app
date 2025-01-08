import {IconType} from 'src/assets/icons/types';

export interface InstitutionProps {
  name: string;
  icon: IconType;
  color?: string;
  backgroundColor?: string;
  type: 'personal' | 'bank';
  amount?: number;
}

export type SelectInstitutionSection = {
  title: string;
  data: InstitutionProps[];
};
