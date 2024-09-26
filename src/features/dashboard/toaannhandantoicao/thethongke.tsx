import { Card, Col, Row } from "antd";
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
                        <Card style={{ backgroundColor: item.color }} bordered={false}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h4>{item.title}</h4>
                                    <h4>{item.count}</h4>
                                </div>
                                <div style={{ fontSize: "2em", marginRight: "8px" }}>
                                    {item.icon}
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Card>
    );
};