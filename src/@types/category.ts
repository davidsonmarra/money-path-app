import { IconType } from 'src/assets/icons/types';

export default interface Category {
  id: string;
  name: string;
  icon: IconType;
  backgroundColor: string;
  color: string;
}
