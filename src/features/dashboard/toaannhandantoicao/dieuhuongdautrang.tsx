import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import './dieuhuongdautrang.css'

const DieuHuongDauTrang = () => {
    return (
        <div>
            <BackTop visibilityHeight={750}>
                <div className="back-top-btn">
                    <UpOutlined />
                </div>
            </BackTop>
        </div>
    );
};

export default DieuHuongDauTrang;

