import { Modal } from '../../components/Modal';
import { modalTypeEnum } from '../../utils/enum';

export default function Home() {
  return <Modal type={modalTypeEnum.LOGIN} />;
}
