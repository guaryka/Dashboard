import { Row, Col } from 'antd';
import { TheThongKe } from './thethongke';
import { MenuChuyentrang, BoLocThoiGian } from '../tienich/TienIch';
import BieuDoXepLoai from './bieudoxeploai';
import CardXepLoai from './xeploaidonvi';
import TheDieuHuong from './thedieuhuong';
import DanhSachDonVi from './danhsachdonvi';
import DieuHuongDauTrang from './dieuhuongdautrang';

const Toaannhandantoicao: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#eff2f5' }}>
            <DieuHuongDauTrang />
            <div style={{ padding: '10px' }} >
                <Row style={{ marginBottom: '5px', backgroundColor: "#fff" }}>
                    <Col span={15}>
                        <MenuChuyentrang />
                    </Col>
                    <Col span={9} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <BoLocThoiGian />
                    </Col>
                </Row>
                <TheDieuHuong />
                <Row style={{ backgroundColor: "#fff", marginBottom: '5px' }}>
                    <TheThongKe />
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: '5px' }}>
                    <Col span={14}>
                        <BieuDoXepLoai />
                    </Col>
                    <Col span={10}>
                        <CardXepLoai />
                    </Col>
                </Row>
                <Row >
                    <DanhSachDonVi />
                </Row>
            </div>
        </div>
    );
}

export default Toaannhandantoicao;
