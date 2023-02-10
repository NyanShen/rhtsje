import React, { useState } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'

import { format0x, isAddress, isBlockHeight, isHash } from "../../utils/web3"
import * as dataApi from "../../api/dataAPI"
import { TransactionItem } from "../../redux/states/transaction"
import header_logo from "../../images/header_logo.png"
import "./index.styl"

const Sidebar = () => {
    const [searchText, setSearchText] = useState<string>("")
    const { Search } = Input
    let history = useHistory()
    /**
     * 输入赋值
     * @param event 
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }
    /**
     * handle key down event
     * @param event 
     */
    const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13 && searchText) {
            handleSearch()
        }
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
                return
            }
            let block: any = await dataApi.getBlock(searchText)
            if (block) {
                history.push("/block/" + searchText)
                return
            }
            history.push("/search?q=" + searchText)

        } else {
            console.log("search text is nothing")
            history.push("/search?q=" + searchText)
        }
        setSearchText("");
    }
    return (
        <div className="input-group">
            <Search
                size="large"
                prefix={<SearchOutlined />}
                maxLength={66} type="text"
                placeholder="搜索 区块 / 交易 / 地址"
                enterButton="搜索"
                required
                value={searchText}
                onChange={handleInputChange}
                onKeyUp={handleKeyup}
                onSearch={handleSearch}
            />
        </div>
    )
}

const AppHeader = () => {
    /**
     * 打开关闭抽屉
     */
    const [open, setOpen] = useState<boolean>(true);

    let history = useHistory()
    const handleBackHome = () => {
        history.push("/")
    }
    return (
        <div className="header">
            <div className="withRow container" style={{ height: 41 }}>
                <div className="headerLogo operationItem" onClick={handleBackHome}>
                    <img src={header_logo} />
                    <div className="headerTitle">
                        <p className="p1">处方流转链</p>
                        <p className="p2">cita Microscope</p>
                    </div>
                </div>
                <div className="flex_1 leftAuto">
                    <Sidebar />
                </div>
            </div>


        </div>
    )
}

export default AppHeader