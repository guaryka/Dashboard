import { Card, Button, Select, Table, Pagination } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import { useState } from 'react';
import data from './data.json';

interface Unit {
    key: number; 
    value: string;
    canbo: number;
    chuaChamDiem: number;
    tuChamDiem: number;
    daXepLoai: number;
    xuatSac: number;
    tot: number;
    hoanThanh: number;
    khongHoanThanh: number;
    label: string;
}

const { Option } = Select;

const DanhSachDonVi = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            sorter: (a: Unit, b: Unit) => a.key - b.key, 
        },
        {
            title: 'Đơn vị',
            dataIndex: 'value',
            key: 'value',
            sorter: (a: Unit, b: Unit) => a.value.localeCompare(b.value), 
        },
        {
            title: 'Cán bộ',
            dataIndex: 'canbo',
            key: 'canbo',
            sorter: (a: Unit, b: Unit) => a.canbo - b.canbo, 
        },
        {
            title: 'Chưa chấm điểm',
            dataIndex: 'chuaChamDiem',
            key: 'chuaChamDiem',
            sorter: (a: Unit, b: Unit) => a.chuaChamDiem - b.chuaChamDiem, 
        },
        {
            title: 'Tự chấm điểm',
            dataIndex: 'tuChamDiem',
            key: 'tuChamDiem',
            sorter: (a: Unit, b: Unit) => a.tuChamDiem - b.tuChamDiem,
        },
        {
            title: 'Đã xếp loại',
            dataIndex: 'daXepLoai',
            key: 'daXepLoai',
            sorter: (a: Unit, b: Unit) => a.daXepLoai - b.daXepLoai, 
        },
        {
            title: 'Hoàn thành xuất sắc nhiệm vụ',
            dataIndex: 'xuatSac',
            key: 'xuatSac',
            sorter: (a: Unit, b: Unit) => a.xuatSac - b.xuatSac, 
        },
        {
            title: 'Hoàn thành tốt nhiệm vụ',
            dataIndex: 'tot',
            key: 'tot',
            sorter: (a: Unit, b: Unit) => a.tot - b.tot, 
        },
        {
            title: 'Hoàn thành nhiệm vụ',
            dataIndex: 'hoanThanh',
            key: 'hoanThanh',
            sorter: (a: Unit, b: Unit) => a.hoanThanh - b.hoanThanh,
        },
        {
            title: 'Không hoàn thành nhiệm vụ',
            dataIndex: 'khongHoanThanh',
            key: 'khongHoanThanh',
            sorter: (a: Unit, b: Unit) => a.khongHoanThanh - b.khongHoanThanh, 
        },
    ];

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
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
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={data.length}
                onChange={handlePageChange}
                showSizeChanger
                pageSizeOptions={['10', '50', '100']}
                style={{ marginBottom: '20px', textAlign: 'right' }}
            />
            
            <Table
                columns={columns}
                dataSource={data.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={false} 
                style={{ marginBottom: '20px' }}
            />
            
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={data.length}
                onChange={handlePageChange}
                showSizeChanger
                pageSizeOptions={['10', '50', '100']}
                style={{ textAlign: 'right' }}
            />
        </Card>
    );
};

export default DanhSachDonVi;
