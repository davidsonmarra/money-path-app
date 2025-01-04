import {IconType} from 'src/assets/icons/types';

export interface InstitutionProps {
  name: string;
  icon: IconType;
  color?: string;
  backgroundColor?: string;
  type: 'personal' | 'bank';
}

export type SelectInstitutionSection = {
  title: string;
  data: InstitutionProps[];
};
