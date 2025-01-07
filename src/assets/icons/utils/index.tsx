import {IconType} from 'src/assets/icons/types';
import {
  AppleIcon,
  BackIcon,
  BancoDoBrasilIcon,
  BankIcon,
  CheckIcon,
  ChevronRightIcon,
  CloseIcon,
  ErrorIcon,
  GoogleIcon,
  InterIcon,
  ItauIcon,
  MoneyIcon,
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
    [IconType.chevronRight]: ChevronRightIcon,
    [IconType.close]: CloseIcon,
    [IconType.error]: ErrorIcon,
    [IconType.google]: GoogleIcon,
    [IconType.moneyPath]: MoneyPathIcon,
    [IconType.money]: MoneyIcon,
    [IconType.inter]: InterIcon,
    [IconType.itau]: ItauIcon,
    [IconType.nubank]: NubankIcon,
    [IconType.santander]: SantanderIcon,
    [IconType.wallet]: WalletIcon,
    [IconType.warning]: WarningIcon,
  }[icon]);

export default renderIcon;
