import { Card, Col, Flex, Row } from "antd";
import {
    TeamOutlined,
    CheckSquareOutlined,
    FormOutlined,
    StarOutlined,
    TableOutlined,
    BarsOutlined,
    ProfileOutlined,
} from "@ant-design/icons";

const data = [
    {
        title: "Tổng số cán bộ",
        count: 0,
        icon: <TeamOutlined />,
        color: "#009EF7",
    },
    {
        title: "Số lượng cán bộ chưa chấm điểm",
        count: 0,
        icon: <BarsOutlined />,
        color: "#50CD89",
    },
    {
        title: "Số lượng cán bộ tự chấm điểm",
        count: 0,
        icon: <CheckSquareOutlined />,
        color: "#7239EA",
    },
    {
        title: "Số lượng cán bộ đã xếp loại",
        count: 0,
        icon: <StarOutlined />,
        color: "#FFC700",
    },
    {
        title: "Đơn vị đã hoàn thành tự chấm điểm",
        count: "0 (0%)",
        icon: <ProfileOutlined />,
        color: "#F1416C",
    },
    {
        title: "Đơn vị chưa hoàn thành tự chấm điểm",
        count: "32 (100%)",
        icon: <TableOutlined />,
        color: "#7239EA",
    },
    {
        title: "Đơn vị đã hoàn thành xếp loại",
        count: "0 (0%)",
        icon: <CheckSquareOutlined />,
        color: "#009EF7",
    },
    {
        title: "Đơn vị chưa hoàn thành xếp loại",
        count: "32 (100%)",
        icon: <FormOutlined />,
        color: "#50CD89",
    },
];

export const TheThongKe = () => {
    return (
        <Card style={{ backgroundColor: "#fff" }}>
            <Row gutter={[16, 16]}>
                {data.map((item, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <Card style={{ width: "100%", height: "125px", backgroundColor: item.color }}>
                            <Row>
                                <Col span={20} style={{ color: "white" }}>
                                    <div className="card-title text-overflow text-overflow-1 text-white" title={item.title} style={{ fontSize: '14px' }}>
                                        {item.title}
                                    </div>
                                    <h3 className="card-text m-0 text-white" style={{ fontSize: '24px' }}>
                                        <b>{item.count}</b>
                                    </h3>
                                </Col>
                                <Col span={4} style={{ textAlign: 'center', alignSelf: 'center' }}>
                                    <div style={{ fontSize: '3em', color: 'white' }}>
                                        {item.icon}
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Card>
    );
};