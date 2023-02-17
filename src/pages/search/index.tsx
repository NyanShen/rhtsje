import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { Input, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import { format0x, isAddress, isBlockHeight, isHash } from "../../utils/web3"
import * as dataApi from "../../api/dataAPI"
import { TransactionItem } from "../../redux/states/transaction"
import { BlockItem } from "../../redux/states/block"
import Content from "../../components/content"
import search_empty from "../../images/search_empty.png"
import "./index.styl";

const Search = () => {
    const [searchText, setSearchText] = useState<string>("")
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        let params = location.search.replace('?q=', '')
        setSearchText(decodeURI(params));
    }, [location])

    /**
     * 输入赋值
     * @param event 
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }
    /**
     * 查询
     */
    const handleSearch = async () => {
        if (!searchText) {
            return
        }
        if (isAddress(searchText)) {
            console.log("search text is address")
            history.push("/account/" + format0x(searchText))
        } else if (isBlockHeight(searchText)) {
            console.log("search text is block height")
        } else if (isHash(searchText)) {
            console.log("search text is hash")
            let transaction: TransactionItem | null = await dataApi.getTransaction(searchText)
            if (transaction) {
                history.push("/tx/" + searchText)
                setSearchText("");
                return
            }
            let block: BlockItem | null = await dataApi.getBlock(searchText)
            if (block) {
                history.push("/block/" + searchText)
                setSearchText("");
                return
            }
            history.push("/search?q=" + searchText)

        } else {
            console.log("search text is nothing")
            history.push("/search?q=" + searchText)
        }
    }
    return (
        <Content>
            <div className="index-wrapper_top">
                <div className="flex-row_c">
                    <Input
                        size="large"
                        placeholder="搜索 区块 / 交易 / 地址"
                        prefix={<SearchOutlined />}
                        value={searchText}
                        allowClear
                        onChange={handleInputChange}

                    />
                    <Button
                        size="large"
                        className="search-btn"
                        type="primary"
                        onClick={handleSearch}
                    >
                        搜索
                    </Button>
                </div>
            </div>
            <div className="search-content flex-column_c">
                <img src={search_empty} />
                <p className="search-empty_text">未找到符合搜索内容的数据，请修正后重试</p>
            </div>
        </Content>
    )
}
export default Search