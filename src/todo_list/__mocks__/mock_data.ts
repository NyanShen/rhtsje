const mockData: any = {
    "/undolist.json": {
        data: [
            {
                status: "div",
                value: "Nyan Shen"
            }
        ],
        success: true
    }
}

export const getMockDataByUrl = (url: string) => {
    return mockData[url];
}