import MobileList from './MobileList';
import BankingList from './BankingList';

export default function RenderDetails({ type }) {
  return type === 'telecom' ? (
    <MobileList />
  ) : type === 'banking' ? (
    <BankingList />
  ) : null;
}
