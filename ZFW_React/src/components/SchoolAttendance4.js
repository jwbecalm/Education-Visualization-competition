import React from 'react';
import { Card } from 'react-bootstrap';
import Ec from './Ec'

export default function() {
    const option = {
        legend: {
            data: ['各个时间点峰值', '整体平均值']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },

        },
        angleAxis: {
            scale: 'True',
            type: 'category',
            boundaryGap: false,
            axisTick: {
                alignWithLabel: true
            },
            // data: ['06:00', '06:01', '06:02', '06:03', '06:04', '06:05', '06:06', '06:07', '06:08', '06:09', '06:10', '06:11', '06:12', '06:13', '06:14', '06:15', '06:16', '06:17', '06:18', '06:19', '06:20', '06:21', '06:22', '06:23', '06:24', '06:25', '06:26', '06:27', '06:28', '06:29', '06:30', '06:31', '06:32', '06:33', '06:34', '06:35', '06:36', '06:37', '06:38', '06:39', '06:40', '06:41', '06:42', '06:43', '06:44', '06:45', '06:46', '06:47', '06:48', '06:49', '06:50', '06:51', '06:52', '06:53', '06:54', '06:55', '06:56', '06:57', '06:58', '06:59', '07:00', '07:01', '07:02', '07:03', '07:04', '07:05', '07:06', '07:07', '07:08', '07:09', '07:10', '07:11', '07:12', '07:13', '07:14', '07:15', '07:16', '07:17', '07:18', '07:19', '07:20', '07:21', '07:22', '07:23', '07:24', '07:25', '07:26', '07:27', '07:28', '07:29', '07:30', '07:31', '07:32', '07:33', '07:34', '07:35', '07:36', '07:37', '07:38', '07:39', '07:40', '07:41', '07:42', '07:43', '07:44', '07:45', '07:46', '07:47', '07:48', '07:49', '07:50', '07:51', '07:52', '07:53', '07:54', '07:55', '07:56', '07:57', '07:58', '07:59'],
            // data:['11:00', '11:01', '11:02', '11:03', '11:04', '11:05', '11:06', '11:07', '11:08', '11:09', '11:10', '11:11', '11:12', '11:13', '11:14', '11:15', '11:16', '11:17', '11:18', '11:19', '11:20', '11:21', '11:22', '11:23', '11:24', '11:25', '11:26', '11:27', '11:28', '11:29', '11:30', '11:31', '11:32', '11:33', '11:34', '11:35', '11:36', '11:37', '11:38', '11:39', '11:40', '11:41', '11:42', '11:43', '11:44', '11:45', '11:46', '11:47', '11:48', '11:49', '11:50', '11:51', '11:52', '11:53', '11:54', '11:55', '11:56', '11:57', '11:58', '11:59', '12:00', '12:01', '12:02', '12:03', '12:04', '12:05', '12:06', '12:07', '12:08', '12:09', '12:10', '12:11', '12:12', '12:13', '12:14', '12:15', '12:16', '12:17', '12:18', '12:19', '12:20', '12:21', '12:22', '12:23', '12:24', '12:25', '12:26', '12:27', '12:28', '12:29', '12:30', '12:31', '12:32', '12:33', '12:34', '12:35', '12:36', '12:37', '12:38', '12:39', '12:40', '12:41', '12:42', '12:43', '12:44', '12:45', '12:46', '12:47', '12:48', '12:49', '12:50', '12:51', '12:52', '12:53', '12:54', '12:55', '12:56', '12:57', '12:58', '12:59'],
            data: ['16:00', '16:01', '16:02', '16:03', '16:04', '16:05', '16:06', '16:07', '16:08', '16:09', '16:10', '16:11', '16:12', '16:13', '16:14', '16:15', '16:16', '16:17', '16:18', '16:19', '16:20', '16:21', '16:22', '16:23', '16:24', '16:25', '16:26', '16:27', '16:28', '16:29', '16:30', '16:31', '16:32', '16:33', '16:34', '16:35', '16:36', '16:37', '16:38', '16:39', '16:40', '16:41', '16:42', '16:43', '16:44', '16:45', '16:46', '16:47', '16:48', '16:49', '16:50', '16:51', '16:52', '16:53', '16:54', '16:55', '16:56', '16:57', '16:58', '16:59', '17:00', '17:01', '17:02', '17:03', '17:04', '17:05', '17:06', '17:07', '17:08', '17:09', '17:10', '17:11', '17:12', '17:13', '17:14', '17:15', '17:16', '17:17', '17:18', '17:19', '17:20', '17:21', '17:22', '17:23', '17:24', '17:25', '17:26', '17:27', '17:28', '17:29', '17:30', '17:31', '17:32', '17:33', '17:34', '17:35', '17:36', '17:37', '17:38', '17:39', '17:40', '17:41', '17:42', '17:43', '17:44', '17:45', '17:46', '17:47', '17:48', '17:49', '17:50', '17:51', '17:52', '17:53', '17:54', '17:55', '17:56', '17:57', '17:58', '17:59'],
            // data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            z: 10
        },
        radiusAxis: [{
            show: true,
            axisLabel: {
                show: true,
                showMaxLabel: false,
                showMinLabel: false
            }
        }],
        polar: {
        },
        series: [
           {
                name: '各个时间点峰值',
                type: 'bar',
                itemStyle: {
                    color: '#ff9797'
                },
               // data: [0, 1, 0, 0, 1, 0, 0, 0, 2, 4, 1, 7, 6, 8, 9, 12, 6, 12, 19, 20, 21, 33, 46, 25, 55, 56, 57, 57, 74, 81, 151, 134, 139, 165, 201, 222, 263, 287, 288, 296, 425, 564, 545, 578, 499, 403, 379, 297, 229, 147, 109, 67, 67, 48, 41, 37, 35, 58, 40, 49, 58, 51, 48, 64, 46, 61, 46, 48, 62, 67, 58, 86, 51, 74, 77, 96, 62, 94, 69, 67, 109, 87, 87, 122, 126, 161, 388, 669, 715, 502, 553, 253, 172, 145, 87, 120, 77, 530, 36, 26, 25, 28, 16, 12, 20, 24, 18, 18, 17, 17, 15, 14, 19, 16, 17, 10, 11, 5, 10, 15],
            //    data: [10, 11, 9, 15, 14, 10, 19, 32, 26, 23, 14, 17, 12, 23, 24, 37, 13, 17, 14, 10, 8, 8, 11, 20, 19, 18, 18, 14, 15, 9, 9, 10, 13, 22, 19, 22, 48, 15, 10, 15, 18, 18, 17, 8, 8, 13, 23, 18, 21, 24, 12, 29, 15, 8, 23, 19, 20, 27, 36, 19, 19, 16, 12, 24, 19, 26, 35, 30, 21, 24, 16, 29, 19, 20, 9, 3, 14, 20, 8, 9, 14, 14, 13, 9, 10, 18, 11, 18, 14, 12, 7, 20, 7, 22, 14, 16, 17, 15, 13, 12, 6, 5, 11, 5, 8, 5, 8, 9, 23, 8, 4, 16, 9, 10, 12, 8, 11, 9, 17, 11],
               data: [8, 10, 2, 12, 3, 3, 6, 9, 4, 16, 2, 2, 2, 10, 2, 6, 1, 6, 9, 2, 11, 6, 4, 11, 10, 8, 10, 12, 11, 13, 13, 13, 19, 23, 38, 31, 27, 25, 25, 22, 26, 30, 36, 24, 36, 29, 40, 34, 29, 26, 26, 21, 25, 17, 15, 9, 13, 14, 18, 2, 11, 13, 7, 7, 8, 7, 7, 2, 8, 8, 8, 7, 1, 1, 0, 1, 4, 3, 0, 7, 2, 1, 1, 8, 7, 10, 4, 11, 3, 12, 8, 7, 6, 12, 10, 9, 2, 7, 6, 10, 8, 13, 7, 8, 17, 12, 13, 9, 7, 7, 10, 6, 11, 8, 3, 4, 10, 8, 7, 3],
               // data: [13, 12, 8, 0, 0, 1, 7376, 6577, 548, 434, 3132, 1049, 844, 337, 598, 921, 917, 417, 254, 44, 93, 33, 0, 22],

               coordinateSystem: 'polar',

           },
            {
                name: '整体平均值',
                type: 'line',
                // symbol: 'none',
                symbolSize: 2,
                itemStyle: {
                    color: '#4f4f4f'
                },
                smooth: true,
                // data: [[116.28, '06:00'], [116.28, '06:01'], [116.28, '06:02'], [116.28, '06:03'], [116.28, '06:04'], [116.28, '06:05'], [116.28, '06:06'], [116.28, '06:07'], [116.28, '06:08'], [116.28, '06:09'], [116.28, '06:10'], [116.28, '06:11'], [116.28, '06:12'], [116.28, '06:13'], [116.28, '06:14'], [116.28, '06:15'], [116.28, '06:16'], [116.28, '06:17'], [116.28, '06:18'], [116.28, '06:19'], [116.28, '06:20'], [116.28, '06:21'], [116.28, '06:22'], [116.28, '06:23'], [116.28, '06:24'], [116.28, '06:25'], [116.28, '06:26'], [116.28, '06:27'], [116.28, '06:28'], [116.28, '06:29'], [116.28, '06:30'], [116.28, '06:31'], [116.28, '06:32'], [116.28, '06:33'], [116.28, '06:34'], [116.28, '06:35'], [116.28, '06:36'], [116.28, '06:37'], [116.28, '06:38'], [116.28, '06:39'], [116.28, '06:40'], [116.28, '06:41'], [116.28, '06:42'], [116.28, '06:43'], [116.28, '06:44'], [116.28, '06:45'], [116.28, '06:46'], [116.28, '06:47'], [116.28, '06:48'], [116.28, '06:49'], [116.28, '06:50'], [116.28, '06:51'], [116.28, '06:52'], [116.28, '06:53'], [116.28, '06:54'], [116.28, '06:55'], [116.28, '06:56'], [116.28, '06:57'], [116.28, '06:58'], [116.28, '06:59'], [116.28, '07:00'], [116.28, '07:01'], [116.28, '07:02'], [116.28, '07:03'], [116.28, '07:04'], [116.28, '07:05'], [116.28, '07:06'], [116.28, '07:07'], [116.28, '07:08'], [116.28, '07:09'], [116.28, '07:10'], [116.28, '07:11'], [116.28, '07:12'], [116.28, '07:13'], [116.28, '07:14'], [116.28, '07:15'], [116.28, '07:16'], [116.28, '07:17'], [116.28, '07:18'], [116.28, '07:19'], [116.28, '07:20'], [116.28, '07:21'], [116.28, '07:22'], [116.28, '07:23'], [116.28, '07:24'], [116.28, '07:25'], [116.28, '07:26'], [116.28, '07:27'], [116.28, '07:28'], [116.28, '07:29'], [116.28, '07:30'], [116.28, '07:31'], [116.28, '07:32'], [116.28, '07:33'], [116.28, '07:34'], [116.28, '07:35'], [116.28, '07:36'], [116.28, '07:37'], [116.28, '07:38'], [116.28, '07:39'], [116.28, '07:40'], [116.28, '07:41'], [116.28, '07:42'], [116.28, '07:43'], [116.28, '07:44'], [116.28, '07:45'], [116.28, '07:46'], [116.28, '07:47'], [116.28, '07:48'], [116.28, '07:49'], [116.28, '07:50'], [116.28, '07:51'], [116.28, '07:52'], [116.28, '07:53'], [116.28, '07:54'], [116.28, '07:55'], [116.28, '07:56'], [116.28, '07:57'], [116.28, '07:58'], [116.28, '07:59']],
                // data: [[15.78, '11:00'], [15.78, '11:01'], [15.78, '11:02'], [15.78, '11:03'], [15.78, '11:04'], [15.78, '11:05'], [15.78, '11:06'], [15.78, '11:07'], [15.78, '11:08'], [15.78, '11:09'], [15.78, '11:10'], [15.78, '11:11'], [15.78, '11:12'], [15.78, '11:13'], [15.78, '11:14'], [15.78, '11:15'], [15.78, '11:16'], [15.78, '11:17'], [15.78, '11:18'], [15.78, '11:19'], [15.78, '11:20'], [15.78, '11:21'], [15.78, '11:22'], [15.78, '11:23'], [15.78, '11:24'], [15.78, '11:25'], [15.78, '11:26'], [15.78, '11:27'], [15.78, '11:28'], [15.78, '11:29'], [15.78, '11:30'], [15.78, '11:31'], [15.78, '11:32'], [15.78, '11:33'], [15.78, '11:34'], [15.78, '11:35'], [15.78, '11:36'], [15.78, '11:37'], [15.78, '11:38'], [15.78, '11:39'], [15.78, '11:40'], [15.78, '11:41'], [15.78, '11:42'], [15.78, '11:43'], [15.78, '11:44'], [15.78, '11:45'], [15.78, '11:46'], [15.78, '11:47'], [15.78, '11:48'], [15.78, '11:49'], [15.78, '11:50'], [15.78, '11:51'], [15.78, '11:52'], [15.78, '11:53'], [15.78, '11:54'], [15.78, '11:55'], [15.78, '11:56'], [15.78, '11:57'], [15.78, '11:58'], [15.78, '11:59'], [15.78, '12:00'], [15.78, '12:01'], [15.78, '12:02'], [15.78, '12:03'], [15.78, '12:04'], [15.78, '12:05'], [15.78, '12:06'], [15.78, '12:07'], [15.78, '12:08'], [15.78, '12:09'], [15.78, '12:10'], [15.78, '12:11'], [15.78, '12:12'], [15.78, '12:13'], [15.78, '12:14'], [15.78, '12:15'], [15.78, '12:16'], [15.78, '12:17'], [15.78, '12:18'], [15.78, '12:19'], [15.78, '12:20'], [15.78, '12:21'], [15.78, '12:22'], [15.78, '12:23'], [15.78, '12:24'], [15.78, '12:25'], [15.78, '12:26'], [15.78, '12:27'], [15.78, '12:28'], [15.78, '12:29'], [15.78, '12:30'], [15.78, '12:31'], [15.78, '12:32'], [15.78, '12:33'], [15.78, '12:34'], [15.78, '12:35'], [15.78, '12:36'], [15.78, '12:37'], [15.78, '12:38'], [15.78, '12:39'], [15.78, '12:40'], [15.78, '12:41'], [15.78, '12:42'], [15.78, '12:43'], [15.78, '12:44'], [15.78, '12:45'], [15.78, '12:46'], [15.78, '12:47'], [15.78, '12:48'], [15.78, '12:49'], [15.78, '12:50'], [15.78, '12:51'], [15.78, '12:52'], [15.78, '12:53'], [15.78, '12:54'], [15.78, '12:55'], [15.78, '12:56'], [15.78, '12:57'], [15.78, '12:58'], [15.78, '12:59']],
                data: [[11.12, '16:00'], [11.12, '16:01'], [11.12, '16:02'], [11.12, '16:03'], [11.12, '16:04'], [11.12, '16:05'], [11.12, '16:06'], [11.12, '16:07'], [11.12, '16:08'], [11.12, '16:09'], [11.12, '16:10'], [11.12, '16:11'], [11.12, '16:12'], [11.12, '16:13'], [11.12, '16:14'], [11.12, '16:15'], [11.12, '16:16'], [11.12, '16:17'], [11.12, '16:18'], [11.12, '16:19'], [11.12, '16:20'], [11.12, '16:21'], [11.12, '16:22'], [11.12, '16:23'], [11.12, '16:24'], [11.12, '16:25'], [11.12, '16:26'], [11.12, '16:27'], [11.12, '16:28'], [11.12, '16:29'], [11.12, '16:30'], [11.12, '16:31'], [11.12, '16:32'], [11.12, '16:33'], [11.12, '16:34'], [11.12, '16:35'], [11.12, '16:36'], [11.12, '16:37'], [11.12, '16:38'], [11.12, '16:39'], [11.12, '16:40'], [11.12, '16:41'], [11.12, '16:42'], [11.12, '16:43'], [11.12, '16:44'], [11.12, '16:45'], [11.12, '16:46'], [11.12, '16:47'], [11.12, '16:48'], [11.12, '16:49'], [11.12, '16:50'], [11.12, '16:51'], [11.12, '16:52'], [11.12, '16:53'], [11.12, '16:54'], [11.12, '16:55'], [11.12, '16:56'], [11.12, '16:57'], [11.12, '16:58'], [11.12, '16:59'], [11.12, '17:00'], [11.12, '17:01'], [11.12, '17:02'], [11.12, '17:03'], [11.12, '17:04'], [11.12, '17:05'], [11.12, '17:06'], [11.12, '17:07'], [11.12, '17:08'], [11.12, '17:09'], [11.12, '17:10'], [11.12, '17:11'], [11.12, '17:12'], [11.12, '17:13'], [11.12, '17:14'], [11.12, '17:15'], [11.12, '17:16'], [11.12, '17:17'], [11.12, '17:18'], [11.12, '17:19'], [11.12, '17:20'], [11.12, '17:21'], [11.12, '17:22'], [11.12, '17:23'], [11.12, '17:24'], [11.12, '17:25'], [11.12, '17:26'], [11.12, '17:27'], [11.12, '17:28'], [11.12, '17:29'], [11.12, '17:30'], [11.12, '17:31'], [11.12, '17:32'], [11.12, '17:33'], [11.12, '17:34'], [11.12, '17:35'], [11.12, '17:36'], [11.12, '17:37'], [11.12, '17:38'], [11.12, '17:39'], [11.12, '17:40'], [11.12, '17:41'], [11.12, '17:42'], [11.12, '17:43'], [11.12, '17:44'], [11.12, '17:45'], [11.12, '17:46'], [11.12, '17:47'], [11.12, '17:48'], [11.12, '17:49'], [11.12, '17:50'], [11.12, '17:51'], [11.12, '17:52'], [11.12, '17:53'], [11.12, '17:54'], [11.12, '17:55'], [11.12, '17:56'], [11.12, '17:57'], [11.12, '17:58'], [11.12, '17:59']],
                // data: [[984.58, '00:00'], [984.58, '01:00'], [984.58, '02:00'], [984.58, '03:00'], [984.58, '04:00'], [984.58, '05:00'], [984.58, '06:00'], [984.58, '07:00'], [984.58, '08:00'], [984.58, '09:00'], [984.58, '10:00'], [984.58, '11:00'], [984.58, '12:00'], [984.58, '13:00'], [984.58, '14:00'], [984.58, '15:00'], [984.58, '16:00'], [984.58, '17:00'], [984.58, '18:00'], [984.58, '19:00'], [984.58, '20:00'], [984.58, '21:00'], [984.58, '22:00'], [984.58, '23:00']],
                coordinateSystem: 'polar',
            }
        ]
    };
    return (
        <Card>
            <Card.Header>
                <h4>校园晚高峰统计</h4>
            </Card.Header>
            <Card.Body>
                <Ec option={option} h='400px'/>
            </Card.Body>
        </Card>
    )
}