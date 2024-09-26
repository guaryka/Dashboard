import { Menu, Select } from "antd"
import { Link,useLocation } from "react-router-dom"
import './taskbar.css'

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

export const Chuyentrang = () => {
    const location = useLocation();
    return (
        <Menu mode="horizontal" className="custom-menu">
            <Menu.Item
                key="canhan"
                className={location.pathname === '/canhan' ? 'ant-menu-item-active' : ''}
            >
                <Link to="/canhan">Cá nhân</Link>
            </Menu.Item>
            <Menu.Item
                key="toaan"
                className={location.pathname === '/toaannhandantoicao' ? 'ant-menu-item-active' : ''}
            >
                <Link to="/toaannhandantoicao">Tòa án nhân dân tối cao</Link>
            </Menu.Item>
        </Menu>
    )
}

export const Thoigian = () => {
    return (
        <>
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
        </>
    )
}