import React from 'react';
import { Row, Col, Card, Typography, Select, Menu } from 'antd';
import { BarChartOutlined, PlusOutlined, CalendarOutlined, AppstoreOutlined } from '@ant-design/icons';
import './Layout.css'

interface Option {
    value: string;
    label: string;
}

const { Title } = Typography;
const { Option } = Select;

const options: Option[] = [
    { value: 'Tháng', label: 'Tháng' },
    { value: 'Quý', label: 'Quý' },
    { value: '6 tháng', label: '6 tháng' },
    { value: 'Năm', label: 'Năm' }
];

const options2: Option[] = [];

for (let i = 1; i <= 12; i++) {
    options2.push({
        value: i.toString(),
        label: `tháng ${i}`,
    });
}

const options3: Option[] = [];
for (let year = 2015; year <= 2024; year++) {
  options3.push({
    value: year.toString(),
    label: year.toString(),
  });
}


const Layout = () => {
    return (
        <div className='container'>
            <div style={{ padding: '20px' }} >
                <div id='container'>
                    <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
                        <Col span={15}>
                            <Menu
                                mode="horizontal"
                                className="custom-menu"
                            >
                                <Menu.Item key="canhan">
                                    Cá nhân
                                </Menu.Item>
                                <Menu.Item key="toaan">
                                    Tòa án nhân dân tối cao
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={9} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>Loại đánh giá:</span>
                            <Select
                                showSearch
                                defaultValue="Tháng"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={options}
                            />
                            <span>Thời gian:</span>
                            <Select
                                showSearch
                                defaultValue="Tháng 9"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={options2}
                            />
                            <span>Năm:</span>
                            <Select
                                showSearch
                                defaultValue="2024"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={options3}
                            />
                        </Col>
                    </Row>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card
                            title="Đánh giá cá nhân"
                            style={{ height: '60vh', backgroundColor: '#ff6b6b' }}
                        >
                            <p style={{ color: 'white', textAlign: 'center', paddingTop: '60px' }}>Tháng 11/2023 - Điểm số: 0 điểm</p>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card title="Nhắc việc" style={{ height: '200px' }}>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                    <Col span={6}>
                        <Card style={{ backgroundColor: '#fff3cd' }} hoverable>
                            <BarChartOutlined style={{ fontSize: '24px', color: '#ffc107' }} />
                            <Title level={5}>Thống kê</Title>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ backgroundColor: '#f8d7da' }} hoverable>
                            <PlusOutlined style={{ fontSize: '24px', color: '#dc3545' }} />
                            <Title level={5}>Tự đánh giá</Title>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ backgroundColor: '#fdecea' }} hoverable>
                            <AppstoreOutlined style={{ fontSize: '24px', color: '#dc3545' }} />
                            <Title level={5}>Danh sách đánh giá</Title>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ backgroundColor: '#d4edda' }} hoverable>
                            <CalendarOutlined style={{ fontSize: '24px', color: '#28a745' }} />
                            <Title level={5}>Kế hoạch công việc</Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Layout;
