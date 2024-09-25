import { Row, Col, Button, Select } from 'antd';
import {
    LeftOutlined,
    HomeOutlined,
    SwapOutlined
} from "@ant-design/icons";
import { CardsRow } from './cardsRow';
import { Chuyentrang, Thoigian } from '../taskbar';

interface Option {
    value: string;
    label: string;
}

const { Option } = Select;

const options: Option[] = [
    { value: 'Tháng', label: 'Tháng' },
    { value: 'Quý', label: 'Quý' },
    { value: '6 tháng', label: '6 tháng' },
    { value: 'Năm', label: 'Năm' }
];





const Toaannhandantoicao: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#eff2f5' }}>
            <div style={{ padding: '20px' }} >
                <Row style={{ marginBottom: '5px', backgroundColor: "#fff" }}>
                    <Col span={15}>
                        <Chuyentrang />
                    </Col>
                    <Col span={9} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Thoigian />
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#fff", marginBottom: '5px' }}>
                    <Col span={17}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                type="text"
                                icon={<LeftOutlined />}
                                title="Quay lại"
                                size='large'
                                style={{ margin: '4px' }}
                            />

                            <Button
                                type="text"
                                icon={<HomeOutlined />}
                                title="Đơn vị gốc"
                                size='large'
                                style={{ margin: '4px' }}
                            />

                            <Button
                                type="text"
                                icon={<SwapOutlined />}
                                title="Chuyển đổi đơn vị theo dõi"
                                size='large'
                                style={{ margin: '4px' }}
                            />

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '8px',
                                    fontWeight: 'bold',
                                    border: '1px solid #d9d9d9',
                                    cursor: 'pointer',
                                    width: '80%',
                                    height: '5vh'
                                }}
                            >
                                <h4>Tòa án nhân dân tối cao</h4>
                            </div>
                        </div>
                    </Col>
                    <Col span={7} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Đơn vị cấp dưới</span>
                        <Select
                            showSearch
                            style={{ width: '70%' }}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={options}
                        />
                    </Col>
                </Row>
                <Row>
                    <CardsRow />
                </Row>
            </div>
        </div>
    );
}

export default Toaannhandantoicao;
