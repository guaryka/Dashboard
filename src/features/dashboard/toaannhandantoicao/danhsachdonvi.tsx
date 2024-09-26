import { Card, Button, Select, Table, Pagination } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import { useState } from 'react';
import data from './data.json'

const { Option } = Select;

const DanhSachDonVi = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Số mục mỗi trang

    

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Đơn vị',
            dataIndex: 'donvi',
            key: 'donvi',
        },
        {
            title: 'Cán bộ',
            dataIndex: 'canbo',
            key: 'canbo',
        },
        {
            title: 'Chưa chấm điểm',
            dataIndex: 'chuaChamDiem',
            key: 'chuaChamDiem',
        },
        {
            title: 'Tự chấm điểm',
            dataIndex: 'tuChamDiem',
            key: 'tuChamDiem',
        },
        {
            title: 'Đã xếp loại',
            dataIndex: 'daXepLoai',
            key: 'daXepLoai',
        },
        {
            title: 'Hoàn thành xuất sắc nhiệm vụ',
            dataIndex: 'xuatSac',
            key: 'xuatSac',
        },
        {
            title: 'Hoàn thành tốt nhiệm vụ',
            dataIndex: 'tot',
            key: 'tot',
        },
        {
            title: 'Hoàn thành nhiệm vụ',
            dataIndex: 'hoanThanh',
            key: 'hoanThanh',
        },
        {
            title: 'Không hoàn thành nhiệm vụ',
            dataIndex: 'khongHoanThanh',
            key: 'khongHoanThanh',
        },
    ];

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };

    return (
        <Card
            title={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 'bold' }}>Danh sách đơn vị</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button icon={<PrinterOutlined />} type="primary" style={{ marginRight: '10px' }}>
                            In danh sách
                        </Button>
                        <span style={{ marginRight: '10px' }}>Nhóm đơn vị: </span>
                        <Select defaultValue="Tất cả" style={{ width: 120 }}>
                            <Option value="Tất cả">Tất cả</Option>
                        </Select>
                    </div>
                </div>
            }
            style={{ width: '100%' }}
        >
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                style={{ marginBottom: '20px' }}
            />
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={data.length} 
                onChange={handlePageChange}
                showSizeChanger={false}
                style={{ textAlign: 'right' }}
            />
        </Card>
    );
};

export default DanhSachDonVi;
