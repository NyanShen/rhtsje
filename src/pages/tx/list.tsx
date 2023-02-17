import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Tooltip, Pagination } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

import Content from "../../components/content";
import ContentHeader from "../../components/contentHeader/index";
import { hiddenHash } from "../../utils/index";
import "./list.styl"
interface DataType {
    hash: string;
    blockHeight: number;
    blocktime: number;
    from: string;
    to: string;
    method: string;
}
interface IPagination {
    total: number,
    currentPage: number,
    pageSize: number
}
const txList = () => {
    const testData = { "total": 1876082046, "hits": [{ "hash": "0x895155c80f03013582ed0cf0297a36f93fc984ac811798bc450b2a3f88c91fa6", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0xde6e15e8afe892d1cee0deac31356a0e45f28859", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001197961, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0xb1457b6522f2d0c2bb03d58322704390fea207a8dc216506951169b64c6347fa", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0x7390dac34edb9da6fac9702070da55478de877e9", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001198309, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0xcf546127f7d1d7167a6d5662c8338588836555aef3253070cb705b4803edb107", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0x864c0dbe7211a8ace750373001a8e9ba7990250d", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001198309, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0xea54b17d93d7a4a7da10de48767bf118871dac19de2846bc2b89861753e1ca3d", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0x2982490dd19d3fc2fa193cc8501f58a96295b102", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001197961, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0xdd1c75f0c136bf9309b6d358fbff5de7ac98b0b71b76f106a9790e0f5eef0bba", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0x2b218022", "method": "0x2b218022", "from": "0x8e9a4c20e6c585d14ab1c67c16fab3d2aa7a43a9", "to": "0x8252df1d8b29057d1afe3062bf5a64d503152bc8", "value": 0.0, "fee": 0.005558633, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true }, { "hash": "0x7f9f53ef5646b613580c35482137a9875bc7ca82c8cc3a92c567c603a7b4e313", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0xc3e0205125d37d2839d980d6c7c80f95d9ca5b36", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001198309, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0x7a88b58d635469373b91f272c14df54640ee26af480c8013ca270c8d2b2a308d", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0x3d13f874", "method": "claim", "from": "0xfd845e60eaea6c960d2a2b6f490b53d26925d5cb", "to": "0xf2d15c0a89428c9251d71a0e29b39ff1e86bce25", "value": 0.0, "fee": 0.003221001, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Blur. Air Drop", "toEntityTag": "Blur. Air Drop" }, { "hash": "0x5ba7f1bbe313f7619f50e4509418a7a2d8792a55061c482937c5b4037032dea1", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0x4addf36abbc635c4825fd672ed0b07b74c0c4adb", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001198309, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0xec57df4d5335851313f1b371179fd8ada7324960dbc7c8cfc4cced60f1d85d86", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0x55944a42", "method": "0x55944a42", "from": "0x90bf1dfcb7a7ee8ed6377aa72166e7450f75f7ef", "to": "0x00000000006c3852cbef3e08e8df289169ede581", "value": 0.0, "fee": 0.008447293313284442, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: OpenSea. Seaport 1.1", "toEntityTag": "OpenSea. Seaport 1.1" }, { "hash": "0xfc18f51341884942ec140359d0c7b0ef79dd7a7aff32d3c646c586afc4c67063", "blockHeight": 16645902, "blocktime": 1676606171, "method": "ETH transfer", "from": "0x786ad398b262c9b8ee08935bdbcdae2688e581d1", "to": "0x0b07ff15ede1351653b2de0f5af23e39a7fd0632", "value": 0.007460503600835414, "fee": 6.04424529471E-4, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": false }, { "hash": "0x184c6d664c532834fddfdfc7009925a929ed905af48246a89572b510e515b45b", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xb88d4fde", "method": "safeTransferFrom", "from": "0x92505676b6980207c08725acd85d8a491fa6b194", "to": "0xe80acc8335b7c221657d1ebc6b2ee86aca379de2", "value": 0.0, "fee": 0.002122220869334034, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true }, { "hash": "0x2fd5ef725d1fd0e77c36bc8d959e1a05fa98896efd751504e189589dd5338785", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xf104489f", "method": "0xf104489f", "from": "0xcaefd75ac57a091324e048d3cb2398a3c2e06bc9", "to": "0xb23d80f5fefcddaa212212f028021b41ded428cf", "value": 0.0, "fee": 0.002228196636834616, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true }, { "hash": "0x608bf898fa0231390588c5d7ea790b3a851386d65f45c195598dde6eac9fee39", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0x3bc33417", "method": "0x3bc33417", "from": "0x8606de07aa34505ff5c2348c60f8cde608340f7c", "to": "0xefc3996c47ec47e46532f553ce16ea8f25d60462", "value": 0.0, "fee": 0.004987229214072417, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true }, { "hash": "0x0625ab65360bcb17a29be5d1a55b6891eb2d28d62de4b1b0054db50386144ec7", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0x6dfc34609a05bc22319fa4cce1d1e2929548c0d7", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "value": 0.0, "fee": 0.001322141771154939, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Tether. USDT Stablecoin", "toEntityTag": "Tether. USDT Stablecoin" }, { "hash": "0x1801d10c9d966b2cfeb3d5677cba8b64fecc6a3fc1dadb915bf7498e29b88eb2", "blockHeight": 16645902, "blocktime": 1676606171, "method": "ETH transfer", "from": "0x6dfc34609a05bc22319fa4cce1d1e2929548c0d7", "to": "0x28f064db09f073a001229a262d24689f3aa1e7d7", "value": 0.30908891, "fee": 7.7889E-4, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": false }, { "hash": "0x00a61977cff86a8c73c7e8bab1b1bd6a8bc316b8b4ebe529c53a94d7a8f05723", "blockHeight": 16645902, "blocktime": 1676606171, "method": "ETH transfer", "from": "0x6dfc34609a05bc22319fa4cce1d1e2929548c0d7", "to": "0x3802af97189131e350c482c58c202f46ae3ea6e1", "value": 0.60406631, "fee": 7.7889E-4, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": false, "hoverTo": "Exchange: Coinbase. User", "toEntityTag": "Coinbase. User" }, { "hash": "0xc8629f26c7ef0c3614e1473acfd53286677de5e91f533b39bc73c51b62a0b1d4", "blockHeight": 16645902, "blocktime": 1676606171, "methodId": "0xa9059cbb", "method": "transfer", "from": "0xd0e979575f5c78d00a298454a5c4a2c2d9e9f5ac", "to": "0xbb126042235e6bd38b17744cb31a8bf4a206c045", "value": 0.0, "fee": 0.0011045319417198, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "fromEntityTag": "Huobi. User", "hoverFrom": "Exchange: Huobi. User" }, { "hash": "0x02a1dae00600315f85aef8cf7b6abb76d2f02c4fdabacf9857b950f124d1d6bc", "blockHeight": 16645902, "blocktime": 1676606171, "method": "ETH transfer", "from": "0x1c727a55ea3c11b0ab7d3a361fe0f3c47ce6de5d", "to": "0x174a911e7aa2baad9413909d50080b517679068c", "value": 1.4032764706073406, "fee": 5.98124529471E-4, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": false }, { "hash": "0xc4c0a745ba7452a122b39e015661191b368dc236e63de36871aa0d51fc8c3aad", "blockHeight": 16645902, "blocktime": 1676606171, "method": "ETH transfer", "from": "0x749f2131e71cfd5bc8001b338900729204ecad68", "to": "0x5020603b7fbe2898e0076618257bdfe2d03d89c1", "value": 0.060670325470529, "fee": 5.98124529471E-4, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": false }, { "hash": "0x92e426231f2891163988e2ad269cef4bfecdd7c963c69b2bb4fa3d15b99e4284", "blockHeight": 16645902, "blocktime": 1676606171, "method": "ETH transfer", "from": "0x5f927395213ee6b95de97bddcb1b2b1c0f16844f", "to": "0x388c818ca8b9251b393131c08a736a67ccb19297", "value": 0.04740829588057951, "fee": 6.29594514784681E-4, "isError": false, "status": "0x1", "isFromContract": false, "isToContract": true, "hoverTo": "DeFi: Lido. Execution Layer Rewards Vault", "toEntityTag": "Lido. Execution Layer Rewards Vault" }] }
    const [pagination, setPagination] = useState<IPagination>({
        total: 1000,
        currentPage: 1,
        pageSize: 10,
    })
    const [transactionList, setTransationList] = useState(testData.hits);
    const columns: ColumnsType<DataType> = [
        {
            title: "交易哈希",
            dataIndex: "hash",
            key: "hash",
            width: 136,
            ellipsis: true,
            render: (text: string) => <Tooltip title={text} placement="topLeft" overlayStyle={{ fontSize: 10 }}><a>{text}</a></Tooltip>
        },
        {
            title: "方法",
            dataIndex: "method",
            key: "method",
            width: 136,
            render: (text: string) => <Tag color="#2279ea" key={text}>{text}</Tag>
        },
        {
            title: "所在区块",
            dataIndex: "blockHeight",
            key: "blockHeight",
            width: 136,
            render: (text: string) => <Link to={"/blockDetail"}>{text}</Link>
        },
        {
            title: "时间",
            dataIndex: "blocktime",
            key: "blocktime",
            width: 136,
            render: (text: string) => <span>{text}</span>
        },
        {
            title: "发送方",
            dataIndex: "from",
            key: "from",
            width: 150,
            render: (text: string) => <Link to={"/txDetail/" + text}>{hiddenHash(text)}</Link>
        },
        {
            title: "接收方",
            dataIndex: "to",
            key: "to",
            width: 150,
            render: (text: string) => <Link to={"/txDetail/" + text}>{hiddenHash(text)}</Link>
        },
    ]
    const paginationConfig: TablePaginationConfig = {
        itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
                return <a className="icon iconfont icon-arrow-left-bold"></a>;
            }
            if (type === 'next') {
                return <a className="icon iconfont icon-arrow-right-bold"></a>;
            }
            return originalElement;
        },
        showSizeChanger: true
    }
    return (
        <Content>
            <ContentHeader></ContentHeader>
            <div className="flex-row_c flex-bt">
                <div>
                    共计
                    <span>{pagination.total}</span>
                    笔交易(仅展示近半年交易)
                </div>
                <ul className="flex-row_c top-pagination">
                    <li className="arrow">
                        <span className="icon iconfont icon-arrow-left-bold"></span>
                    </li>
                    <li className="page-data">{pagination.currentPage} / {pagination.total / pagination.pageSize}</li>
                    <li className="arrow">
                        <span className="icon iconfont icon-arrow-right-bold"></span>
                    </li>
                </ul>
            </div>
            <div className="table-border_top">
                <Table
                    columns={columns}
                    dataSource={transactionList}
                    rowKey={record => record.blocktime}
                    pagination={paginationConfig}
                ></Table>
            </div>
        </Content>
    )
}
export default txList