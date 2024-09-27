import React, { useState } from 'react';
import { Breadcrumb, Button, Col, Select, Row } from 'antd';
import { LeftOutlined, HomeOutlined, SwapOutlined } from '@ant-design/icons';
import data from './data.json'

const TheDieuHuong: React.FC = () => {
    const [breadcrumbItems, setBreadcrumbItems] = useState([
        { title: 'Tòa án nhân dân tối cao' },
    ]);

    const options = [
        { value: '1', label: 'Đơn vị cấp dưới 1' },
        { value: '2', label: 'Đơn vị cấp dưới 2' },
        { value: '3', label: 'Đơn vị cấp dưới 3' },
    ];

    const handleSelect = (value: string, option: any) => {
        setBreadcrumbItems((prev) => [...prev, { title: option.label }]);
    };

    const handleBreadcrumbClick = (index: number) => {
        setBreadcrumbItems((prev) => prev.slice(0, index + 1)); 
    };

    return (
        <Row style={{ backgroundColor: "#fff", marginBottom: '5px' }}>
            <Col span={17}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        type="text"
                        icon={<LeftOutlined />}
                        title="Quay lại"
                        size="large"
                        style={{ margin: '4px' }}
                        onClick={() => {
                            setBreadcrumbItems((prev) => prev.slice(0, -1)); 
                        }}
                    />
                    <Button
                        type="text"
                        icon={<HomeOutlined />}
                        title="Đơn vị gốc"
                        size="large"
                        style={{ margin: '4px' }}
                        onClick={() => setBreadcrumbItems([{ title: 'Tòa án nhân dân tối cao' }])}
                    />

                    <Button
                        type="text"
                        icon={<SwapOutlined />}
                        title="Chuyển đổi đơn vị theo dõi"
                        size="large"
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
                            height: '5vh',
                        }}
                    >
                        <Breadcrumb
                            items={breadcrumbItems.map((item, index) => ({
                                title: (
                                    <span
                                        onClick={() => handleBreadcrumbClick(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.title}
                                    </span>
                                ),
                            }))}
                        />
                    </div>
                </div>
            </Col>
            <Col span={7} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>Đơn vị cấp dưới</span>
                <Select
                    showSearch
                    style={{ width: '70%' }}
                    options={data}
                    onChange={handleSelect}
                />
            </Col>
        </Row>
    );
};

export default TheDieuHuong;
