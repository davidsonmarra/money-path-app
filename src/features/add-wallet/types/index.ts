import {IconType} from 'src/assets/icons/types';

export interface InstitutionProps {
  name: string;
  icon: IconType;
  color?: string;
  backgroundColor?: string;
}

export type SelectInstitutionSection = {
  title: string;
  data: InstitutionProps[];
};
