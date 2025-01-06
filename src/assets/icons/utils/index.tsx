import {IconType} from 'src/assets/icons/types';
import {
  AppleIcon,
  BackIcon,
  BancoDoBrasilIcon,
  BankIcon,
  CheckIcon,
  CloseIcon,
  ErrorIcon,
  GoogleIcon,
  InterIcon,
  ItauIcon,
  MoneyPathIcon,
  NubankIcon,
  SantanderIcon,
  WalletIcon,
  WarningIcon,
} from 'src/assets/icons';

const renderIcon = (icon: IconType) =>
  ({
    [IconType.apple]: AppleIcon,
    [IconType.back]: BackIcon,
    [IconType.bancoDoBrasil]: BancoDoBrasilIcon,
    [IconType.bank]: BankIcon,
    [IconType.check]: CheckIcon,
    [IconType.close]: CloseIcon,
    [IconType.error]: ErrorIcon,
    [IconType.google]: GoogleIcon,
    [IconType.moneyPath]: MoneyPathIcon,
    [IconType.inter]: InterIcon,
    [IconType.itau]: ItauIcon,
    [IconType.nubank]: NubankIcon,
    [IconType.santander]: SantanderIcon,
    [IconType.wallet]: WalletIcon,
    [IconType.warning]: WarningIcon,
  }[icon]);

export default renderIcon;
