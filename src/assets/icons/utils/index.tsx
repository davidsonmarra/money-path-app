import {IconType} from 'src/assets/icons/types';
import {
  AppleIcon,
  BackIcon,
  BancoDoBrasilIcon,
  BankIcon,
  GoogleIcon,
  InterIcon,
  ItauIcon,
  MoneyPathIcon,
  NubankIcon,
  SantanderIcon,
  WalletIcon,
} from 'src/assets/icons';

const renderIcon = (icon: IconType) =>
  ({
    [IconType.apple]: AppleIcon,
    [IconType.back]: BackIcon,
    [IconType.bancoDoBrasil]: BancoDoBrasilIcon,
    [IconType.bank]: BankIcon,
    [IconType.google]: GoogleIcon,
    [IconType.moneyPath]: MoneyPathIcon,
    [IconType.inter]: InterIcon,
    [IconType.itau]: ItauIcon,
    [IconType.nubank]: NubankIcon,
    [IconType.santander]: SantanderIcon,
    [IconType.wallet]: WalletIcon,
  }[icon]);

export default renderIcon;