import { IconType } from 'src/assets/icons/types';
import {
  AppleIcon,
  BackIcon,
  BancoDoBrasilIcon,
  BankIcon,
  ChangeIcon,
  CheckIcon,
  ChevronRightIcon,
  CloseIcon,
  ErrorIcon,
  FoodIcon,
  GamesIcon,
  GoogleIcon,
  HealthIcon,
  HelpIcon,
  HouseIcon,
  InterIcon,
  ItauIcon,
  MoneyIcon,
  MoneyPathIcon,
  NubankIcon,
  SantanderIcon,
  TransportIcon,
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
    [IconType.change]: ChangeIcon,
    [IconType.chevronRight]: ChevronRightIcon,
    [IconType.close]: CloseIcon,
    [IconType.error]: ErrorIcon,
    [IconType.food]: FoodIcon,
    [IconType.games]: GamesIcon,
    [IconType.google]: GoogleIcon,
    [IconType.health]: HealthIcon,
    [IconType.help]: HelpIcon,
    [IconType.house]: HouseIcon,
    [IconType.moneyPath]: MoneyPathIcon,
    [IconType.money]: MoneyIcon,
    [IconType.inter]: InterIcon,
    [IconType.itau]: ItauIcon,
    [IconType.nubank]: NubankIcon,
    [IconType.santander]: SantanderIcon,
    [IconType.transport]: TransportIcon,
    [IconType.wallet]: WalletIcon,
    [IconType.warning]: WarningIcon,
  }[icon]);

export default renderIcon;
