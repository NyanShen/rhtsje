import { getMockDataByUrl } from "./mock_data";

export default {
    get(url) {
        const mockUndoList = getMockDataByUrl(url)
        return new Promise((resolve) => {
            resolve(mockUndoList)
        })
    }
}