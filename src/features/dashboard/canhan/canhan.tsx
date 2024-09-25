import { Row, Col, Card, Typography } from 'antd';
import { BarChartOutlined, PlusOutlined, CalendarOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Chuyentrang, Thoigian } from '../taskbar';

const { Title } = Typography;

const Canhan = () => {
    return (
        <div style={{ backgroundColor: '#eff2f5' }}>
            <div style={{ padding: '20px' }} >
                <Row style={{ marginBottom: '5px',backgroundColor: "#fff" }}>
                    <Col span={15}>
                        <Chuyentrang />
                    </Col>
                    <Col span={9} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Thoigian />
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ display: 'flex', alignItems: 'stretch' }}>
                    <Col span={12} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Row gutter={[16, 16]} style={{ flex: 1 }}>
                            <Col span={24}>
                                <Card
                                    style={{ backgroundColor: '#ff6b6b', height: '100%' }}
                                >
                                    <h3>Đánh giá cá nhân</h3>
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card style={{ height: '100%' }}>
                                    <Row gutter={[16, 16]}>
                                        <Col span={12}>
                                            <Card style={{ backgroundColor: '#fff3cd' }} hoverable>
                                                <BarChartOutlined style={{ fontSize: '24px', color: '#ffc107' }} />
                                                <Title level={5}>Thống kê</Title>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{ backgroundColor: '#f8d7da' }} hoverable>
                                                <PlusOutlined style={{ fontSize: '24px', color: '#dc3545' }} />
                                                <Title level={5}>Tự đánh giá</Title>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{ backgroundColor: '#fdecea' }} hoverable>
                                                <AppstoreOutlined style={{ fontSize: '24px', color: '#dc3545' }} />
                                                <Title level={5}>Danh sách đánh giá</Title>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{ backgroundColor: '#d4edda' }} hoverable>
                                                <CalendarOutlined style={{ fontSize: '24px', color: '#28a745' }} />
                                                <Title level={5}>Kế hoạch công việc</Title>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
                        <Card title="Nhắc việc" style={{ height: '100%' }}>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Canhan;
