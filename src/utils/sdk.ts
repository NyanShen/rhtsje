import { ServerNode } from '../api/config'
import { getSelectNetwork } from './storage'
import CITASDK from '@citahub/cita-sdk'

var serverNode: ServerNode = getSelectNetwork()
const citaSDK = CITASDK(serverNode.url)

export default citaSDK
