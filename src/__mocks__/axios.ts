const mock_axios: any = jest.genMockFromModule("axios");
mock_axios.create = jest.fn(() => mock_axios);
mock_axios.request = (param: any) => {
    return new Promise((resolve, reject) => {
        resolve("data")
    })
}