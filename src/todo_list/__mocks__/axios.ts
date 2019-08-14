import { getMockDataByUrl } from "../__mocks__/mock-data";

export default {
    get(url) {
        const mockUndoList = getMockDataByUrl(url)
        return new Promise((resolve) => {
            resolve(mockUndoList)
        })
    }
}