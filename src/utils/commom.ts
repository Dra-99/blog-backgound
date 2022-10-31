import { } from "@ant-design/pro-components"
interface ResponseData {
    code: number
    msg: string
    data: []
}

export const isSuccessful = (data: ResponseData) => {
    if (data.code === 0) {
        return data.data
    } else {
        return false
    }
}