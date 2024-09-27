import { useEffect } from 'react';
import { Chart, registerables, ChartDataset } from 'chart.js';
import { Card } from 'antd';

Chart.register(...registerables);

type BaseDataset = {
    label: string;
    data: number[];
    type: 'line' | 'bar'; 
    borderColor: string;
    borderWidth: number;
    fill: boolean;
    backgroundColor?: undefined;
    barThickness?: undefined;
};

type OtherDataset = {
    label: string;
    data: number[];
    backgroundColor: string;
    type?: undefined; 
};

const datasets: (BaseDataset | OtherDataset)[] = [
    {
        label: 'Cán bộ đánh giá',
        data: [70, 76, 60, 73, 86, 78],
        type: 'line',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
    },
    {
        label: 'Cán bộ được cấp tài khoản',
        data: [28, 21, 30, 19, 22, 16],
        type: 'line',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
    },
    {
        label: 'Hoàn thành xuất sắc nhiệm vụ',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: '#32C3F7',
    },
    {
        label: 'Hoàn thành tốt nhiệm vụ',
        data: [50, 60, 70, 90, 40, 65],
        backgroundColor: '#36FDD6',
    },
    {
        label: 'Hoàn thành nhiệm vụ',
        data: [50, 60, 70, 90, 40, 65],
        backgroundColor: '#FEB252',
    },
    {
        label: 'Không hoàn thành nhiệm vụ',
        data: [0, 0, 3, 0, 0, 0],
        backgroundColor: 'red',
    },
];

const BieuDoXepLoai = () => {
    const labels = ['Tháng 1 2024', 'Tháng 2 2024', 'Tháng 3 2024', 'Tháng 4 2024', 'Tháng 5 2024', 'Tháng 6 2024'];
    
    useEffect(() => {
        const canvas = document.getElementById('mixedChart') as HTMLCanvasElement | null;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets as ChartDataset<'bar' | 'line', number[]>[],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            generateLabels: (chart) => {
                                const original = Chart.defaults.plugins.legend.labels.generateLabels;
                                const labels = original.call(this, chart);
                                labels.forEach((label, index) => {
                                    switch (index) {
                                        case 0:
                                            label.pointStyle = 'circle';
                                            label.fillStyle = '#4D90FE';
                                            break;
                                        case 1:
                                            label.pointStyle = 'circle';
                                            label.fillStyle = '#32DE8A';
                                            break;
                                        case 2:
                                            label.pointStyle = 'circle';
                                            label.fillStyle = '#F5A623';
                                            break;
                                        case 3:
                                            label.pointStyle = 'circle';
                                            label.fillStyle = '#EB5757';
                                            break;
                                        case 4:
                                            label.pointStyle = 'line';
                                            label.fillStyle = '#F2994A';
                                            break;
                                        case 5:
                                            label.pointStyle = 'line';
                                            label.fillStyle = '#56CCF2';
                                            break;
                                        default:
                                            break;
                                    }
                                });
                                return labels;
                            },
                        },
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                    y2: {
                        type: 'linear',
                        position: 'right',
                        beginAtZero: true,
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                },
            },
        });

        return () => {
            mixedChart.destroy();
        };
    }, []);

    return (
        <Card title="Tình hình xếp loại của đơn vị theo thời gian">
            <canvas id="mixedChart" width="400" height="200"></canvas>
        </Card>
    );
};

export default BieuDoXepLoai;
